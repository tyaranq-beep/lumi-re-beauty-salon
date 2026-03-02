import React from 'react';
import { Instagram } from 'lucide-react';

const STYLISTS = [
    {
        name: "Nana",
        role: "Art Director",
        specialty: "抜け感のあるボブ・透明感カラー",
        image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80",
        igUrl: "#",
        reserveUrl: "/reserve"
    },
    {
        name: "Kento",
        role: "Top Stylist",
        specialty: "メンズパーマ・束感ショート",
        image: "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?auto=format&fit=crop&q=80",
        igUrl: "#",
        reserveUrl: "/reserve"
    },
    {
        name: "Yuki",
        role: "Stylist / Colorist",
        specialty: "インナーカラー・髪質改善トリートメント",
        image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80",
        igUrl: "#",
        reserveUrl: "/reserve"
    }
];

export default function Stylists() {
    return (
        <section id="stylists" className="py-24 bg-stone-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-stone-400 tracking-[0.2em] text-xs uppercase mb-4 inline-block font-sans">
                        Stylists
                    </span>
                    <h2 className="text-3xl font-serif font-medium text-slate-800">スタイリスト</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {STYLISTS.map((stylist, idx) => (
                        <div key={idx} className="group flex flex-col items-center text-center">
                            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 relative grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 shadow-lg">
                                <img src={stylist.image} alt={stylist.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                            </div>
                            <h3 className="text-xl font-serif text-slate-800 mb-1">{stylist.name}</h3>
                            <p className="text-xs text-stone-500 uppercase tracking-widest mb-4">{stylist.role}</p>
                            <p className="text-sm text-slate-600 mb-6 font-sans">得意なスタイル:<br />{stylist.specialty}</p>

                            <div className="flex gap-4 w-full justify-center">
                                <a href={stylist.reserveUrl} className="px-6 py-2 bg-stone-800 text-white text-xs tracking-wider hover:bg-stone-700 transition-colors rounded-sm shadow-md">
                                    指名して予約
                                </a>
                                <a href={stylist.igUrl} className="p-2 border border-slate-300 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-900 transition-colors rounded-sm shadow-sm">
                                    <Instagram className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
