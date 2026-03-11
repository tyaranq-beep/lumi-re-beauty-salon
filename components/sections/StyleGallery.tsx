'use client';

/**
 * スタイルギャラリー - サロンデモサイト
 * framer-motion で画像カードにスクロール連動フェードイン＋ホバーズームを追加。
 * モノトーン×ミニマリスト系のデザインを保ちつつ、上品なアニメーションを付与。
 */
import React from 'react';
import { motion, useInView } from 'motion/react';
import { IMAGES } from '@/lib/constants';
import Link from 'next/link';
import { useRef } from 'react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function StyleGallery() {
    const styles = [
        { src: IMAGES.GALLERY.STYLE_1, label: 'Cut & Color' },
        { src: IMAGES.GALLERY.STYLE_2, label: 'Perm' },
        { src: IMAGES.GALLERY.STYLE_3, label: 'Treatment' },
        { src: IMAGES.ABOUT, label: 'Interior' }
    ];

    const headerRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, { once: true, margin: '-60px 0px' });

    return (
        <section id="gallery" className="py-24 md:py-32 bg-stone-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* ヘッダーフェードイン */}
                <motion.div
                    ref={headerRef}
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: EASE }}
                >
                    <span className="text-stone-400 tracking-[0.2em] text-xs uppercase mb-4 inline-block font-sans">
                        Style Gallery
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-800 mb-6">
                        洗練されたデザインを、<br className="md:hidden" />あなたらしく。
                    </h2>
                    <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        一人ひとりの骨格や髪質に合わせたオーダーメイドの施術で、今までで一番の「似合う」をご提案します。
                    </p>
                </motion.div>

                {/* ギャラリーグリッド - stagger with whileInView */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {styles.map((style, idx) => (
                        <motion.div
                            key={idx}
                            className="group cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px 0px' }}
                            transition={{ duration: 0.7, delay: idx * 0.1, ease: EASE }}
                        >
                            <motion.div
                                className="aspect-[4/5] overflow-hidden rounded-md relative mb-3"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                            >
                                <img
                                    src={style.src}
                                    alt={style.label}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                                {/* ホバー時のオーバーレイ */}
                                <motion.div
                                    className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/15 transition-colors duration-500"
                                    whileHover={{ backdropFilter: 'blur(1px)' }}
                                />
                            </motion.div>
                            <motion.p
                                className="text-center text-xs uppercase tracking-widest text-stone-500 font-sans"
                                whileHover={{ color: '#1c1917' }}
                                transition={{ duration: 0.2 }}
                            >
                                {style.label}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link
                        href="/gallery"
                        className="inline-block text-xs uppercase tracking-widest text-slate-800 border-b border-slate-300 pb-1 hover:border-slate-800 transition-colors"
                    >
                        View More Styles
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
