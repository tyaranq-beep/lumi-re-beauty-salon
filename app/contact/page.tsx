import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
    title: 'お問い合わせ・無料お見積り | 〇〇サロン',
    description: '外壁塗装や屋根の点検など、お住まいのトラブルはお気軽にご相談ください。強引な営業は一切おこないません。'
};

export default function ContactPage() {
    return (
        <div className="pt-12 pb-24 bg-white min-h-screen border-t-8 border-stone-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 border-b-2 border-stone-900 pb-12 mt-12 block">
                    <span className="bg-stone-900 text-white font-black tracking-widest text-sm mb-4 inline-block px-4 py-1 flex-none">無料お見積り・ご相談</span>
                    <h1 className="text-3xl md:text-5xl font-serif text-stone-900 font-black">
                        お問い合わせ
                    </h1>
                    <p className="mt-8 text-stone-800 max-w-2xl mx-auto leading-relaxed font-bold bg-stone-100 p-6 border border-stone-900 shadow-sm">
                        強引な営業は一切いたしません。<br />
                        「まずは費用感だけ知りたい」「他社との相見積もりをしたい」という方も大歓迎です。どんな小さな不安でも、お気軽にお伝えください。
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 items-start max-w-5xl mx-auto mt-12">
                    {/* Quick Contact Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="solid-card bg-stone-100 p-8 border-l-2 border-l-slate-700">
                            <h2 className="text-2xl font-black text-stone-900 mb-4 border-b-2 border-stone-400 pb-2">お電話でのご相談</h2>
                            <p className="text-slate-700 font-black text-3xl mb-4">📞 0120-XXX-XXX</p>
                            <p className="text-sm text-stone-900 font-bold bg-white p-3 border-2 border-stone-400">
                                営業時間：8:00〜19:00<br />
                                定休日：日曜日（※事前予約で対応可）
                            </p>
                        </div>

                        <div className="solid-card bg-stone-100 p-8">
                            <h2 className="text-2xl font-black text-stone-900 mb-4 border-b-2 border-stone-400 pb-2">対応エリア</h2>
                            <p className="text-stone-900 font-bold leading-relaxed">
                                〇〇市全域、〇〇市、〇〇町<br />
                                <span className="text-stone-900 block mt-4 border-t-2 border-stone-400 pt-2 text-sm">※地域密着のため、片道1時間圏内を基本としておりますが、近隣の方もお気軽にご相談ください。</span>
                            </p>
                        </div>
                    </div>

                    {/* Form Component (Client Side) */}
                    <div className="lg:col-span-3 solid-card bg-white p-8 md:p-12 border-t-8 border-t-stone-900">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
