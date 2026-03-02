import React from 'react';
import { IMAGES } from '@/lib/constants';
import Link from 'next/link';

export default function StyleGallery() {
    const styles = [
        { src: IMAGES.GALLERY.STYLE_1, label: 'Cut & Color' },
        { src: IMAGES.GALLERY.STYLE_2, label: 'Perm' },
        { src: IMAGES.GALLERY.STYLE_3, label: 'Treatment' },
        { src: IMAGES.ABOUT, label: 'Interior' } // Reusing placeholders
    ];

    return (
        <section id="gallery" className="py-24 md:py-32 bg-stone-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-stone-400 tracking-[0.2em] text-xs uppercase mb-4 inline-block font-sans">
                        Style Gallery
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-800 mb-6">
                        洗練されたデザインを、<br className="md:hidden" />あなたらしく。
                    </h2>
                    <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        一人ひとりの骨格や髪質に合わせたオーダーメイドの施術で、今までで一番の「似合う」をご提案します。
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {styles.map((style, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="aspect-[4/5] overflow-hidden rounded-md relative mb-3">
                                <img src={style.src} alt={style.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
                            </div>
                            <p className="text-center text-xs uppercase tracking-widest text-stone-500 font-sans">{style.label}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/gallery" className="inline-block text-xs uppercase tracking-widest text-slate-800 border-b border-slate-300 pb-1 hover:border-slate-800 transition-colors">
                        View More Styles
                    </Link>
                </div>
            </div>
        </section>
    );
}
