"use client";
import React, { useState, useEffect } from 'react';
import { Phone, CalendarHeart, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function FloatingActionButtons() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out md:hidden ${isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
        >
            <div className="bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-8px_30px_rgb(0,0,0,0.05)] flex">
                <a href="tel:03-XXXX-XXXX" className="flex-1 flex flex-col items-center justify-center py-3 text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors border-r border-slate-200">
                    <Phone className="w-5 h-5 mb-1 text-slate-400" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">お電話</span>
                </a>
                <Link href="/reserve" className="flex-[1.5] flex flex-col items-center justify-center py-3 bg-stone-800 text-white transition-opacity active:opacity-80">
                    <CalendarHeart className="w-5 h-5 mb-1 text-stone-300" />
                    <span className="text-[11px] font-bold tracking-widest uppercase">Web予約</span>
                </Link>
                <a href="#access" className="flex-1 flex flex-col items-center justify-center py-3 text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors border-l border-slate-200">
                    <MapPin className="w-5 h-5 mb-1 text-slate-400" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">アクセス</span>
                </a>
            </div>
            <div className="bg-white/95 pb-safe"></div>
        </div>
    );
}
