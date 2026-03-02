'use client';

import { IMAGES } from '@/lib/constants';
import { useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const STAFF = [
    { name: 'YUKI', role: 'Director / Stylist', image: 'https://images.unsplash.com/photo-1542456073-61fc5f891eb8?auto=format&fit=crop&q=80' },
    { name: 'KITE', role: 'Top Stylist', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80' },
    { name: 'NANA', role: 'Stylist / Colorist', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80' },
    { name: 'REI', role: 'Stylist', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80' },
];

export default function StaffScroll() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
                <div className="reveal-on-scroll">
                    <span className="text-stone-400 tracking-[0.3em] text-xs uppercase mb-4 block">Creative Team</span>
                    <h2 className="text-4xl md:text-5xl font-serif">Stylists</h2>
                </div>
                <div className="flex gap-4">
                    <button onClick={() => scroll('left')} className="p-4 border border-stone-200 hover:bg-stone-50 transition-colors rounded-full">
                        <ArrowLeft className="w-5 h-5 text-stone-600" />
                    </button>
                    <button onClick={() => scroll('right')} className="p-4 border border-stone-200 hover:bg-stone-50 transition-colors rounded-full bg-stone-900">
                        <ArrowRight className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto px-6 md:px-[max(1.5rem,calc((100vw-80rem)/2))] hide-scrollbar snap-x pb-12"
            >
                {STAFF.map((member, idx) => (
                    <div
                        key={idx}
                        className="min-w-[280px] md:min-w-[400px] snap-start group"
                    >
                        <div className="aspect-[3/4] overflow-hidden mb-6 reveal-mask reveal-delay-100">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                            />
                        </div>
                        <div className="reveal-on-scroll">
                            <h3 className="text-2xl font-serif mb-1">{member.name}</h3>
                            <p className="text-stone-400 text-sm tracking-widest uppercase">{member.role}</p>
                        </div>
                    </div>
                ))}
                {/* Spacer for end of scroll */}
                <div className="min-w-[2rem] h-1" />
            </div>
        </section>
    );
}
