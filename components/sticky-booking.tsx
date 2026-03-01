"use client";

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function StickyBooking() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approx 500px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:bottom-8 md:right-8 md:left-auto md:w-auto"
        >
          <a
            href="#booking"
            className="flex items-center justify-center w-full md:w-auto bg-stone-900 text-white px-6 py-4 md:rounded-full shadow-2xl hover:bg-stone-800 transition-colors"
          >
            <Calendar size={20} className="mr-2" />
            <span className="text-sm font-medium tracking-widest">
              WEB予約はこちら
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
