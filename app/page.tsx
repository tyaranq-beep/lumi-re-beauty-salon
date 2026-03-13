"use client";

// Build Version: 2026.03.14.0320 - FIXED DEPLOYMENT
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Star,
  MapPin,
  Phone,
  Instagram,
  Calendar,
  Gift,
  ChevronDown,
  Camera,
  MessageCircle,
  Sparkles,
  CircleCheck,
  Quote,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Concept', href: '#concept' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Staff', href: '#staff' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a className={`font-serif text-2xl tracking-[0.2em] transition-colors ${isScrolled ? 'text-stone-900' : 'text-white'}`} href="/">LUMIÈRE</a>
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map(link => (
            <a key={link.label} className={`text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity ${isScrolled ? 'text-stone-600' : 'text-white/90'}`} href={link.href}>{link.label}</a>
          ))}
          <a className={`text-xs tracking-[0.2em] uppercase border px-5 py-2 transition-all duration-300 ${isScrolled ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white' : 'border-white/60 text-white hover:bg-white/10'}`} href="#booking-cta">予約</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu className={isScrolled ? 'text-stone-900' : 'text-white'} />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full bg-stone-900 text-white p-8 z-50 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-2xl tracking-[0.2em]">LUMIÈRE</span>
              <button onClick={() => setIsMobileMenuOpen(false)}><X /></button>
            </div>
            <nav className="flex flex-col gap-8 text-center text-white">
              {navLinks.map(link => (
                <a key={link.label} className="text-sm tracking-[0.3em] uppercase" href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.label}</a>
              ))}
              <a className="mt-4 border border-white/30 py-4 tracking-[0.3em] uppercase" href="#booking-cta" onClick={() => setIsMobileMenuOpen(false)}>予約</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-stone-200">
        <img
          alt="LUMIÈRE - Luxury Japanese Beauty Salon"
          className="object-cover object-center w-full h-full"
          src="/images/hero-salon.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/40 to-stone-900/75"></div>
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-12">
        <p className="text-white/60 text-xs tracking-[0.35em] uppercase mb-8 font-medium">Private Beauty Salon — 〇〇 Station</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8">
          日常を忘れ、<br /><span className="italic">新しい自分</span>に出会う場所。
        </h1>
        <p className="text-white/80 text-base md:text-lg tracking-[0.15em] mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          洗練された技術と、心安らぐ上質な空間。<br />あなたの魅力を最大限に引き出す、特別なひとときをお約束します。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#booking-cta" className="inline-block bg-white text-stone-900 px-10 py-4 text-sm tracking-widest uppercase hover:bg-stone-100 transition-colors duration-300 w-full sm:w-auto">予約する</a>
          <a href="#coupon" className="inline-flex items-center gap-2 border border-white/60 text-white px-8 py-4 text-sm tracking-widest hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto justify-center">
            <Gift className="w-4 h-4" />初回限定 ¥2,000 OFF
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/40"></div>
      </div>
    </section>
  );
};

