import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-white pt-16 pb-24 lg:pb-8 border-t-8 border-slate-700">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b-2 border-stone-800 pb-12">
                    {/* Logo & About */}
                    <div className="lg:col-span-2 text-center md:text-left text-white block pb-4 mb-4">
                        <h2 className="text-2xl font-serif font-black mb-4">縲・・し繝ｭ繝ｳ</h2>
                        <p className="text-stone-100 font-medium leading-relaxed max-w-md mx-auto md:mx-0">
                            蝨ｰ蝓溷ｯ・捩縺ｧ縲∝､門｣∝｡苓｣・・螻区ｹ菫ｮ逅・・繝ｪ繝輔か繝ｼ繝縺ｪ縺ｩ菴上∪縺・・繝医Λ繝悶Ν縺ｫ蟷・ｺ・￥蟇ｾ蠢懊・
                            縲悟・繧偵▽縺九↑縺・←豁｣萓｡譬ｼ縲阪ｒ繝｢繝・ヨ繝ｼ縺ｫ縲∬・莠ｺ逶ｴ蝟ｶ縺ｮ螳牙ｿ・命蟾･繧偵♀螻翫￠縺励∪縺吶・
                        </p>
                    </div>

                    <div className="bg-white text-stone-900 p-6 solid-card col-span-2 lg:col-span-2 border-2 border-stone-900 border-b border-l-4">
                        <h3 className="text-xl font-bold mb-4 border-b-2 border-stone-800 pb-2">縺雁撫縺・粋繧上○</h3>
                        <p className="text-slate-700 font-black text-3xl mb-2">到 0120-XXX-XXX</p>
                        <p className="text-sm font-bold text-stone-800 mb-6">
                            蝟ｶ讌ｭ譎る俣・・:00縲・9:00<br />
                            螳壻ｼ第律・壽律譖懈律・遺ｻ邱頑･譎ゅ・縺企崕隧ｱ縺上□縺輔＞・・
                        </p>
                        <Link href="/contact" className="block text-center bg-slate-700 text-white font-bold py-3 border-b border-slate-900 active:border-b-0 active:translate-y-px transition-all">
                            24譎る俣蜿嶺ｻ倅ｸｭ 辟｡譁呵ｦ狗ｩ阪ｊ縺ｯ縺薙■繧・
                        </Link>
                    </div>
                </div>

                <div className="text-center text-stone-400 text-sm font-bold">
                    <p>&copy; {new Date().getFullYear()} 縲・・し繝ｭ繝ｳ All Rights Reserved.</p>
                </div>
            </div>

            {/* Mobile Sticky CTA */}
            <div className="fixed bottom-0 w-full bg-white border-t-4 border-stone-900 z-50 lg:hidden flex pb-safe shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
                <a
                    href="tel:0120-XXX-XXX"
                    className="flex-1 flex flex-col items-center justify-center py-3 border-r-2 border-stone-400 active:bg-stone-100 transition-colors"
                >
                    <span className="text-lg font-bold text-slate-700">到 縺企崕隧ｱ</span>
                </a>
                <Link
                    href="/contact"
                    className="flex-1 flex flex-col items-center justify-center py-3 bg-stone-900 active:bg-black transition-colors"
                >
                    <span className="text-lg font-bold text-white">笨会ｸ・辟｡譁呵ｦ狗ｩ阪ｊ</span>
                </Link>
            </div>
        </footer>
    );
}
