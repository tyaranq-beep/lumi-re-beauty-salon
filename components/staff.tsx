"use client";

import Image from "next/image";
import { motion } from "motion/react";

const staff = [
  {
    name: "Yuki Tanaka",
    role: "Art Director",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop",
    message:
      "お客様の「なりたい」を叶えるため、丁寧なカウンセリングを心がけています。ショートヘアのカットが得意です。",
  },
  {
    name: "Kenji Sato",
    role: "Top Stylist",
    image:
      "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=800&auto=format&fit=crop",
    message:
      "透明感のあるカラーリングと、自宅でも再現しやすいスタイル提案に定評があります。お気軽にご相談ください。",
  },
  {
    name: "Mai Suzuki",
    role: "Stylist / Spaist",
    image:
      "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=800&auto=format&fit=crop",
    message:
      "極上のヘッドスパで日々の疲れを癒やします。ヘアアレンジも得意なので、特別な日のお手伝いもお任せください。",
  },
];

export function Staff() {
  return (
    <section id="staff" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">
            Staff
          </h2>
          <p className="text-stone-500 text-sm tracking-widest">
            スタイリスト紹介
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {staff.map((person, idx) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-stone-100">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-900 mb-1">
                {person.name}
              </h3>
              <p className="text-xs text-stone-500 tracking-widest uppercase mb-4">
                {person.role}
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                {person.message}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
