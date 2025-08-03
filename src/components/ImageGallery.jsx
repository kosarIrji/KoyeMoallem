import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "./images/img (1).jpg",
  "./images/img (2).jpg",
  "./images/img (3).jpg",
  "./images/img (4).jpg",
  "./images/img (5).jpg",
  "./images/img (6).jpg",
  "./images/img (7).jpg",
  "./images/img (10).jpg",
  "./images/img (11).jpg",
  "./images/img (12).jpg",
];

export default function ImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClose = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const showNext = () =>
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative my-7 bg-[var(--box)] rounded-3xl shadow-lg px-6 py-12 border border-gray-200">
      <div className="flex justify-center">
        <h2 className="absolute  sm:text-2xl md:text-lg font-extrabold text-[var(--text)] text-3xl  text-center ">
          گالری تصاویر
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-4 gap-8 mt-20">
          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="overflow-hidden rounded-xl shadow-md cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={src}
                loading="lazy"
                alt={`img-${index}`}
                className="w-full h-[200px] lg:h-[180px] md:h-[220px]  object-cover transition-all duration-300 rounded-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={handleClose}
              className="absolute top-4  text-[#FFF6EB] bg-black bg-opacity-50 p-2 rounded-full md:right-60"
            >
              <X size={24} />
            </button>
            <button
              onClick={showPrev}
              className="absolute left-4 text-[#FFF6EB] bg-black bg-opacity-50 p-2 rounded-full"
            >
              <ChevronLeft size={32} />
            </button>
            <motion.img
              key={selectedIndex}
              src={images[selectedIndex]}
              alt="full"
              className="max-w-xl max-h-[70vh] object-contain rounded-lg shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <button
              onClick={showNext}
              className="absolute md:right-60 text-[#FFF6EB] bg-black bg-opacity-50 p-2 rounded-full right-4"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
