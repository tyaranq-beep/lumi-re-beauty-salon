import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-white pt-16 pb-24 lg:pb-8 border-t-8 border-slate-700">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b-2 border-stone-800 pb-12">
                    {/* Logo & About */}
                    <div className="lg:col-span-2 text-center md:text-left text-white block pb-4 mb-4">
                        <h2 className="text-2xl font-serif font-black mb-4">〇〇サロン</h2>
                        <p className="text-stone-100 font-medium leading-relaxed max-w-md mx-auto md:mx-0">
                            地域密着で、外壁塗装・屋根修理・リフォームなど住まいのトラブルに幅広く対応。
                            「嘘をつかない適正価格」をモットーに、職人直営の安心施工をお届けします。
                        </p>
                    </div>

                    <div className="bg-white text-stone-900 p-6 solid-card col-span-2 lg:col-span-2 border-2 border-stone-900 border-b border-l-4">
                        <h3 className="text-xl font-bold mb-4 border-b-2 border-stone-800 pb-2">お問い合わせ</h3>
                        <p className="text-slate-700 font-black text-3xl mb-2">📞 0120-XXX-XXX</p>
                        <p className="text-sm font-bold text-stone-800 mb-6">
                            営業時間：8:00〜19:00<br />
                            定休日：日曜日（※緊急時はお電話ください）
                        </p>
                        <Link href="/contact" className="block text-center bg-slate-700 text-white font-bold py-3 border-b border-slate-900 active:border-b-0 active:translate-y-px transition-all">
                            24時間受付中 無料見積りはこちら
                        </Link>
                    </div>
                </div>

                <div className="text-center text-stone-400 text-sm font-bold">
                    <p>&copy; {new Date().getFullYear()} 〇〇サロン All Rights Reserved.</p>
                </div>
            </div>

            {/* Mobile Sticky CTA */}
            <div className="fixed bottom-0 w-full bg-white border-t-4 border-stone-900 z-50 lg:hidden flex pb-safe shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
                <a
                    href="tel:0120-XXX-XXX"
                    className="flex-1 flex flex-col items-center justify-center py-3 border-r-2 border-stone-400 active:bg-stone-100 transition-colors"
                >
                    <span className="text-lg font-bold text-slate-700">📞 お電話</span>
                </a>
                <Link
                    href="/contact"
                    className="flex-1 flex flex-col items-center justify-center py-3 bg-stone-900 active:bg-black transition-colors"
                >
                    <span className="text-lg font-bold text-white">✉️ 無料見積り</span>
                </Link>
            </div>
        </footer>
    );
}
