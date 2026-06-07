import Link from 'next/link';
import TwitterLink from './TwitterLink';

export default function SiteNavbar() {
  return (
    <div className="w-full text-white h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 flex items-center justify-center z-30 relative">
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
            <Link className="hover:text-fuchsia-300 transition-colors text-xs sm:text-base" href="/docs">
              Docs
            </Link>
          </li>
          <li>
            <Link className="hover:text-fuchsia-300 transition-colors text-xs sm:text-base" href="/#pricing">
              Support
            </Link>
          </li>
        </ul>
        <TwitterLink className="px-3 py-1.5" showLabel />
        </div>
      </div>
    </div>
  );
}
