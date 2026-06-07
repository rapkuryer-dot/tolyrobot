'use client';

import { useCallback, useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { TOLYROBOT_CONTRACT } from '../libs/contract';

export default function ContractCopyButton({ className = '' }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(TOLYROBOT_CONTRACT);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, []);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`group flex w-full items-center justify-between gap-4 rounded-lg border border-white/15 bg-black/60 px-4 py-4 text-left transition-colors hover:border-fuchsia-500/60 hover:bg-fuchsia-950/20 ${className}`}
    >
      <code className="break-all text-sm text-fuchsia-200 sm:text-base">{TOLYROBOT_CONTRACT}</code>
      <span className="flex shrink-0 items-center gap-2 text-sm text-zinc-400 group-hover:text-fuchsia-300">
        {copied ? (
          <>
            <Check size={16} className="text-green-400" />
            <span className="text-green-400">Copied!</span>
          </>
        ) : (
          <>
            <Copy size={16} />
            <span>Copy</span>
          </>
        )}
      </span>
    </button>
  );
}
