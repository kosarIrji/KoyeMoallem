import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const isMobile = window.innerWidth < 768;
const isLaptop = window.innerWidth < 1000;

const MapLanduse = () => {
  const mapRef = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);
  const tileLayerRef = useRef(null);

  const baseMaps = {
    osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

    light:
      "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
    carto: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  };

  const landuseMapping = {
    10: "زمین خالی و بایر",
    11: "مسکونی",
    12: "اموزشی تحقیقات",
    13: "آموزشی",
    14: "اداری",
    15: "تجاری",
    17: "درمانی",
    18: "مذهبی",
    19: "فضای سبز",
    21: "تاسیسات شهری",

    30: "مختلط تجاری-مسکونی",
    20: " سایر",
  };

  const landuseColors = {
    "زمین خالی و بایر": "rgb(200,200,200)", // رنگ پیش‌فرض انتخاب شده
    مسکونی: "rgb(255,255,0)",
    آموزشی: "rgb(155,215,200)", // به جای "آموزشی تحقیقات" و "آموزشی"
    اداری: "rgb(144,144,144)",
    تجاری: "rgb(255,0,0)",
    درمانی: "rgb(0,200,150)", // رنگ پیشنهادی چون در لیست اصلی نبود
    مذهبی: "rgb(151,120,120)",
    "فضای سبز": "rgb(0,255,0)", // رنگ پیشنهادی چون در لیست اصلی نبود
    "تاسیسات شهری": "rgb(155,157,0)", // تطبیق با "تجهیزات شهری"
    "تجهیزات شهری": "rgb(20,250,360)",

    سایر: "rgb(102,102,102)",
    "مختلط تجاری-مسکونی": "rgb(142,63,127)",
  };

  const getColorByLanduseCode = (code) => {
    const name = landuseMapping[code];
    return landuseColors[name] || "#cccccc";
  };

  useEffect(() => {
    const map = L.map(mapRef.current, {
      zoomControl: true,
      scrollWheelZoom: true,
    }).setView([37.474, 57.3337], 16);

    const tileLayer = L.tileLayer(baseMaps.osm).addTo(map);
    tileLayerRef.current = tileLayer;
    setMapInstance(map);

    fetch("./data/m17_FeaturesToJSON.geojson")
      .then((res) => res.json())
      .then((data) => {
        const layer = L.geoJSON(data, {
          style: function (feature) {
            const code = parseInt(feature.properties.Landuse_id);
            return {
              color: "#333",
              weight: 0.8,
              fillColor: getColorByLanduseCode(code),
              fillOpacity: 0.7,
            };
          },
          onEachFeature: function (feature, layer) {
            const code = parseInt(feature.properties.Landuse_id);
            const name = landuseMapping[code] || "نامشخص";
            layer.bindPopup(`<b>نوع کاربری:</b> ${name}`);
            layer.bindTooltip(`کاربری: ${name}`, {
              permanent: false,
              direction: "top",
              className: "landuse-label",
              fontFamily: "modam",
            });
          },
        }).addTo(map);

        map.fitBounds(layer.getBounds());
        map.setMinZoom(16);
        map.setMaxZoom(18);
        map.setMaxBounds(layer.getBounds());

        const legend = L.control({ position: "bottomright" });
        legend.onAdd = () => {
          const div = L.DomUtil.create("div", "legend");
          div.innerHTML =
            "<b>راهنمای کاربری:</b><br>" +
            Object.entries(landuseColors)
              .map(
                ([label, color]) =>
                  `<span class="legend-color-box" style="background:${color}"></span>${label}`
              )
              .join("<br>");
          return div;
        };
        legend.addTo(map);

        const basemapControl = L.control({ position: "topright" });
        basemapControl.onAdd = function () {
          const div = L.DomUtil.create("div", "map-style-control");
          div.innerHTML = `
            <select id="basemapSelect" calss="map-style-control">
            <option value="osm" >OSM کلاسیک</option>
              <option value="light">Light</option>
              <option value="carto">Carto Streets</option>
            
            </select>
          `;
          return div;
        };
        basemapControl.addTo(map);

        setTimeout(() => {
          document
            .getElementById("basemapSelect")
            .addEventListener("change", (e) => {
              tileLayer.setUrl(baseMaps[e.target.value]);
            });
        }, 500);
      })
      .catch((err) => {
        console.error("خطا در خواندن GeoJSON:", err);
      });

    return () => map.remove();
  }, []);

  return (
    <div style={{ direction: "rtl", fontFamily: "Modam" }}>
      <div
        id="map"
        ref={mapRef}
        style={{
          borderRadius: "10px",
          height: isMobile ? (isLaptop ? "600px" : "600px") : "600px",

          width: "100%",
        }}
      ></div>
      <style>{`
        @font-face {
          font-family: 'Modam';
          src: url('./fonts/Modam.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        html, body, #root {
          height: 100%;
          margin: 0;
          padding: 0;
          border-radius:10px
        }

        .legend {
          font-family: 'Modam';
          background: [#FFF6EB];
          padding: 10px;
          border-radius: 5px;
          box-shadow: 0 0 5px #aaa;
          font-size: 14px;
          color:#000; 
        }

        .legend-color-box {
          display: inline-block;
          width: 16px;
          height: 16px;
          margin-left: 6px;
          vertical-align: middle;
        }

        .landuse-label {
          font-weight: bold;
          color: #000;
          background-color: rgba(255,255,255,0.8);
          padding: 2px 4px;
          border-radius: 3px;
          font-family: 'Modam';
        }

        .map-style-control {
          background:white/30;
          backdrop-filter:blur(8px);
          padding: 8px;
          border-radius: 5px;
          box-shadow: 0 0 5px rgba(0,0,0,0.3);
          font-family: 'Modam';
          color: #000;
        }

        .map-style-control select {
          backdrop-filter:blur(8px);
          padding: 4px 8px;
          font-size: 14px;
          font-family: 'Modam';
        }
      `}</style>
    </div>
  );
};

export default MapLanduse;
