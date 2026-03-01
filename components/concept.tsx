"use client";

import { motion } from "motion/react";

export function Concept() {
  return (
    <section id="concept" className="py-24 md:py-32 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
            Concept
          </h2>
          <div className="w-12 h-[1px] bg-stone-400 mx-auto mb-10" />

          <h3 className="text-xl md:text-2xl font-serif text-stone-800 mb-8 leading-relaxed">
            「美しさ」は、心身の余白から生まれる。
          </h3>

          <div className="space-y-6 text-stone-600 leading-loose text-sm md:text-base">
            <p>
              忙しい毎日の中で、ふと立ち止まり、自分自身を労わる時間。
              <br className="hidden md:block" />
              LUMIÈRE（ルミエール）は、そんな「余白」を提供するプライベートサロンです。
            </p>
            <p>
              私たちが大切にしているのは、髪を美しく整えることだけではありません。
              <br className="hidden md:block" />
              足を踏み入れた瞬間に感じる香り、心地よい音楽、そして温かなおもてなし。
              <br className="hidden md:block" />
              五感すべてが満たされるような、特別な体験をご用意しています。
            </p>
            <p>
              経験豊富なスタイリストが、あなたの骨格や髪質、ライフスタイルに寄り添い、
              <br className="hidden md:block" />
              あなただけの「似合わせ」をご提案します。
              <br className="hidden md:block" />
              明日からの自分がもっと好きになる、そんな魔法をかけさせてください。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