const Concept = () => {
  return (
    <section id="concept" className="py-32 md:py-48 bg-stone-50 overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-5 md:mt-24 relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-2xl bg-stone-200">
              <img
                alt="髪の美しさ"
                className="object-cover transition-transform duration-1000 hover:scale-105 w-full h-full"
                src="/images/concept-hair.png"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-10 bg-stone-900 text-white font-serif text-xs md:text-sm tracking-widest px-5 py-4 rounded shadow-xl max-w-[180px]">
              “余白が、美しさを生む”
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-6 md:mt-0 mt-12">
            <p className="text-stone-400 text-xs tracking-[0.4em] uppercase mb-8">Our Philosophy</p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-[0.1em] mb-6">Concept</h2>
            <div className="w-12 h-px bg-stone-400 mb-14"></div>
            <h3 className="text-xl md:text-2xl font-serif text-stone-800 mb-12 leading-relaxed tracking-wide">「美しさ」は、心身の余白から生まれる。</h3>
            <div className="space-y-8 text-stone-500 leading-[2.2] text-sm md:text-base">
              <p>忙しい毎日の中で、ふと立ち止まり、自分自身を労わる時間。 LUMIÈRE（ルミエール）は、そんな「余白」を提供するプライベートサロンです。</p>
              <p>私たちが大切にしているのは、髪を美しく整えることだけではありません。 足を踏み入れた瞬間に感じる香り、心地よい音楽、そして温かなおもてなし。 五感すべてが満たされるような、特別な体験をご用意しています。</p>
              <p>経験豊富なスタイリストが、あなたの骨格や髪質、ライフスタイルに寄り添い、 あなただけの「似合わせ」をご提案します。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Atmosphere = () => {
  return (
    <section id="atmosphere" className="py-32 md:py-40 bg-white overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-stone-400 text-xs tracking-[0.4em] uppercase mb-4">Interior & Space</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-[0.1em] mb-4">Atmosphere</h2>
          <div className="w-12 h-px bg-stone-400 mx-auto mb-6"></div>
          <p className="text-stone-400 text-xs tracking-[0.3em]">こだわりの空間</p>
        </div>
        <div className="grid grid-cols-12 gap-4 md:gap-6 items-start">
          <div className="col-span-12 md:col-span-7 md:mt-12 relative overflow-hidden group rounded-lg bg-stone-100">
            <div className="relative aspect-[4/3]">
              <img
                alt="サロンインテリア"
                className="object-cover transition-transform duration-1000 group-hover:scale-105 rounded-lg w-full h-full"
                src="/images/atm-interior.png"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4 md:gap-6">
            <div className="relative overflow-hidden group rounded-lg bg-stone-100">
              <div className="relative aspect-[4/3]">
                <img
                  alt="サロン細部"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 rounded-lg w-full h-full"
                  src="/images/atm-detail.png"
                />
              </div>
            </div>
            <div className="relative overflow-hidden group rounded-lg bg-stone-100">
              <div className="relative aspect-square">
                <img
                  alt="レセプション"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 rounded-lg w-full h-full"
                  src="/images/atm-reception.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <p className="text-stone-500 leading-[2.1] text-sm md:text-base">自然光がたっぷりと降り注ぐ、開放的でありながらも落ち着いた店内。<br />アンティーク家具と緑に囲まれた空間で、日常の喧騒から離れたリラックスタイムをお過ごしいただけます。</p>
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const problems = [
    "白髪が増えてきたけど、どうすればいい？",
    "カラーやパーマで髪がパサついている",
    "毎朝のスタイリングに時間がかかりすぎる",
    "ボリュームがなくてペタンコに見える"
  ];

  const reasons = [
    {
      id: "01",
      title: "厳選したケア剤だけを使用",
      desc: "全メニューにおいて、ダメージ要因を最小限に抑えた高品質な薬剤のみを採用。施術後も指通りのいい美しい髪をキープします。"
    },
    {
      id: "02",
      title: "丁寧なカウンセリングが基本",
      desc: "施術前のカウンセリングに十分な時間を確保。あなたの髪の悩み・ライフスタイル・骨格を把握したうえで、最適なスタイルをご提案します。"
    },
    {
      id: "03",
      title: "自宅でも再現できるスタイルを",
      desc: "サロンを出た後も、毎日同じ仕上がりを再現できることが私たちの目標。ホームケアの方法まで丁寧にお伝えします。"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-stone-400 text-xs tracking-widest uppercase">Hair Concerns</span>
            <Sparkles className="w-3.5 h-3.5 text-stone-400" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">こんなお悩み、ありませんか？</h2>
          <p className="text-stone-500 text-sm mb-10">LUMIÈREにはあなたの髪の悩みを解決するメニューがあります</p>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
            {problems.map((p, i) => (
              <div key={i} className="flex items-start gap-3 bg-stone-50 border border-stone-200 p-4 text-left">
                <CircleCheck className="w-4.5 h-4.5 text-stone-400 mt-0.5 shrink-0" />
                <p className="text-stone-700 text-sm">{p}</p>
              </div>
            ))}
          </div>

          <div className="inline-block bg-stone-900 text-white px-6 py-3 text-sm tracking-widest">
            ↓ LUMIÈREが選ばれる3つの理由
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="border-t-2 border-stone-900 pt-6">
              <p className="font-serif text-4xl text-stone-200 mb-4">{r.id}</p>
              <h3 className="font-serif text-lg text-stone-900 mb-3">{r.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#booking-cta" className="inline-block bg-stone-900 text-white px-12 py-4 text-sm tracking-widest hover:bg-stone-700 transition-colors">無料カウンセリングを予約する</a>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const menu = [
    {
      title: 'Cut',
      sub: 'カット',
      items: [
        { name: 'ディレクターカット', price: '¥7,700', desc: '骨格や髪質に合わせた似合わせカット' },
        { name: 'スタイリストカット', price: '¥6,600', desc: 'トレンドを取り入れたスタイル提案' },
        { name: '前髪カット', price: '¥1,100', desc: '印象を変えるポイントカット' },
      ]
    },
    {
      title: 'Color',
      sub: 'カラー',
      items: [
        { name: 'イルミナカラー', price: '¥8,800~', desc: '透明感とツヤを与えるダメージレスカラー' },
        { name: 'オーガニックカラー', price: '¥7,700~', desc: '頭皮と髪に優しい自然派カラー' },
        { name: 'ハイライト / インナーカラー', price: '¥4,400~', desc: '立体感や遊び心をプラス' },
      ]
    },
    {
      title: 'Perm & Treatment',
      sub: 'パーマ・トリートメント',
      items: [
        { name: 'デジタルパーマ', price: '¥11,000~', desc: 'コテで巻いたようなふんわりカール' },
        { name: 'TOKIOインカラミトリートメント', price: '¥5,500', desc: '髪質改善・最高峰の修復力' },
        { name: 'ヘッドスパ (40min)', price: '¥4,400', desc: '頭皮環境を整え、極上のリラクゼーションを' },
      ]
    }
  ];

  return (
    <section id="services" className="py-32 md:py-40 bg-stone-50 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-[0.1em] mb-4">Services</h2>
          <div className="w-12 h-px bg-stone-400 mx-auto mb-6"></div>
          <p className="text-stone-400 text-xs tracking-[0.3em]">メニュー・料金</p>
        </div>
        <div className="border-y border-stone-200">
          {menu.map((cat, i) => (
            <div key={i} className="border-t border-stone-200 first:border-t-0">
              <button
                className="w-full flex items-center justify-between py-6 text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-2xl text-stone-800 tracking-[0.1em]">{cat.title}</span>
                  <span className="text-stone-400 text-xs tracking-widest">{cat.sub}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <ul className="pb-8 space-y-0">
                      {cat.items.map((item, j) => (
                        <li key={j} className="group">
                          <div className="flex items-baseline gap-2 py-4 border-b border-stone-100 last:border-0">
                            <span className="text-stone-800 text-sm shrink-0">{item.name}</span>
                            <span className="flex-1 border-b border-dotted border-stone-300 mb-1.5 min-w-4"></span>
                            <span className="font-serif text-stone-900 text-base shrink-0 tabular-nums">{item.price}</span>
                          </div>
                          <p className="text-xs text-stone-400 pb-2 -mt-2 pl-0 tracking-wide">{item.desc}</p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <a href="#booking-cta" className="inline-block border border-stone-900 text-stone-900 px-12 py-4 text-xs tracking-[0.25em] uppercase hover:bg-stone-900 hover:text-white transition-colors duration-400">ご予約はこちら</a>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const styles = [
    { title: 'フレンチボブ', tag: 'ショート', img: '/images/gallery-short.png' },
    { title: 'イルミナカラー', tag: '透明感カラー', img: '/images/gallery-color.png' },
    { title: 'TOKIOトリートメント', tag: '髪質改善', img: '/images/gallery-treatment.png' },
    { title: 'デジタルパーマ', tag: 'パーマ', img: '/images/gallery-perm.png' },
    { title: 'グレージュカラー', tag: '透明感カラー', img: '/images/gallery-color.png' },
    { title: 'ショートレイヤー', tag: 'ショート', img: '/images/gallery-short.png' },
  ];

  return (
    <section id="gallery" className="py-32 md:py-40 bg-stone-50 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-[0.1em] mb-4">Style Gallery</h2>
          <div className="w-12 h-px bg-stone-400 mx-auto mb-6"></div>
          <p className="text-stone-400 text-xs tracking-[0.3em] mb-10">スタイルカタログ</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['すべて', 'ショート', '透明感カラー', 'パーマ', '髪質改善'].map((tag, i) => (
              <button key={i} className={`px-5 py-2 text-xs tracking-[0.15em] transition-all duration-300 border ${i === 0 ? 'bg-stone-900 text-white border-stone-900' : 'border-stone-300 text-stone-500 hover:border-stone-700 hover:text-stone-900'}`}>{tag}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {styles.map((item, i) => (
            <div key={i} className={`relative overflow-hidden group bg-stone-200 text-left cursor-pointer ${i === 0 || i === 3 ? 'aspect-[3/4]' : 'aspect-square'}`}>
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/60 transition-all duration-400 flex items-end p-4 md:p-5">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <span className="text-[10px] text-white/60 tracking-[0.2em] uppercase">{item.tag}</span>
                  <p className="text-white font-serif text-lg leading-tight mt-1">{item.title}</p>
                  <p className="text-white/60 text-xs mt-1">クリックして拡大</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <a href="#booking-cta" className="inline-block border border-stone-900 text-stone-900 px-12 py-4 text-xs tracking-[0.25em] uppercase hover:bg-stone-900 hover:text-white transition-colors duration-300">ご予約はこちら</a>
        </div>
      </div>
    </section>
  );
};

const InstagramSection = () => {
  return (
    <section id="instagram" className="py-32 md:py-40 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Instagram className="w-5 h-5 text-stone-400" />
            <p className="text-stone-400 text-xs tracking-[0.4em] uppercase">Follow Us</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-[0.1em] mb-4">Instagram</h2>
          <div className="w-12 h-px bg-stone-400 mx-auto mb-6"></div>
          <p className="text-stone-500 text-sm leading-relaxed">
            最新のスタイルや日常を発信しています。<br className="hidden md:block" />
            フォローして、今日のLUMIÈREをチェックしてください。
          </p>
        </div>
        <div className="grid grid-cols-3 gap-1.5 md:gap-2 mb-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <a key={i} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="relative aspect-square overflow-hidden group bg-stone-100">
              <img
                alt={`Instagram Post ${i}`}
                className="object-cover transition-transform duration-700 group-hover:scale-110 w-full h-full"
                src={`/images/insta-${i}.png`}
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-300 flex items-center justify-center">
                <Instagram className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
        <div className="text-center">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-stone-900 text-stone-900 px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-stone-900 hover:text-white transition-all duration-300">
            <Instagram className="w-4 h-4" />@lumiere_salon をフォロー
          </a>
        </div>
      </div>
    </section>
  );
};

const Staff = () => {
  const members = [
    {
      name: "田中 由紀",
      nameEn: "Yuki Tanaka",
      role: "Art Director",
      exp: "経験15年",
      desc: "お客様の「なりたい」を丁寧に聞き取り、骨格に合った似合わせカットをご提案します。一人ひとりの個性を最大限に輝かせることが私の喜びです。",
      tags: ["ショートカット", "骨格診断", "似合わせ"],
      img: "/images/staff-yuki.png"
    },
    {
      name: "佐藤 健二",
      nameEn: "Kenji Sato",
      role: "Top Stylist",
      exp: "経験10年",
      desc: "透明感のある外国人風カラーと、ご自宅でも再現しやすいスタイル提案に定評があります。白髪ぼかしのナチュラルブレンドも得意です。",
      tags: ["白髪ぼかし", "イルミナカラー", "ハイライト"],
      img: "/images/staff-kenji.png"
    },
    {
      name: "鈴木 舞",
      nameEn: "Mai Suzuki",
      role: "Stylist & Head Spaist",
      exp: "経験8年",
      desc: "ヘッドスパで頭皮から美しく整えます。髪質改善トリートメントやスペシャルケアで、触れるたびに違いを感じていただけます。",
      tags: ["ヘッドスパ", "髪質改善", "トリートメント"],
      img: "/images/staff-mai.png"
    }
  ];

  return (
    <section id="staff" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Staff</h2>
          <p className="text-stone-500 text-sm tracking-widest">スタイリスト紹介</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {members.map((m, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-stone-100">
                <img alt={m.name} className="object-cover object-top transition-transform duration-700 group-hover:scale-105 w-full h-full" src={m.img} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/60 to-transparent p-4">
                  <span className="text-white/80 text-xs tracking-widest">{m.exp}</span>
                </div>
              </div>
              <h3 className="font-serif text-xl text-stone-900 mb-0.5">{m.name}</h3>
              <p className="text-[10px] text-stone-400 tracking-widest mb-1">{m.nameEn}</p>
              <p className="text-xs text-stone-500 tracking-widest uppercase mb-4">{m.role}</p>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">{m.desc}</p>
              <div className="flex flex-wrap gap-2">
                {m.tags.map((tag, j) => (
                  <span key={j} className="text-xs bg-stone-100 text-stone-600 px-3 py-1 rounded-full border border-stone-200">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const voices = [
    {
      name: "M.K さん (30代女性)",
      date: "2026年2月",
      text: "田中さんに担当していただきました。初めてで緊張していましたが、丁寧なカウンセリングで希望通りのスタイルに。白髪ぼかしも自然で、翌日から職場で褒められました！"
    },
    {
      name: "Y.S さん (40代女性)",
      date: "2026年1月",
      text: "頭皮の乾燥に悩んでいたのでヘッドスパをお願いしました。施術後は頭が軽くなり、髪のツヤも格段にアップ。次回もぜひお願いしたいです。"
    },
    {
      name: "A.T さん (20代女性)",
      date: "2026年2月",
      text: "インスタで見て来店。イルミナカラーが希望通りの透明感で大満足です。空間もおしゃれで、次の予約もすでに入れました。"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-stone-900 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16 text-white">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Voice</h2>
          <p className="text-stone-400 text-sm tracking-widest">お客様の声</p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-indigo-400 text-indigo-400" />
            ))}
            <span className="text-stone-300 text-sm ml-2">Google平均 4.9 / 5.0</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {voices.map((v, i) => (
            <div key={i} className="bg-stone-800 p-6">
              <Quote className="w-6 h-6 text-stone-600 mb-4" />
              <p className="text-stone-300 text-sm leading-relaxed mb-6">{v.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-medium">{v.name}</p>
                  <p className="text-stone-500 text-xs mt-0.5">{v.date}</p>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-indigo-400 text-indigo-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Coupon = () => {
  return (
    <section id="coupon" className="py-20 bg-stone-100 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
        <div className="border border-stone-300 p-10 bg-white shadow-sm">
          <p className="text-xs tracking-[0.3em] text-stone-400 uppercase mb-4">First Visit Only</p>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">初回限定クーポン</h2>
          <p className="text-stone-500 text-sm leading-relaxed mb-6">
            はじめてご来店の方へ、サービスをご体験いただけるお得なご案内です。<br />
            ご予約の際に「ウェブ見た」とお伝えください。
          </p>
          <div className="bg-stone-900 text-white py-4 px-8 inline-block mb-6">
            <p className="text-sm tracking-widest">カット + カラー</p>
            <p className="font-serif text-3xl mt-1">¥ 2,000 OFF</p>
          </div>
          <p className="text-stone-400 text-xs mb-8">※他クーポンとの併用不可 / 有効期限：2026年3月31日まで</p>
          <a href="#booking-cta" className="inline-block bg-stone-900 text-white px-12 py-4 text-sm tracking-widest hover:bg-stone-700 transition-colors">このクーポンで予約する</a>
        </div>
      </div>
    </section>
  );
};

const News = () => {
  const articles = [
    { date: "2026.03.01", tag: "お知らせ", title: "春のヘアトレンド特集：2026年注目スタイルをご紹介" },
    { date: "2026.02.20", tag: "キャンペーン", title: "【3月限定】春の髪質改善キャンペーン実施中 ¥1,000 OFF" },
    { date: "2026.02.10", tag: "お知らせ", title: "新スタッフ・研修期間限定の体験モニターを募集します" },
    { date: "2026.01.28", tag: "ブログ", title: "スタイリスト田中が解説：自宅でできる正しいドライヤーの使い方" }
  ];

  return (
    <section id="news" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-2">News</h2>
            <p className="text-stone-500 text-sm tracking-widest">最新情報</p>
          </div>
          <a href="#" className="text-xs text-stone-500 tracking-widest hover:text-stone-900 transition-colors">すべて見る →</a>
        </div>
        <div className="divide-y divide-stone-100">
          {articles.map((a, i) => (
            <a key={i} href="#" className="flex items-start gap-6 py-5 group hover:bg-stone-50 px-2 -mx-2 transition-colors">
              <p className="text-stone-400 text-xs mt-1 shrink-0 w-24">{a.date}</p>
              <span className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded shrink-0 mt-0.5">{a.tag}</span>
              <p className="text-stone-800 text-sm group-hover:text-stone-600 transition-colors">{a.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Access = () => {
  const steps = [
    { id: "01", title: "最寄り駅 出口 を出る", desc: "JR・地下鉄「最寄り駅」の出口を出てください。", img: "/images/gallery-short.png" },
    { id: "02", title: "坂道を直進", desc: "駅から直進。コンビニを右手に進んでください。", img: "/images/atm-interior.png" },
    { id: "03", title: "看板が目印", desc: "「サロン」の看板が見えたら到着です。2Fへお上りください。", img: "/images/atm-detail.png" },
    { id: "04", title: "エレベーターで2Fへ", desc: "エレベーターまたは階段で2Fへ。木製のドアを開けるとサロンです。", img: "/images/atm-reception.png" }
  ];

  return (
    <section id="access" className="py-32 md:py-40 bg-stone-50 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-stone-400 text-xs tracking-[0.4em] uppercase mb-4">From Nearest Station</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-[0.1em] mb-4">Access</h2>
          <div className="w-12 h-px bg-stone-400 mx-auto mb-6"></div>
          <p className="text-stone-400 text-xs tracking-[0.3em]">駅からの道案内</p>
          <p className="mt-4 text-stone-600 text-sm">
            <MapPin className="inline w-3.5 h-3.5 mr-1 text-stone-400" />
            最寄り駅より徒歩3分
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {steps.map((s, i) => (
            <div key={i} className="group">
              <div className="relative aspect-square overflow-hidden mb-4 bg-stone-200 rounded-md">
                <img alt={s.title} className="object-cover transition-transform duration-1000 group-hover:scale-105 rounded-md w-full h-full" src={s.img} />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-sm text-white text-xs font-serif px-3 py-1.5 tracking-widest">{s.id}</div>
              </div>
              <p className="text-stone-900 font-medium text-sm mb-2 tracking-wide">{s.title}</p>
              <p className="text-stone-500 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a href="https://maps.google.com/?q=%E2%97%8B%E2%97%8B%E7%9C%8C%E2%97%8B%E2%97%8B%E5%B8%82" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-stone-900 text-stone-900 px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-stone-900 hover:text-white transition-colors duration-300">
            <MapPin className="w-3.5 h-3.5" />
            Google マップで開く
          </a>
        </div>
      </div>
    </section>
  );
};

const BookingCTA = () => {
  return (
    <section id="booking-cta" className="py-24 bg-stone-900 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl text-white">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Reservation</h2>
          <p className="text-stone-400 text-sm tracking-widest">ご予約・お問い合わせ</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <a href="https://beauty.hotpepper.jp/" target="_blank" rel="noopener noreferrer" className="group border border-stone-700 p-8 text-center hover:border-white hover:bg-stone-800 transition-all duration-300">
            <Calendar className="w-8 h-8 mx-auto text-stone-400 group-hover:text-white mb-4 transition-colors" />
            <h3 className="font-serif text-lg mb-2">WEB予約</h3>
            <p className="text-stone-400 text-xs mb-4 leading-relaxed">Hot Pepper Beautyから<br />24時間いつでも予約可能</p>
            <span className="inline-flex items-center gap-1 text-xs text-stone-400 group-hover:text-white transition-colors">
              予約する <ArrowRight className="w-3 h-3" />
            </span>
          </a>
          <a href="https://line.me/" target="_blank" rel="noopener noreferrer" className="group border border-[#06C755]/50 p-8 text-center hover:bg-[#06C755]/10 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-3 right-3 text-[10px] bg-[#06C755] text-white px-2 py-0.5 rounded">おすすめ</div>
            <MessageCircle className="w-8 h-8 mx-auto text-[#06C755] mb-4" />
            <h3 className="font-serif text-lg mb-2">LINE相談</h3>
            <p className="text-stone-400 text-xs mb-4 leading-relaxed">スタイルのご相談・<br />ご質問はLINEへ</p>
            <span className="inline-flex items-center gap-1 text-xs text-[#06C755]">
              追加する <ArrowRight className="w-3 h-3" />
            </span>
          </a>
          <a href="tel:03-0000-0000" className="group border border-stone-700 p-8 text-center hover:border-white hover:bg-stone-800 transition-all duration-300">
            <Phone className="w-8 h-8 mx-auto text-stone-400 group-hover:text-white mb-4 transition-colors" />
            <h3 className="font-serif text-lg mb-2">お電話</h3>
            <p className="text-stone-400 text-xs mb-4 leading-relaxed">平日 11:00〜21:00<br />土日祝 10:00〜20:00</p>
            <span className="font-serif text-lg">03-0000-0000</span>
          </a>
        </div>
        <p className="text-center text-stone-500 text-xs">※ 当日予約のご対応は、お電話にてお問い合わせください。</p>
      </div>
    </section >
  );
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl text-white tracking-widest mb-6">LUMIÈRE</h2>
            <p className="text-sm text-stone-400 leading-relaxed mb-6">
              日常を忘れ、新しい自分に出会う場所。<br />
              洗練された技術と上質な空間で、<br />
              あなただけの美しさを引き出します。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><MessageCircle className="w-5 h-5" /></a>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-1"></div>
          <div>
            <h3 className="text-white text-xs tracking-[0.3em] uppercase mb-8">Navigation</h3>
            <ul className="space-y-4 text-xs tracking-[0.2em]">
              <li><a href="#concept" className="hover:text-white transition-colors">Concept</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#staff" className="hover:text-white transition-colors">Staff</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xs tracking-[0.3em] uppercase mb-8">Address</h3>
            <p className="text-xs leading-relaxed text-stone-400">
              〒000-0000<br />
              〇〇県〇〇市〇〇町1-2-3<br />
              〇〇ビル2F<br /><br />
              03-0000-0000<br />
              平日 11:00-21:00 / 土日祝 10:00-20:00
            </p>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-stone-600 uppercase tracking-widest text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>© {year} LUMIÈRE. All Rights Reserved.</p>
            <a href="https://ywp-digital.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">PRODUCED BY YWP DIGITAL</a>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const MobileCTA = () => (
  <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex border-t border-stone-200 bg-white/90 backdrop-blur-md">
    <a href="tel:03-0000-0000" className="flex-1 py-4 flex flex-col items-center justify-center border-r border-stone-100">
      <Phone className="w-4 h-4 mb-1 text-stone-900" />
      <span className="text-[9px] font-bold text-stone-600">CALL</span>
    </a>
    <a href="#" className="flex-1 py-4 flex flex-col items-center justify-center border-r border-stone-100">
      <MessageCircle className="w-4 h-4 mb-1 text-[#06C755]" />
      <span className="text-[9px] font-bold text-stone-600">LINE</span>
    </a>
    <a href="#booking-cta" className="flex-[2] py-4 flex flex-col items-center justify-center bg-stone-900">
      <Calendar className="w-4 h-4 mb-1 text-white" />
      <span className="text-[9px] font-bold text-white tracking-widest">RESERVE</span>
    </a>
  </div>
);

const DemoBanner = () => (
  <div className="w-full bg-amber-50 border-b border-amber-200 py-2.5 px-4 text-center z-[100] relative">
    <p className="text-amber-800 text-xs sm:text-sm leading-relaxed font-medium">
      デモサイトについて：このサイトはデモ用のサンプルです。デザイン・イメージカラーはお客様のブランドに合わせてカスタマイズします。 掲載中の画像はすべてイメージ素材であり、実際のサービスではお客様ご提供の写真に差し替えます。
    </p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-stone-200 antialiased overflow-x-hidden font-sans bg-white text-stone-800">
      <DemoBanner />
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Atmosphere />
        <Solutions />
        <Services />
        <Gallery />
        <InstagramSection />
        <Staff />
        <Reviews />
        <Coupon />
        <News />
        <Access />
        <BookingCTA />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
