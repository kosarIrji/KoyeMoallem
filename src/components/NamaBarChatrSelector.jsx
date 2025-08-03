import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const COLORS = [
  "#FF7073",
  "#EA9E8D",
  "#DBB3B1",
  "#FFE085",
  "#FED35D",
  "#96E6B3",
  "#73D3C9",
];

export default function NamaChart({chartType}) {
  const [data, setData] = useState([]);
 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExcel = async () => {
      try {
        const response = await fetch("./data/nama.xlsx");
        if (!response.ok) throw new Error("خطا در دریافت فایل");

        const blob = await response.blob();
        const arrayBuffer = await blob.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });

        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        const chartData = jsonData
          .map((row) => ({
            name: row["نما"] || "نامشخص",
            تعداد: Number(row["تعداد"]) || 0,
          }))
          .filter((item) => !isNaN(item.تعداد));

        setData(chartData);
        setLoading(false);
      } catch (err) {
        console.error("خطا:", err);
        setLoading(false);
      }
    };

    loadExcel();
  }, []);

  const renderChart = () => {
    if (data.length === 0)
      return (
        <div className="no-data-message">داده‌ای برای نمایش وجود ندارد</div>
      );

    switch (chartType) {
      case "bar":
        return (
          <BarChart
            data={data}
            margin={{ top: 20, bottom: 10 ,left:20}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="start"
              interval={0}
              height={60}
            />
            <YAxis width={10} tick={{ textAnchor: "satrt", fontSize: 13 }} />
            <Tooltip formatter={(value) => [`${value} عدد`, "تعداد"]} />
            <Legend layout="horizontal" verticalAlign="bottom" />
            <Bar
              dataKey="تعداد"
              name="تعداد نماها"
              barSize={25}
              radius={[4, 4, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        );
      case "line":
        return (
          <LineChart
            data={data}
         margin={{ top: 20, bottom: 10 ,left:20}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="satrt"
              interval={0}
              height={80}
            />
            <YAxis width={10} tick={{ textAnchor: "satrt", fontSize: 13 }} />
            <Tooltip formatter={(value) => [`${value} عدد`, "تعداد"]} />
            <Legend layout="horizontal" verticalAlign="bottom" />
            <Line
              type="monotone"
              dataKey="تعداد"
              name="تعداد نماها"
              stroke="#4e79a7"
              strokeWidth={2}
            />
          </LineChart>
        );
      case "pie":
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="تعداد"
              nameKey="name"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value} عدد`} />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              fontFamily="Modam"
            />
          </PieChart>
        );
      default:
        return null;
    }
  };

  return (
    <div className="chart-container w-full ">
      <div className="chart-header ">
       
        <h2 className="chart-title">نمودار توزیع نماها</h2>
      </div>

      {loading ? (
        <div className="loading-message">در حال بارگذاری داده‌ها...</div>
      ) : (
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={400}>
            {renderChart()}
          </ResponsiveContainer>
        </div>
      )}
      <style jsx>{`
        .chart-container {
          font-family: "Modam", Tahoma, sans-serif;
          direction: rtl;
          background-color: [#FFF6EB];
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          
        }

        .chart-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text);
          margin-right: 1rem;
        }

       
      

        .loading-message,
        .no-data-message {
          text-align: center;
          padding: 40px;
          color: #666;
          font-size: 16px;
        }

        .chart-wrapper {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
