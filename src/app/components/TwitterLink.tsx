import { Twitter } from 'lucide-react';

export const TWITTER_URL = 'https://x.com/tolyrobot';

type TwitterLinkProps = {
  className?: string;
  showLabel?: boolean;
};

export default function TwitterLink({ className = '', showLabel = false }: TwitterLinkProps) {
  return (
    <a
      href={TWITTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TOLYROBOT on X (Twitter)"
      className={`inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-fuchsia-400 hover:bg-fuchsia-900/30 hover:text-fuchsia-200 ${className}`}
    >
      <Twitter size={18} />
      {showLabel && <span>@tolyrobot</span>}
    </a>
  );
}
