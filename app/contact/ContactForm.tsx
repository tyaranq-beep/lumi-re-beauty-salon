"use client";

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('お問い合わせを受け付けました。担当者よりご連絡いたします。');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div>
                <label className="block text-sm font-black text-stone-900 mb-3 bg-stone-100 px-3 py-1 inline-block border-2 border-stone-900">
                    お名前 <span className="text-stone-900">*</span>
                </label>
                <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white border border-stone-900 focus:outline-none focus:border-slate-700 transition-colors font-bold text-lg"
                    placeholder="例：山田 太郎"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <label className="block text-sm font-black text-stone-900 mb-3 bg-stone-100 px-3 py-1 inline-block border-2 border-stone-900">
                        電話番号 <span className="text-stone-900">*</span>
                    </label>
                    <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 bg-white border border-stone-900 focus:outline-none focus:border-slate-700 transition-colors font-bold text-lg"
                        placeholder="例：090-1234-5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-black text-stone-900 mb-3 bg-stone-100 px-3 py-1 inline-block border-2 border-stone-900">
                        メールアドレス
                    </label>
                    <input
                        type="email"
                        className="w-full px-4 py-3 bg-white border border-stone-900 focus:outline-none focus:border-slate-700 transition-colors font-bold text-lg"
                        placeholder="例：info@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-black text-stone-900 mb-3 bg-stone-100 px-3 py-1 inline-block border-2 border-stone-900">
                    ご相談内容 <span className="text-stone-900">*</span>
                </label>
                <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-stone-900 focus:outline-none focus:border-slate-700 transition-colors font-bold text-lg resize-none leading-relaxed"
                    placeholder="「メニューについて詳しく知りたい」「予約の空き状況を確認したい」など、どんなことでもお気軽にご記入ください。"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-slate-700 text-white font-black text-xl py-6 border-b-2 border-slate-900 active:border-b-0 active:translate-y-px transition-all mt-4 hover:bg-slate-900"
            >
                ✉️ この内容で送信する
            </button>

            <p className="text-sm text-center text-stone-900 font-bold mt-6 bg-stone-100 p-4 border-2 border-stone-400">
                いただいた大事な個人情報は、お問い合わせの対応にのみ使用し、他の目的には一切流用いたしません。
            </p>
        </form>
    );
}
