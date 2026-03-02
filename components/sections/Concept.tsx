import React from 'react';
import { IMAGES } from '@/lib/constants';

export default function Concept() {
    return (
        <section id="concept" className="py-24 md:py-32 bg-white text-slate-800">
            <div className="max-w-6xl mx-auto px-6 relative">
                <div className="text-center mb-16">
                    <span className="text-stone-400 tracking-[0.2em] text-xs uppercase mb-4 font-sans inline-block relative font-medium">
                        Concept
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8 leading-tight">
                        髪から始まる、<br />
                        新しい日常。
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="relative">
                        <div className="aspect-square overflow-hidden rounded-full shadow-2xl relative z-10 border-8 border-stone-50">
                            <img src={IMAGES.ABOUT} alt="サロンのこだわり" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="space-y-6 text-sm md:text-base leading-loose text-slate-600 font-sans">
                        <p>
                            私たちのサロンは、ただ髪を切る場所ではありません。<br />
                            お客様が日常の忙しさを忘れ、心からリラックスできる上質なパーソナルスペースです。
                        </p>
                        <p>
                            髪質や骨格は一人ひとり異なります。だからこそ、カウンセリングに十分な時間をかけ、あなたの魅力を最大限に引き出す「似合わせ」デザインをご提案します。
                        </p>
                        <p>
                            こだわりの薬剤と確かな技術で、サロン帰りの美しさが長く続くスタイルをお約束します。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
