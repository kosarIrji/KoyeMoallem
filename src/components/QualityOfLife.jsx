/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import QualityOfLifeChart from "./QualityOfLifeChart";
import { Heart } from "lucide-react";
export default function QualityOfLife() {
  const data = [
    [100, 100, 80, 97, 84], //dochenar
    [96, 93, 95, 91, 98], //jomhori
    [93, 91, 96, 98, 90], //میرزاکوچکخان
    [93, 93, 96, 96, 91], //bsij
    [90, 89, 95, 93, 93], //کوی معلم
    [88, 86, 100, 94, 88], //bolvar
    [82, 81, 88, 89, 79], //mosala
  ];

  //     "سرزندگی اجتماعی",
  //     "دسترسی به خدمات شهری",
  //     "فضای سبز و آرامش",
  //     "امنیت",
  //     "کیفیت کالبدی محله",

  const names = [
    "دوچنار",
    "جمهوری",
    "میرزاکوچکخان",
    "بسیج",
    "کوی معلم",
    "بلوار",
    "مصلی",
  ];
  return (
    <section className="">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        {/* Box for text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative border bg-white/50 backdrop-blur-md rounded-2xl shadow-md p-5  col-span-2 md:col-span-1  h-[100%]"
        >
          <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)]  leading-snug ">
            کیفیت زندگی محله کوی معلم
            <Heart size={28} />
          </h3>
          <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base  mb-4">
            <br />
            🔐 امنیت : نرخ جرم و جنایت پایین _ نزدیکی به ادارات دولتی _ نزدیکی
            به معابر اصلی شهر _روشنایی مناسب معابر
            <br />
            🚍دسترسی به خدمات : وجود کاربری های آموزشی و کتابخانه ، مسجد و مراکز
            درمانی _ موقعیت و دسترسی مناسب به مرکز شهر
            <br />
            🌱فضای سبز و آرامش : وجود پارک محله ای_ آرامش و سرصدای کم در محله _
            وجود حاشیه سبز در طول معابر و وجور پارک و فضای بازی کودکان در محله
            <br />
            🎉 سرزندگی اجتماعی : وجود فضاهایی برای تعاملات اجتماعی (مسجد،
            فرهنگ‌سرا، کتابخانه)_ وجود کاربری هایی برای گذران اوقات فراغت ( کافه
            و رستوران و.. )_ احساس تعلق ساکنین به محله
            <br />
            🏡کیفیت کالبدی محله : کیفیت نسبتا خوب ساختمان ها – وجود امکانات شهری
            بلوک بندی و خیابان کشی منظم
            <br/>🚦ترافیک : دسترسی پذیری مطلوب_ شبکه معابر منظم_ قابلیت عبور و مرور روان_ ترافیک سبک درون محله ای _ عرض  مناسب معابر
          </p>
        </motion.div>

        {/* Box for chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-2 md:col-span-1  h-full"
        >
          <QualityOfLifeChart dataValues={data} names={names} />
        </motion.div>
      </div>
    </section>
  );
}
