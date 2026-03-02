import { IMAGES } from '@/lib/constants';
import Link from 'next/link';
import { CalendarHeart, Instagram, ArrowRight } from 'lucide-react';
import StyleGallery from '@/components/sections/StyleGallery';
import MenuPricing from '@/components/sections/MenuPricing';
import StaffScroll from '@/components/ui/StaffScroll';
import Concept from '@/components/sections/Concept';

export default function Home() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Asymmetrical Salon Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Text Content (LHS - 5 cols) */}
          <div className="lg:col-span-5 relative z-20">
            <span className="text-stone-400 tracking-[0.4em] text-xs uppercase mb-8 block reveal-on-scroll">
              Est. 2024 / Tokyo
            </span>
            <h1 className="font-display italic text-6xl md:text-8xl text-slate-800 leading-[1.1] mb-8 reveal-on-scroll">
              洗練された<br />
              <span className="pl-12 md:pl-24 block">技術で、</span>
              <span className="text-gold-accent not-italic font-serif text-3xl md:text-5xl block mt-4">新しい自分に出会う。</span>
            </h1>
            <p className="text-slate-500 text-base md:text-lg mb-12 max-w-md leading-loose reveal-on-scroll reveal-delay-100">
              都内有名店出身のトップスタイリストが、<br />
              マンツーマンで向き合うプライベートサロン。<br />
              日常を脱ぎ捨て、心まで解き放たれるひとときを。
            </p>
            <Link href="/reserve" className="group flex items-center gap-4 text-slate-800 font-bold tracking-[0.2em] uppercase text-sm reveal-on-scroll reveal-delay-200">
              <span className="w-12 h-px bg-slate-800 group-hover:w-20 transition-all duration-500" />
              Book an Appointment
            </Link>
          </div>

          {/* Image Content (RHS - 7 cols) with Overlap */}
          <div className="lg:col-span-7 relative">
            <div className="relative z-10 w-4/5 ml-auto reveal-mask">
              <img
                src={IMAGES.HERO_BG}
                alt="Salon Interior"
                className="w-full aspect-[4/5] object-cover rounded-sm grayscale-[20%]"
              />
            </div>
            {/* Overlapping floating image */}
            <div className="absolute -bottom-12 -left-8 w-1/2 z-20 reveal-mask-up reveal-delay-300 hidden md:block border-[12px] border-stone-50">
              <img
                src={IMAGES.ABOUT}
                alt="Styling"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Concept with high contrast white space */}
      <section className="py-48 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1 reveal-on-scroll">
            <Concept />
          </div>
          <div className="order-1 md:order-2 relative reveal-mask reveal-delay-200">
            <div className="aspect-[3/4] bg-stone-100 relative overflow-hidden">
              <img src={IMAGES.GALLERY.STYLE_1} alt="Concept" className="w-full h-full object-cover" />
            </div>
            {/* Decorative label */}
            <div className="absolute top-8 -right-4 bg-gold-accent text-white py-8 px-2 text-[10px] tracking-[0.5em] uppercase [writing-mode:vertical-rl]">
              Minimalism & Elegance
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section (Horizontal Scroll) */}
      <StaffScroll />

      {/* Gallery Section */}
      <div className="py-24 border-t border-stone-100">
        <StyleGallery />
      </div>

      {/* Pricing Section */}
      <section className="bg-stone-900 text-white py-32">
        <MenuPricing />
      </section>

      {/* Instagram Feed / Outro */}
      <section className="py-24 text-center">
        <div className="flex flex-col items-center gap-6 reveal-on-scroll">
          <Instagram className="w-8 h-8 text-stone-300" />
          <p className="text-stone-400 tracking-[0.2em] text-xs uppercase underline underline-offset-8 decoration-stone-200">
            Follow our daily styles
          </p>
          <h2 className="text-3xl font-serif text-slate-800">@salon_demo_official</h2>
        </div>
      </section>
    </div>
  );
}
