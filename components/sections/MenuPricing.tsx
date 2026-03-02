import React from 'react';

const MENU_ITEMS = [
    {
        category: "Cut",
        items: [
            { name: "ディレクターカット", price: "¥8,800", desc: "シャンプー・ブロー込" },
            { name: "トップスタイリストカット", price: "¥7,700", desc: "シャンプー・ブロー込" },
            { name: "前髪カット", price: "¥1,650", desc: "" }
        ]
    },
    {
        category: "Color",
        items: [
            { name: "イルミナカラー", price: "¥8,800〜", desc: "ダメージレスで透明感のある発色" },
            { name: "オーガニックカラー", price: "¥7,700〜", desc: "頭皮と髪に優しい天然由来成分" },
            { name: "ハイライト / ローライト", price: "¥4,400〜", desc: "立体感や動きをプラス" }
        ]
    },
    {
        category: "Treatment",
        items: [
            { name: "TOKIOインカラミ", price: "¥6,600", desc: "特許技術による毛髪強度回復" },
            { name: "オージュア", price: "¥5,500", desc: "一人ひとりの髪質に合わせたオーダーメイド" }
        ]
    }
];

export default function MenuPricing() {
    return (
        <section id="menu" className="py-24 bg-white text-slate-800">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-stone-400 tracking-[0.2em] text-xs uppercase mb-4 inline-block font-sans">
                        Menu & Price
                    </span>
                    <h2 className="text-3xl font-serif font-medium mb-12">
                        メニュー・料金
                    </h2>
                </div>

                <div className="space-y-16">
                    {MENU_ITEMS.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="text-xl font-serif border-b border-stone-200 pb-2 mb-6 text-slate-700">{section.category}</h3>
                            <div className="space-y-6">
                                {section.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="flex justify-between items-end">
                                        <div>
                                            <h4 className="font-medium text-slate-800">{item.name}</h4>
                                            {item.desc && <p className="text-stone-400 text-xs mt-1">{item.desc}</p>}
                                        </div>
                                        <div className="border-b border-dotted border-stone-300 flex-grow mx-4 mb-2"></div>
                                        <span className="font-serif font-medium text-stone-600">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center text-stone-400 text-xs">
                    ※ 料金は全て税込です。パーマやカラーのロング料金は頂戴しておりません。
                </div>
            </div>
        </section>
    );
}
