import MapAnalysis from "./MapAnalysis";
import NamaBarChart from "./NamaBarChatrSelector";
import FloorChartSelector from "./FloorChartSelector";
import GhedmatChartSelector from "./GhedmatChartSelector";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Button } from "./Button";
import { useState } from "react";
import {Ruler}from "lucide-react"
function PhysicalAnalysis() {
  const [selectedComponent, setSelectedComponent] = useState("nama");
  const [chartType, setChartType] = useState("bar");
  return (
    <section className="w-full ">
      <motion.div
        className=" "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="col-span-1 border bg-white/50 backdrop-blur-md rounded-2xl shadow-lg  sm:px-4 md:px-4 p-5  md:col-span-1 ">
          <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
            تحلیل کالبدی محله کوی معلم<Ruler size={21} />
          </h3>
          <p className=" md:leading-loose lg:leading-loose font-modam  text-justify text-base ">
            محله کوی معلم با چهره‌ای آرام و مسکونی شناخته می‌شود و اکثر
            ساختمان‌ها در آن به صورت همکف یا ویلایی ساخته شده‌اند. با این حال،
            پراکندگی ساختمان‌های چند طبقه در سطح محله نشان می‌دهد که امکان
            ساخت‌وساز با تعداد طبقات بالا در تمامی نواحی وجود دارد؛ موضوعی که
            ظرفیت بالای این محله برای توسعه عمودی را تأیید می‌کند.
            <br /> وجود ۱۹۹ ساختمان با قدمت ۳۰ تا ۵۰ سال، در کنار ۳ بنای غیرقابل
            سکونت و ۳۹ زمین بایر، نشان‌دهنده پتانسیل بالای این محله برای نوسازی،
            بازسازی و مشارکت در ساخت است. از سوی دیگر، وجود ۱۹۰ ساختمان نوساز (۱
            تا ۵ ساله) و ۲۸ پروژه در حال ساخت، نشان‌دهنده تحرک مثبت ساخت‌وساز و
            استقبال سرمایه‌گذاران از توسعه در این محله است. این روند بیانگر رشد
            تدریجی نوسازی و افزایش جذابیت کوی معلم برای سرمایه‌گذاری‌های آتی
            می‌باشد.
          </p>
          <motion.div
            className="flex- flex-col  gap-3   "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* دکمه‌ها و سلکت نوع نمودار */}
            <div className="flex flex-row justify-between gap-2 lg:max-w-[660px] mx-auto  px-4 sm:px-6 md:px-10 mt-5">
              {/* دکمه‌ها - در یک طرف */}
              <div className="flex flex-wrap gap-3 w-full ">
                {[
                  { label: "طبقات", value: "tabaghat" },
                  { label: "قدمت", value: "ghemat" },
                  { label: "نما", value: "nama" },
                ].map((btn) => (
                  <Button
                    key={btn.value}
                    onClick={() => setSelectedComponent(btn.value)}
                    variant={
                      selectedComponent === btn.value ? "default" : "outline"
                    }
                    className="w-28 text-sm sm:text-base"
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
                  className=" h-10 px-3 py-1 rounded-xl   self-end text-sm sm:text-base font-medium text-white bg-[var(--text)] hover:bg-[var(--sidebar)] transition"
                >
                  <option value="bar">نمودار میله‌ای</option>
                  <option value="line">نمودار خطی</option>
                  <option value="pie">نمودار دایره‌ای</option>
                </select>
              </div>
            </div>

            {/* نمایش نمودار انتخاب‌شده */}
            <div className="w-full lg:max-w-[600px] mx-auto mt-8">
              {selectedComponent === "tabaghat" && (
                <FloorChartSelector chartType={chartType} />
              )}
              {selectedComponent === "nama" && (
                <NamaBarChart chartType={chartType} />
              )}
              {selectedComponent === "ghemat" && (
                <GhedmatChartSelector chartType={chartType} />
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="col-span-1 md:col-span-2 shadow-md mt-5"
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
