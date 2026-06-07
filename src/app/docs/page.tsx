import Link from 'next/link';
import SiteNavbar from '../components/SiteNavbar';
import SiteFooter from '../components/SiteFooter';
import TwitterLink, { TWITTER_URL } from '../components/TwitterLink';

export const metadata = {
  title: 'Docs — TOLYROBOT',
  description: 'Documentation for the TOLYROBOT fan project celebrating Toli Yakovchuk',
};

export default function DocsPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <SiteNavbar />
      <main className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <header className="text-center space-y-4">
          <p className="text-fuchsia-400 text-sm tracking-widest uppercase">Documentation</p>
          <h1 className="text-5xl font-bold tracking-widest">TOLYROBOT Docs</h1>
          <p className="text-zinc-400 text-lg">
            Everything about the fan project, the 3D robot, tech stack, and roadmap.
          </p>
        </header>

        <DocSection title="1. What is TOLYROBOT?">
          <p>
            <strong>TOLYROBOT</strong> is a fan page and web project dedicated to influencer{' '}
            <strong>Toli Yakovchuk</strong>. The homepage features an interactive 3D robot with his
            face in a mining helmet, built in Spline and embedded in Next.js.
          </p>
          <p className="mt-4 text-zinc-400">
            The project is community-driven and is not an official representation of Toli. It is a
            tribute, a meme, and a technical experiment rolled into one.
          </p>
        </DocSection>

        <DocSection title="2. Project mission">
          <ul className="list-disc list-inside space-y-2 text-zinc-300">
            <li>Preserve Toli&apos;s cultural footprint as a 3D robot</li>
            <li>Unite fans around one iconic visual symbol</li>
            <li>Ship new features and scene improvements over time</li>
            <li>Keep the experience free and open for the community</li>
          </ul>
        </DocSection>

        <DocSection title="3. 3D robot & tech stack">
          <p className="text-zinc-300">Project stack:</p>
          <ul className="list-disc list-inside space-y-2 text-zinc-400 mt-4">
            <li>
              <strong className="text-white">Next.js 14</strong> — framework and Vercel deployment
            </li>
            <li>
              <strong className="text-white">Spline</strong> — 3D robot scene
            </li>
            <li>
              <strong className="text-white">@splinetool/runtime</strong> — swaps the head texture to
              Toli&apos;s face on load
            </li>
            <li>
              <strong className="text-white">Tailwind CSS</strong> — dark UI matching the site style
            </li>
          </ul>
          <p className="mt-4 text-zinc-400">
            Head texture: <code className="text-fuchsia-300">/toli-head-zoom.png</code>. Applied via
            the matcap layer on the Head 2 object. The built-in lookAt event in the Spline scene
            rotates the head toward the cursor.
          </p>
        </DocSection>

        <DocSection title="4. Official X (Twitter)">
          <p>
            Follow the project dev account{' '}
            <a
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fuchsia-300 hover:text-fuchsia-200 font-semibold"
            >
              @tolyrobot
            </a>{' '}
            on X for build logs, release notes, scene updates, and community news.
          </p>
          <ul className="list-disc list-inside space-y-2 text-zinc-400 mt-4">
            <li>Announcements when new site features ship</li>
            <li>Behind-the-scenes on the 3D robot and Spline tweaks</li>
            <li>Roadmap milestones and deployment updates</li>
            <li>Direct channel to the team building TOLYROBOT</li>
          </ul>
          <div className="mt-6">
            <TwitterLink showLabel />
          </div>
        </DocSection>

        <DocSection title="5. Roadmap">
          <div className="space-y-4">
            <RoadmapItem phase="Phase 1 — Live" done>
              TOLYROBOT site, 3D robot with Toli&apos;s face, Vercel deployment
            </RoadmapItem>
            <RoadmapItem phase="Phase 2 — Community">
              Discord, feature voting, new robot skins
            </RoadmapItem>
            <RoadmapItem phase="Phase 3 — Polish">
              Smoother animations, mobile tuning, performance passes
            </RoadmapItem>
            <RoadmapItem phase="Phase 4 — Scale">
              Merch concepts, collabs with the fan community
            </RoadmapItem>
          </div>
        </DocSection>

        <DocSection title="6. Local development">
          <pre className="bg-gray-900/80 border border-white/10 rounded p-4 overflow-x-auto text-sm text-zinc-300">
{`git clone https://github.com/rapkuryer-dot/tolyrobot.git
cd tolyrobot
npm install
npm run dev
# → http://localhost:3000`}
          </pre>
          <p className="mt-4 text-zinc-500 text-sm">
            Production build: <code className="text-fuchsia-300">npm run build</code>
          </p>
        </DocSection>

        <DocSection title="7. Deploy on Vercel">
          <ol className="list-decimal list-inside space-y-2 text-zinc-400">
            <li>Go to vercel.com and import the rapkuryer-dot/tolyrobot repository</li>
            <li>Framework Preset: Next.js (auto-detected)</li>
            <li>Build Command: npm run build</li>
            <li>Output: .next (default)</li>
            <li>Click Deploy — done</li>
          </ol>
        </DocSection>

        <div className="text-center pt-8">
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded border border-fuchsia-500 hover:bg-fuchsia-900/30 transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function DocSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg bg-gray-900/40 backdrop-blur border border-white/10 p-8">
      <h2 className="text-2xl font-bold mb-4 text-fuchsia-200">{title}</h2>
      <div className="text-zinc-300 leading-relaxed">{children}</div>
    </section>
  );
}

function RoadmapItem({
  phase,
  children,
  done,
}: {
  phase: string;
  children: React.ReactNode;
  done?: boolean;
}) {
  return (
    <div className="flex gap-4 items-start border-l-2 border-fuchsia-800 pl-4">
      <div>
        <p className="font-bold text-white">
          {phase} {done && <span className="text-green-400 text-sm ml-2">✓ Done</span>}
        </p>
        <p className="text-zinc-400 mt-1">{children}</p>
      </div>
    </div>
  );
}
