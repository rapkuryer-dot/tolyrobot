'use client';

import { useCallback, useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { TOLYROBOT_CONTRACT } from '../libs/contract';

export default function ContractPanel() {
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
    <section
      id="token"
      className="relative z-10 flex min-h-screen items-center justify-center bg-black px-4 py-16 text-white"
    >
      <div className="w-full max-w-4xl rounded-lg border border-fuchsia-900/50 bg-gray-900/40 p-8 backdrop-blur-xl md:p-12">
        <p className="mb-2 text-center text-sm uppercase tracking-widest text-fuchsia-400">
          Community Coin
        </p>
        <h2 className="mb-6 text-center text-4xl font-bold tracking-widest">Support TOLYROBOT</h2>
        <p className="mb-4 text-center text-lg leading-relaxed text-zinc-300">
          This coin helps support our robot and fund the TOLYROBOT project — 3D development, hosting,
          and everything we need to keep building.
        </p>
        <p className="mb-8 text-center text-zinc-400">
          Every buy brings the community closer to new features, scene upgrades, and a stronger fan
          experience around Toli&apos;s robot.
        </p>

        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-center text-sm text-zinc-500">Contract address</p>
          <button
            type="button"
            onClick={handleCopy}
            className="group flex w-full items-center justify-between gap-4 rounded-lg border border-white/15 bg-black/60 px-4 py-4 text-left transition-colors hover:border-fuchsia-500/60 hover:bg-fuchsia-950/20"
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
        </div>
      </div>
    </section>
  );
}
