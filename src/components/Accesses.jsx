/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import AccsessesArzeMabar from "./AccessesArzeMabar";
import AccsessesKyfiatMabar from "./AccsessesKyfiatMabar";
import MapStreet from "./MapStreet";
import {Map}from "lucide-react"

export default function Accesses() {
  return (
    <section className="w-full ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* باکس توضیحات */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className=" rounded-2xl shadow-sm p-5 border  bg-white/50 backdrop-blur-md "
        >
          <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug">
           
           دسترسی محله کوی معلم<Map size={28} />
          </h3>
          <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base  mb-4">
            محله کوی معلم به‌ دلیل نزدیکی به خیابان طالقانی و مرکز شهر، از
            دسترسی مناسبی برخوردار است. خیابان‌های محله نظم خوبی دارند و بیشتر
            آن‌ها عرض مناسب برای رفت‌ وآمد خودروها و عابران دارند. کیفیت کلی
            معابر خوب است و در خیابان‌های اصلی، پیاده‌رو با کیفیت مناسب وجود
            دارد. حمل‌ونقل عمومی در این محله در دسترس است و معمولاً در مرکز محله
            ترافیک سنگینی وجود ندارد. این ویژگی‌ها باعث شده رفت‌وآمد در محله
            راحت و بی‌دردسر باشد.
          </p>
        </motion.div>

        {/* نمودار عرض معبر */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AccsessesArzeMabar />
        </motion.div>

        {/* نمودار کیفیت معبر */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AccsessesKyfiatMabar />
        </motion.div>

        {/* نقشه - کل عرض پایین */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 rounded-xl shadow-sm min-h-[600px] lg:h-full"
        >
          <MapStreet />
        </motion.div>
      </div>
    </section>
  );
}
