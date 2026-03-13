import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl text-white tracking-widest mb-6">
              LUMIÈRE
            </h2>
            <p className="text-sm text-stone-400 leading-relaxed mb-6">
              日常を忘れ、新しい自分に出会う場所。
              <br />
              洗練された技術と上質な空間で、
              <br />
              あなただけの美しさを引き出します。
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white text-sm tracking-widest uppercase mb-6">
              Information
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-3 mt-0.5 shrink-0 text-stone-500"
                />
                <span>
                  〒000-0000
                  <br />
                  〇〇県〇〇市〇〇町1-2-3
                  <br />
                  ルミエールビル 2F
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 shrink-0 text-stone-500" />
                <span>03-0000-0000</span>
              </li>
              <li className="flex items-start">
                <Clock
                  size={18}
                  className="mr-3 mt-0.5 shrink-0 text-stone-500"
                />
                <span>
                  平日: 11:00 - 21:00
                  <br />
                  土日祝: 10:00 - 20:00
                  <br />
                  定休日: 毎週火曜日・第3水曜日
                </span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-sm tracking-widest uppercase mb-6">
              Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#concept"
                  className="hover:text-white transition-colors"
                >
                  Concept
                </a>
              </li>
              <li>
                <a
                  href="#atmosphere"
                  className="hover:text-white transition-colors"
                >
                  Atmosphere
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="#staff" className="hover:text-white transition-colors">
                  Staff
                </a>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="h-48 bg-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-stone-500 text-sm">
              Google Maps Embed
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} LUMIÈRE Beauty Salon. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-stone-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
