import SummaryChart from "./SummryChart";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ClipboardCheck } from "lucide-react";
export default function Summary() {
  return (
    <section className="relative my-3 border bg-white/50 backdrop-blur-sm  rounded-2xl shadow-lg  py-3 sm:p-2 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" col-span-2 md:col-span-1  sm:p-2 p-5"
      >
       <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
          جمع بندی <ClipboardCheck size={28} />
        </h3>
        <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base ">
          محله کوی معلم در بجنورد دارای موقعیت خوب در شهر ، دسترسی مناسب به
          خدمات و امکانات شهری و فضایی آرام گزینه‌ای مطلوب برای سکونت است. وجود
          زمین‌های بایر و ساختمان‌های قدیمی، پتانسیل بالایی برای نوسازی و
          سرمایه‌گذاری فراهم کرده است. با این حال، معابر باریک و ترافیک در ساعات
          شلوغی مدارس از چالش‌های اصلی هستند. در مجموع، این محله با ترکیبی از
          آرامش، امکانات و فرصت‌های توسعه، کیفیت زندگی خوبی را ارائه
          می‌دهد.{" "}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="col-span-2 md:col-span-1"
      >
        <SummaryChart />
      </motion.div>
    </section>
  );
}
