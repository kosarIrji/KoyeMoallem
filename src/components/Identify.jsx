/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function Identify() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className=""
    >
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center mb-3">
        <div
          className=" bg-white/50 backdrop-blur-md
border           rounded-2xl shadow-md shadow-[rgba(0,0,0,0.05)] shadow-lg:shadow-[rgba(0,0,0,0.08)]
 p-4  w-full col-span-2 md:col-span-1 break-words"
        >
          <p className="   text-[var(--text)] ">نام محله:</p>
          <h2 className="font-semibold text-[var(--color-dark-slate)] text-lg  truncate">
            کوی معلم
          </h2>
        </div>

        <div
          className="  bg-white/50 backdrop-blur-md
border           rounded-2xl shadow-md  shadow-[rgba(0,0,0,0.05)] shadow-lg:shadow-[rgba(0,0,0,0.08)]
 p-4   w-full col-span-1 break-words"
        >
          <p className="   text-[var(--text)]">مساحت محله:</p>
          <h2 className="font-semibold text-[var(--color-dark-slate)] text-lg ">
            ۵۱ هکتار
          </h2>
        </div>

        <div
          className=" bg-white/50 backdrop-blur-md
border           rounded-2xl shadow-md  shadow-[rgba(0,0,0,0.05)] shadow-lg:shadow-[rgba(0,0,0,0.08)]
 p-4  w-full col-span-1 break-words"
        >
          <p className="   text-[var(--text)]">کد محله:</p>
          <h2 className="font-semibold text-[var(--color-dark-slate)] text-lg ">
            ۱۷
          </h2>
        </div>

        <div
          className=" bg-white/50 backdrop-blur-md
border           rounded-2xl shadow-md  shadow-[rgba(0,0,0,0.05)] shadow-lg:shadow-[rgba(0,0,0,0.08)]
 p-4  w-full col-span-1 break-words"
        >
          <p className=" text-xs  text-[var(--text)]">جمعیت محله:</p>
          <h2 className="font-semibold text-[var(--color-dark-slate)] text-lg ">
            ۸۶۰۰ نفر
          </h2>
        </div>

        <div
          className=" bg-white/50 backdrop-blur-md
border           rounded-2xl shadow-md  shadow-[rgba(0,0,0,0.05)] shadow-lg:shadow-[rgba(0,0,0,0.08)]
 p-4  w-full col-span-1 break-words"
        >
          <p className="   text-[var(--text)]">امتیاز محله:</p>
          <h2 className="font-semibold text-[var(--color-dark-slate)] text-lg ">
            ۴٫۷
          </h2>
        </div>
      </div>

      <motion.img
        src="./images/location.jpg"
        loading="lazy"
        alt="محله کوی معلم در سال ۲۰۲۵"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-xl w-[100%] mx-auto object-cover shadow-md   "
      />
    </motion.section>
  );
}

export default Identify;
