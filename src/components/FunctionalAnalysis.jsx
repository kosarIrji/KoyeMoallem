import FunctionalPieChart from "./charts/FunctionalPieChart";
import MapFunctionalAnalysis from "./MapFunctionalAnalysis";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import Details from "../components/config/details.json";
import Accordion from "./ui/Accordion";

import { FaBuilding } from "react-icons/fa";

export default function FunctionalAnalysis() {
  return (
    <motion.div
      className="grid w-full lg:grid-cols-4 mt-3  lg:mb-5 gap-3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ستون 1: متن و نمودار */}
      <div className="lg:col-span-2 col-span-4  border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm p-5   text-xl w-full">
        <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
          ویژگی‌های عملکردی محله  {Details.alley.name}
          <span>
            <Layers size={28} />
          </span>
        </h3>
        <p className="md:leading-loose  whitespace-pre-line lg:leading-loose font-modam  text-justify text-base  ">
          محله کوی معلم با بافتی غالباً مسکونی، محیطی آرام و مناسب برای سکونت
          فراهم کرده است. موقعیت آن به گونه‌ای است که ساکنان علاوه بر دسترسی
          آسان به مرکز شهر، از خدمات متنوع در داخل محله نیز بهره‌مند می‌شوند.
          <br />
          کاربری‌های تجاری عمدتاً در مرزهای شرقی و جنوبی و در امتداد خیابان‌های
          اصلی قرار دارند و واحدهای تجاری–مسکونی در معابر داخلی، به پویایی و
          سرزندگی روزانه محله کمک می‌کنند.
        </p>
        {/* باکس ۲: واقعیت آماری */}

        <Accordion
          title={
            <span className="font-bold flex gap-2  text-base text-[var(--sidebar)]">
              <FaBuilding size={22} className="text-[var(--sidebar)]" />
              کاربری های شاخص :
            </span>
          }
          content={
            <ul>
              <li>
                <strong className="text-gray-800">• آموزشی</strong>: وجود ۱۹{" "}
                <span className="bg-blue-300"> واحد آموزشی</span>، پاسخ‌گوی کامل
                نیازهای آموزشی در مقاطع مختلف است.
                <br />
              </li>
              <li>
                <strong className="text-gray-800">• کتابخانه مرکزی </strong>:
                فضایی برای مطالعه، فعالیت‌های فرهنگی و برگزاری کارگاه‌های آموزشی
                که به تقویت هویت محله و تعاملات اجتماعی کمک می‌کند.
                <br />
              </li>
              <li>
                <strong className="text-gray-800">• بیمارستان ارتش </strong>:{" "}
                <strong className="text-red-800">
                  درکنار پایگاه اورژانس و خانه بهداشت
                </strong>
                ، دسترسی به خدمات درمانی را برای ساکنان فراهم می‌کند.
                <br />
                </li>
                <li>
                  
                <strong className="text-gray-800">• فضای سبز</strong>: شامل پارک
                پلیس، پارک خطی حاشیه محله در شمال و غرب و پارک‌های محلی داخل
                محله، که امکان فعالیت‌های اجتماعی و تفریحی را فراهم می‌کنند.
                <br />
              </li>
              <li>
                <strong className="text-gray-800">• تجاری و خدماتی</strong>:
                کاربری‌های تجاری و خدماتی در حاشیه محله و معابر شریانی مستقر
                شده‌اند و علاوه بر دسترسی آسان به خدمات، سرزندگی و فعالیت
                اجتماعی محله را تقویت می‌کنند.
                <br />
              </li>
              <li>
                <strong className="text-gray-800">•زمین‌های بایر </strong>
                :زمین‌های بایر موجود در{" "}
                <span className="bg-yellow-300">شرق</span> محله، به‌ویژه در
                امتداد خیابان صیاد شیرازی، فرصتی برای گسترش کاربری‌های مسکونی،
                تجاری و خدماتی در آینده محسوب می‌شوند. <br />
              </li>
            </ul>
          }
        />

        <p className="font-modam text-base md:leading-loose lg:leading-loose text-gray-800   ">
          <strong>
            "کوی معلم با ترکیب متعادل سکونت، خدمات، فضای سبز و ظرفیت توسعه، یکی
            از محلات کامل و رو به رشد شهر است که هم برای{" "}
            <span className="text-green-800">سکونت و هم برای سرمایه‌گذاری</span>{" "}
            گزینه مطلوبی به شمار می‌رود."
          </strong>{" "}
        </p>
      </div>
      <div className="col-span-4 lg:col-span-2 border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm pl-5 pr-5 pt-5   text-xl w-full">
        <FunctionalPieChart />
      </div>

      {/* ستون 2 و 3: نقشه */}
      <motion.div
        className="col-span-4 shadow-md rounded-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <MapFunctionalAnalysis />
      </motion.div>
    </motion.div>
  );
}
