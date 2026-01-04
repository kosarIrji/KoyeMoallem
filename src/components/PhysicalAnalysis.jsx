import MapAnalysis from "./MapAnalysis";

import FloorChartSelector from "../components/charts/FloorChartSelector";
import GhedmatChartSelector from "../components/charts/GhedmatChartSelector";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { useState } from "react";
import { FaCity, FaChartBar, FaTree } from "react-icons/fa";
import Accordion from "./ui/Accordion";

function PhysicalAnalysis() {
  const [selectedComponent, setSelectedComponent] = useState("ghemat");
  const [chartType, setChartType] = useState("bar");
  return (
    <section className="w-full  ">
      <motion.div
        className=" "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="col-span-1 lg:grid grid-cols-6 lg:gap-4 md:col-span-1 h-full ">
          <div className="border col-span-4 bg-white/50 backdrop-blur-md rounded-2xl shadow-lg pb-6 sm:px-4 md:px-4 p-5 mt-3 ">
            <h3 className="text-3xl  w-full flex flex-row-reverse items-center text-right justify-end gap-2 font-modam font-extrabold text-[var(--text)] mb-4 leading-snug">
              کوی معلم؛ محله‌ای آرام ، منظم ، باکیفیت
              <span className="">
                {" "}
                <FaCity size={28} />
              </span>
            </h3>
            <div className=" md:leading-loose  whitespace-pre-line lg:leading-loose   text-justify text-base ">
              <p className="font-modam text-base md:leading-loose lg:leading-loos text-gray-800 ">
                محله کوی معلم با{" "}
                <strong className="text-purple-800">فضایی آرام</strong>، غالبا
                مسکونی و{" "}
                <strong className="text-purple-800">ساختاری منظم</strong> شناخته
                می‌شود.{" "}
                <strong>
                  بلوک‌بندی و قطعه‌بندی <span className="text-blue-800"></span>
                </strong>
                ، چهره‌ای منظم به محله داده و برای سکونت ساختار مناسیبی دارد
                بیشتر ساختمان‌ها همکف یا ویلایی هستند، اما در سال‌های اخیر
                بسیاری از املاک با تراکم بالاتر بازسازی شده‌اند. در بخش‌های شرقی
                و جنوبی، ساختمان‌های ۴ تا ۷ طبقه نیز به چشم می‌خورند که
                نشان‌دهنده ظرفیت بالای محله برای توسعه عمودی است.
              </p>
            </div>
            {/* باکس ۳: نکته کلیدی */}
            <div className="bg-white/40 mb-1 border-r-4 border-green-500 shadow-md mt-2 p-2 ">
              <h4 className=" gap-2 text-green-600 ">
                <FaTree size={22} className="text-green-600" />
                <span className="font-bold text-base"> نکته ساختاری:</span>
              </h4>
              <p className="font-modam text-base md:leading-loose lg:leading-loose  text-gray-800 ">
                در مرزهای شمالی و غربی، وجود پارک‌های حاشیه‌ای علاوه بر ایجاد
                چشم‌انداز سبز، آرامش و کیفیت زندگی را در محله افزایش داده است.
              </p>
            </div>
            {/* باکس ۲: واقعیت آماری */}
            
              <Accordion 
                title={
                  <span className="font-bold flex gap-2  text-base text-[var(--sidebar)]">
                    <FaChartBar size={22} className="text-[var(--sidebar)]" />
                    واقعیت‌های آماری و پتانسیل‌ها:
                  </span>
                }
                content={
                  <ul>
                    <li>
                      <strong className="text-red-800">
                        • میانگین قدمت املاک :
                      </strong>{" "}
                      _ بیانگر کیفیت مناسب و قدمت نسبتا مطلوب بافت مسکونی.{" "}
                      <br />{" "}
                    </li>
                    <li>
                      <strong className="text-red-800">
                        • ۱۹۶ ساختمان با قدمت ۳۰ تا ۵۰ سال :
                      </strong>{" "}
                      عمدتاً ویلایی و حیاط‌دار؛ فرصت ارزشمند برای نوسازی و
                      بازسازی. <br />{" "}
                    </li>
                    <li>
                      <strong className="text-red-800">• ۳۹ زمین بایر :</strong>{" "}
                      عمدتاً در مرز شرقی محله؛ موقعیتی ایده‌آل برای ساخت‌وساز
                      متراکم و سرمایه‌گذاری جدید. <br />{" "}
                    </li>
                    <li>
                      <strong className="text-red-800">
                        • ۱۹۰ ساختمان نوساز (۱ تا ۵ ساله) + ۲۸ پروژه در حال ساخت
                        :
                      </strong>{" "}
                      شانه‌ای از بافت نسبتاً نوساز و روند رو به رشد
                      سرمایه‌گذاری. <br />
                    </li>
                    <li>
                      <strong className="text-red-800">
                        • ۳ ملک غیرقابل سکونت :
                      </strong>{" "}
                      تعداد کم این املاک، کیفیت کلی ساخت‌وساز محله را تأیید
                      می‌کند. <br />{" "}
                    </li>
                  </ul>
                }
              />
           
            <p className="font-modam md:leading-loose lg:leading-loose text-base   "></p>
          </div>

          <motion.div
            className="flex- flex-col gap-3 border col-span-2  bg-white/50 backdrop-blur-md rounded-2xl shadow-lg mt-3  sm:px-4 md:px-4 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* دکمه‌ها و سلکت نوع نمودار */}
            <div className="flex flex-row justify-between gap-2 lg:max-w-[660px] mx-auto  px-4 sm:px-6 md:px-10 mt-5">
              {/* دکمه‌ها - در یک طرف */}
              <div className="flex gap-1 w-full ">
                {[
                  { label: "قدمت", value: "ghemat" },
                  { label: "طبقات", value: "tabaghat" },
                ].map((btn) => (
                  <Button
                    key={btn.value}
                    onClick={() => setSelectedComponent(btn.value)}
                    variant={
                      selectedComponent === btn.value ? "default" : "outline"
                    }
                    className="w-30 text-sm sm:text-base"
                  >
                    {btn.label}
                  </Button>
                ))}
              </div>

              {/* سلکت - در سمت دیگر */}
              <div className="w-full grid  justify-end">
                <select
                  value={chartType}
                  onChange={(e) => setChartType(e.target.value)}
                  className=" h-10 px-1 py-1 rounded-xl   self-end text-sm sm:text-base font-medium text-white bg-[var(--text)] hover:bg-[var(--sidebar)] transition"
                >
                  <option value="bar">نمودار میله‌ای</option>
                  <option value="line">نمودار خطی</option>
                  <option value="pie">نمودار دایره‌ای</option>
                </select>
              </div>
            </div>

            {/* نمایش نمودار انتخاب‌شده */}
            <div className="w-full lg:max-w-[600px] mx-auto ">
              {selectedComponent === "tabaghat" && (
                <FloorChartSelector chartType={chartType} />
              )}

              {selectedComponent === "ghemat" && (
                <GhedmatChartSelector chartType={chartType} />
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="col-span-1 md:col-span-2 shadow-md mt-3"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <MapAnalysis />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default PhysicalAnalysis;
