import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import { ShieldCheck, WarningOctagon, TrendUp, Skull } from "phosphor-react";

// ستون‌ها با آیکون حرفه‌ای
const columnTitles = [
  {
    key: "strengths",
    label: "نقاط قوت",
    bg: "bg-green-600",
    text: "text-white",
    icon: ShieldCheck,
  },
  {
    key: "weaknesses",
    label: "نقاط ضعف",
    bg: "bg-red-600",
    text: "text-white",
    icon: WarningOctagon,
  },
  {
    key: "opportunities",
    label: "فرصت‌ها",
    bg: "bg-blue-600",
    text: "text-white",
    icon: TrendUp,
  },
  {
    key: "threats",
    label: "تهدیدها",
    bg: "bg-yellow-500",
    text: "text-black",
    icon: Skull,
  },
];
const rows = [
  {
    strengths: "دسترسی مناسب به مراکز خدماتی  و دولتی",
    weaknesses: "عرض  کم معابر فرعی ",
    opportunities: "پتانسیل  بالای مشارکت در ساخت و نوسازی خانه های فرسوده",
    threats: "فرسودگی بخشی از املاک با قدمت بالا به مرور زمان",
  },
  {
    strengths: "وجود امکانات شهری در محله ",
    weaknesses: " وجود بافت قدیمی و فرسوده در کنار ساختمان های جدید",
    opportunities: "فرصت ساخت و ساز در بخش ساخته نشده (مرز شرقی محله)",
    threats: "شلوغی و ترافیک در محله در ساعات تعطیلی مدارس",
  },
  {
    strengths:"آرامش و آسایش در محله ",
    weaknesses: "                                ",
    opportunities: "فرصت افزایش کیفیت معابر (سواره و پیاده)  خصوصا در معابر محلی",
    threats: "به دلیل ارتفاع  و قدمت نا متوازن ساختمان ها ،امکان از بین رفتن نظم بصری در این محله وجود دارد",
  },
 
];

const cellColors = {
  strengths: "bg-green-100 border-green-200",
  weaknesses: "bg-red-100 border-red-200",
  opportunities: "bg-blue-100 border-blue-200",
  threats: "bg-yellow-100 border-yellow-200",
};

const TableSection = ({ columns, colCount }) => (
  <div className="overflow-auto text-base sm:text-xs md:text-base w-full">
    <div
      className={`grid ${colCount === 4 ? "grid-cols-4" : "grid-cols-2"} gap-2  font-modam text-center border-b`}
    >
      {columns.map(({ key, label, bg, text, icon: Icon }) => (
        <div
          key={key}
          className={`rounded py-2 px-1 flex items-center justify-center gap-2 ${bg} ${text}`}
        >
          <Icon size={18} weight="bold" />
          <span>{label}</span>
        </div>
      ))}
    </div>

    {rows.map((row, index) => (
      <motion.div
        key={index}
        className={`grid ${colCount === 4 ? "grid-cols-4" : "grid-cols-2"} gap-2 py-1 px-1 w-full`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
      >
        {columns.map(({ key }) => (
          <div
            key={key}
            className={`p-2 rounded ${row[key] == "." ? "opacity-0 select-none" : null} border ${cellColors[key]}`}
          >
            {row[key]}
          </div>
        ))}
      </motion.div>
    ))}
  </div>
);

// خروجی اصلی
export default function SWOTSummary() {
  return (
    <div className="space-y-4 w-full h-full p-3">
      <h2 className="text-xl md:text-2xl font-extrabold text-[var(--text)] text-center">
        جدول خلاصه تحلیل SWOT
      </h2>

      {/* دسکتاپ */}
      <div className="hidden md:block">
        <TableSection columns={columnTitles} colCount={4} />
      </div>

      {/* موبایل */}
      <div className="block md:hidden space-y-6">
        <TableSection columns={columnTitles.slice(0, 2)} colCount={2} />
        <TableSection columns={columnTitles.slice(2, 4)} colCount={2} />
      </div>
    </div>
  );
}
