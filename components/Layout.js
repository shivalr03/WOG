import Link from 'next/link';
import WhatsappButton from './WhatsappButton';

/**
 * Layout component wrapping each page with a header, footer and a
 * persistent WhatsApp chat button. Navigation uses Next.js `Link` for
 * client‑side transitions. The brand colours are applied via
 * Tailwind utility classes.
 */
export default function Layout({ children }) {
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-brand-red cursor-pointer">WOG Travels</span>
            </Link>
          </div>
          <nav className="space-x-4 text-sm sm:text-base">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <Link href="/collections" className="hover:text-brand-red">Collections</Link>
            <Link href="/group-tours" className="hover:text-brand-red">Group Tours</Link>
            <Link href="/about" className="hover:text-brand-red">About</Link>
            <Link href="/contact" className="hover:text-brand-red">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="min-h-[60vh]">{children}</main>
      <footer className="bg-gray-800 text-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">About WOG</h3>
            <p className="text-sm leading-relaxed">
              We are dedicated to crafting unforgettable travel experiences across the globe. Our team
              of experts curates unique itineraries to ensure every journey is special.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm space-y-1">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/collections">Collections</Link></li>
              <li><Link href="/group-tours">Group Tours</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-sm">Email: info@wogtravels.com</p>
            <p className="text-sm">Phone: +91 98765 43210</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <p className="text-sm">Join us on social media for travel tips and inspiration.</p>
          </div>
        </div>
      </footer>
      <WhatsappButton />
    </>
  );
}