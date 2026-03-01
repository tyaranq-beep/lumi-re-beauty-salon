"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop"
          alt="Salon Interior"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
        >
          日常を忘れ、
          <br className="md:hidden" />
          <span className="italic">新しい自分</span>に出会う場所。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/90 text-sm md:text-base tracking-widest mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          洗練された技術と、心安らぐ上質な空間。
          <br />
          あなたの魅力を最大限に引き出す、特別なひとときをお約束します。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="#booking"
            className="inline-block bg-white text-stone-900 px-10 py-4 text-sm tracking-widest uppercase hover:bg-stone-100 transition-colors duration-300"
          >
            予約する
          </a>
        </motion.div>
      </div>
    </section>
  );
}
