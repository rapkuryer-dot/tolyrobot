import Link from 'next/link';
import TwitterLink, { TWITTER_URL } from './TwitterLink';

const footerColumns = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '/#home' },
      { label: 'About', href: '/#about' },
      { label: 'Token', href: '/#token' },
      { label: 'Docs', href: '/docs' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Features', href: '/#services' },
      { label: 'Support', href: '/#pricing' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
] as const;

export default function SiteFooter() {
  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-black/95 text-white backdrop-blur-md">
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-4 lg:gap-12">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-xl font-bold tracking-widest">TOLYROBOT</h2>
            <p className="max-w-xs text-left text-sm leading-relaxed text-zinc-400">
              A fan project celebrating{' '}
              <span className="font-semibold text-white">Toli Yakovchuk</span>. Follow dev updates on{' '}
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuchsia-300 hover:text-fuchsia-200"
              >
                @tolyrobot
              </a>
              .
            </p>
            <TwitterLink showLabel />
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 lg:contents">
            {footerColumns.map((column) => (
              <div key={column.title} className="flex min-w-0 flex-col items-start">
                <h3 className="mb-4 text-xl font-bold leading-none">{column.title}</h3>
                <ul className="flex flex-col items-start gap-3 text-sm text-zinc-400">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.href === '#' ? (
                        <span className="cursor-pointer transition-colors hover:text-fuchsia-300">
                          {link.label}
                        </span>
                      ) : (
                        <Link
                          href={link.href}
                          className="transition-colors hover:text-fuchsia-300"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-zinc-500">
          &copy; 2026 TOLYROBOT. Fan project. Not officially affiliated with Toli Yakovchuk.
        </p>
      </section>
    </footer>
  );
}
