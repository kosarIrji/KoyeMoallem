import React from "react";
import { TrendingUp } from "lucide-react";
export default function Priorities() {
  return (
    // main component
    <div className="flex flex-col overflow-hidden w-full items-center justify-center pt-3 my-3 border bg-white/50 backdrop-blur-md shadow-md p-4 py-5 rounded-2xl">
      <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2 mt-2 font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
        
        اولویت های سرمایه گذاری
        <TrendingUp size={28} />
      </h3>
      {/* itmes container */}
      <div className="w-full p-4  flex flex-col lg:flex-row gap-[10px] justify-evenly xl:justify-center items-center">
        {/* Box 1 */}
        <div className="rounded-xl shadow p-4 flex flex-col items-center justify-between w-full max-w-xs h-[240px] bg-gradient-to-t from-cyan-400 via-cyan-500 to-cyan-600">
          <h2 className="text-lg font-bold mb-2 text-gray-800">
            نوسازی بافت فرسوده:
          </h2>
          <p className="text-gray-600 text-center md:mt-5  text-sm sm:text-xl">
            تمرکز بر املاک ۳۰ تا ۵۰ ساله و غیرقابل سکونت برای مشارکت در ساخت
          </p>
        </div>
        {/* Box 2 */}
        <div className="rounded-xl shadow p-4 flex flex-col  items-center justify-between w-full max-w-xs h-[240px] bg-gradient-to-t from-cyan-900 via-cyan-700 to-cyan-500">
          <h2 className="text-lg font-bold mb-2 text-white">
            {" "}
            خرید زمین‌های بایر:
          </h2>
          <p className="text-white text-center md:mt-5  text-sm sm:text-xl">
            وجود تعداد قابل توجهی زمین بایر آماده ساخت ؛ مناسب برای آغاز
            پروژه‌های جدید و کوچک‌مقیاس
          </p>
        </div>
        {/* Box 3 */}
        <div className="rounded-xl shadow p-4 flex flex-col items-center justify-between w-full max-w-xs h-[240px] bg-gradient-to-t from-cyan-100 via-cyan-200 to-cyan-300">
          <h2 className="text-lg font-bold mb-2 text-gray-900"> خرید ملک:</h2>
          <p className="text-gray-800 text-center md:mt-5  text-sm sm:text-xl">
            به دلیل موقعیت مناسب محله و ارزش بالا و رو به افزایش املاک در
            محله{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
