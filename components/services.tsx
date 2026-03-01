"use client";

import { motion } from "motion/react";

const services = [
  {
    category: "Cut",
    items: [
      {
        name: "ディレクターカット",
        price: "¥7,700",
        desc: "骨格や髪質に合わせた似合わせカット",
      },
      {
        name: "スタイリストカット",
        price: "¥6,600",
        desc: "トレンドを取り入れたスタイル提案",
      },
      {
        name: "前髪カット",
        price: "¥1,100",
        desc: "印象を変えるポイントカット",
      },
    ],
  },
  {
    category: "Color",
    items: [
      {
        name: "イルミナカラー",
        price: "¥8,800~",
        desc: "透明感とツヤを与えるダメージレスカラー",
      },
      {
        name: "オーガニックカラー",
        price: "¥7,700~",
        desc: "頭皮と髪に優しい自然派カラー",
      },
      {
        name: "ハイライト / インナーカラー",
        price: "¥4,400~",
        desc: "立体感や遊び心をプラス",
      },
    ],
  },
  {
    category: "Perm & Treatment",
    items: [
      {
        name: "デジタルパーマ",
        price: "¥11,000~",
        desc: "コテで巻いたようなふんわりカール",
      },
      {
        name: "TOKIO インカラミトリートメント",
        price: "¥5,500",
        desc: "髪質改善・最高峰の修復力",
      },
      {
        name: "ヘッドスパ (40min)",
        price: "¥4,400",
        desc: "頭皮環境を整え、極上のリラクゼーションを",
      },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">
            Services
          </h2>
          <p className="text-stone-500 text-sm tracking-widest">
            メニュー・料金
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {services.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="font-serif text-xl text-stone-800 mb-6 border-b border-stone-300 pb-2">
                {section.category}
              </h3>
              <ul className="space-y-6">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-stone-800 font-medium">
                        {item.name}
                      </span>
                      <span className="text-stone-900 font-serif">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#booking"
            className="inline-flex items-center text-sm tracking-widest text-stone-600 hover:text-stone-900 transition-colors"
          >
            すべてのメニューを見る <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
