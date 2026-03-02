import React from 'react';

const MENU_ITEMS = [
    {
        category: "Cut",
        items: [
            { name: "繝・ぅ繝ｬ繧ｯ繧ｿ繝ｼ繧ｫ繝・ヨ", price: "ﾂ･8,800", desc: "繧ｷ繝｣繝ｳ繝励・繝ｻ繝悶Ο繝ｼ霎ｼ" },
            { name: "繝医ャ繝励せ繧ｿ繧､繝ｪ繧ｹ繝医き繝・ヨ", price: "ﾂ･7,700", desc: "繧ｷ繝｣繝ｳ繝励・繝ｻ繝悶Ο繝ｼ霎ｼ" },
            { name: "蜑埼ｫｪ繧ｫ繝・ヨ", price: "ﾂ･1,650", desc: "" }
        ]
    },
    {
        category: "Color",
        items: [
            {
                name: "繧､繝ｫ繝溘リ繧ｫ繝ｩ繝ｼ", price: "ﾂ･8,800縲・, desc: "繝繝｡繝ｼ繧ｸ繝ｬ繧ｹ縺ｧ騾乗・諢溘・縺ゅｋ逋ｺ濶ｲ" },
            {
                    name: "繧ｪ繝ｼ繧ｬ繝九ャ繧ｯ繧ｫ繝ｩ繝ｼ", price: "ﾂ･7,700縲・, desc: "鬆ｭ逧ｮ縺ｨ鬮ｪ縺ｫ蜆ｪ縺励＞螟ｩ辟ｶ逕ｱ譚･謌仙・" },
            { name: "繝上う繝ｩ繧､繝・/ 繝ｭ繝ｼ繝ｩ繧､繝・, price: "ﾂ･4, 400縲・, desc: "遶倶ｽ捺─繧・虚縺阪ｒ繝励Λ繧ｹ" }
        ]
    },
    {
        category: "Treatment",
        items: [
            {
                name: "TOKIO繧､繝ｳ繧ｫ繝ｩ繝・, price: "ﾂ･6, 600", desc: "迚ｹ險ｱ謚陦薙↓繧医ｋ豈幃ｫｪ蠑ｷ蠎ｦ蝗槫ｾｩ" },
            { name: "繧ｪ繝ｼ繧ｸ繝･繧｢", price: "ﾂ･5,500", desc: "荳莠ｺ縺ｲ縺ｨ繧翫・鬮ｪ雉ｪ縺ｫ蜷医ｏ縺帙◆繧ｪ繝ｼ繝繝ｼ繝｡繧､繝・ }
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
                        繝｡繝九Η繝ｼ繝ｻ譁咎≡
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
                    窶ｻ 譁咎≡縺ｯ蜈ｨ縺ｦ遞手ｾｼ縺ｧ縺吶ゅヱ繝ｼ繝槭ｄ繧ｫ繝ｩ繝ｼ縺ｮ繝ｭ繝ｳ繧ｰ譁咎≡縺ｯ鬆よ斡縺励※縺翫ｊ縺ｾ縺帙ｓ縲・
                </div>
            </div>
        </section>
    );
}
