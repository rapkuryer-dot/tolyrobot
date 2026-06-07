import Link from 'next/link';
import TwitterLink from './TwitterLink';

export default function SiteNavbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex h-16 w-full items-center justify-center border-b border-white/10 bg-black/80 text-white backdrop-blur-xl">
      <div className="max-w-7xl w-full flex items-center justify-between p-4">
        <Link href="/" className="font-bold tracking-widest hover:text-fuchsia-300 transition-colors">
          TOLYROBOT
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
        <ul className="flex gap-4 sm:gap-8">
          <li>
            <Link className="hover:text-fuchsia-300 transition-colors text-xs sm:text-base" href="/#home">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-fuchsia-300 transition-colors text-xs sm:text-base" href="/#about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-fuchsia-300 transition-colors text-xs sm:text-base" href="/#token">
              Token
            </Link>
          </li>
          <li>
            <Link className="hover:text-fuchsia-300 transition-colors text-xs sm:text-base" href="/docs">
              Docs
            </Link>
          </li>
        </ul>
        <TwitterLink className="px-3 py-1.5" showLabel />
        </div>
      </div>
    </div>
  );
}
