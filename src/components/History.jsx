/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { BookOpenIcon } from "lucide-react";
function History() {
  return (
    <section className="my-3 border bg-white/50 backdrop-blur-md rounded-2xl shadow-md p-6  ">
      <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
        تاریخچه محله کوی معلم
        <BookOpenIcon size={28} />
      </h3>

      <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base  mb-4">
        کوی معلم در گذشته ، به‌عنوان منطقه‌ای با کاربری باغات و زمین‌های کشاورزی
        شناخته می شد؛ با توسعه شهر بجنورد و افزایش نیاز به فضاهای مسکونی، این
        منطقه به‌تدریج به محله‌ای مسکونی تبدیل شد. در ابتدا، این محله برای اسکان
        فرهنگیان و کارکنان آموزش و پرورش طراحی شد و به همین دلیل به «کوی معلم»
        معروف گردید. در سال‌های اخیر، کوی معلم با رشد سریع جمعیتی و توسعه
        زیرساخت‌های شهری مواجه بوده است و به یکی از مناطق مهم شهری تبدیل شده
        است.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  lg:grid-cols-2">
        {[
          { year: "۱۳۸۴", src: "./images/1384.png" },
          { year: "۱۴۰۴ ", src: "./images/1404.png" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <img
              src={item.src}
              loading="lazy"
              alt={`محله کوی معلم در سال ${item.year}`}
              className="rounded-xl shadow-md w-full md:max-w-[400px]  object-cover"
            />
            <p className="text-center  mt-3 text-[var(--text)]  text-xs md:text-base leading-relaxed">
              محله کوی معلم - سال {item.year}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default History;
