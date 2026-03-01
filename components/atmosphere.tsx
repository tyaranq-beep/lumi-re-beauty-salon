"use client";

import Image from "next/image";
import { motion } from "motion/react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bfcfaa6362f?q=80&w=800&auto=format&fit=crop",
    alt: "Salon Interior 1",
    className: "col-span-2 row-span-2 md:col-span-1 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=800&auto=format&fit=crop",
    alt: "Salon Interior 2",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=800&auto=format&fit=crop",
    alt: "Salon Details",
    className: "col-span-1 row-span-1",
  },
];

export function Atmosphere() {
  return (
    <section id="atmosphere" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">
            Atmosphere
          </h2>
          <p className="text-stone-500 text-sm tracking-widest">
            こだわりの空間
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative overflow-hidden group ${img.className} min-h-[200px] md:min-h-[300px]`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-stone-600 leading-relaxed text-sm md:text-base">
            自然光がたっぷりと降り注ぐ、開放的でありながらも落ち着いた店内。
            <br />
            アンティーク家具と緑に囲まれた空間で、日常の喧騒から離れたリラックスタイムをお過ごしいただけます。
            <br />
            初めての方でも緊張せず、心からくつろげる雰囲気づくりを心がけています。
          </p>
        </div>
      </div>
    </section>
  );
}
