import Link from 'next/link';
import pricingCards from './libs/PricingCards';
import { CheckCheck } from 'lucide-react';
import SplineHero from './components/SplineHero';
import SiteNavbar from './components/SiteNavbar';
import SiteFooter from './components/SiteFooter';

export default function Home() {
  return (
    <div>
      <main className="bg-black">
        <SiteNavbar />
        <SplineHero />

        <section
          id="about"
          className="relative min-h-screen flex justify-center items-center bg-black text-white py-8 pb-4 mx-4 md:mx-8 z-10"
        >
          <div
            className="absolute inset-2 left-0 right-0 bg-cover bg-center blur-lg"
            style={{ backgroundImage: 'url(/bg.jpeg)', marginLeft: '0px', marginRight: '0px' }}
          />
          <div className="relative max-w-4xl text-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-md p-8 rounded mx-4">
            <h2 className="text-4xl font-bold mb-4 tracking-widest">About</h2>
            <p className="text-lg text-zinc-200 leading-relaxed">
              <strong className="text-white">TOLYROBOT</strong> is a fan page and digital tribute to
              influencer <strong className="text-fuchsia-300">Toli Yakovchuk</strong>. We built a 3D
              robot with his face in a mining helmet so the community can follow the project, share
              the vibe, and be part of the story.
            </p>
            <p className="text-lg text-zinc-400 mt-4 leading-relaxed">
              This is an unofficial fan project made with love by the community. We are not officially
              affiliated with Toli, but we are inspired by his energy, humor, and impact on streaming
              culture.
            </p>
          </div>
        </section>

        <Services />

        <section
          id="pricing"
          className="h-fit text-white min-h-screen w-full flex flex-col items-center justify-center gap-8 p-8"
        >
          <h4 className="text-4xl text-white md:text-5xl font-bold tracking-widest">Support</h4>
          <p className="text-zinc-400 max-w-2xl text-center">
            Pick a tier to back TOLYROBOT. Every contribution helps us ship updates, improve the 3D
            scene, and keep the site live.
          </p>
          <div className="grid text-white grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 items-center h-fit w-full max-w-3xl gap-8">
            {pricingCards.map((pricingCard) => (
              <PricingCard
                oneliner={pricingCard.oneliner}
                title={pricingCard.title}
                price={pricingCard.price}
                benefits={pricingCard.benefits}
                key={pricingCard.id}
              />
            ))}
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

interface IPricingCardProps {
  title: string;
  price: number;
  benefits: string[];
  oneliner: string;
}

function PricingCard({ title, price, benefits, oneliner }: IPricingCardProps) {
  return (
    <div className="h-fit w-full rounded flex flex-col p-8 gap-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 relative">
      <div className="flex flex-col gap-2">
        <div>
          <h6 className="text-2xl">{title}</h6>
          <p className="text-sm text-zinc-500">{oneliner}</p>
        </div>
        <p className="text-4xl font-bold">
          ${price} <span className="text-sm font-normal text-white">/ month</span>
        </p>
      </div>
      <button className="bg-black rounded p-2 text-white text-sm transition-colors hover:bg-fuchsia-800">
        Support the project
      </button>
      <div className="flex flex-col w-full gap-4">
        {benefits.map((benefit, i) => (
          <p key={i} className="text-sm text-zinc-500 flex items-center gap-2">
            <span>
              <CheckCheck />
            </span>
            {benefit}
          </p>
        ))}
      </div>
      <div className="absolute inset-0 rounded overflow-hidden pointer-events-none">
        <div
          className="border-2 border-fuchsia-700 hover:border-white rounded-full absolute"
          style={{ animation: 'rotate 2s linear infinite' }}
        />
      </div>
    </div>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="min-h-screen left-0 right-0 w-full flex justify-center items-center text-white py-4 mx-0 md:mx-0 z-20 relative backdrop-filter backdrop-blur-lg"
    >
      <div className="max-w-6xl text-center px-4">
        <h2 className="text-4xl font-bold mb-8 tracking-widest">What&apos;s inside</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg border border-white p-8 mx-4">
            <h3 className="text-3xl font-bold mb-4">3D Toli Robot</h3>
            <p className="text-lg text-zinc-300">
              An interactive Spline scene with a 3D robot and Toli&apos;s face in a mining helmet. The
              head tracks your cursor and moves with the model.
            </p>
          </div>
          <div className="rounded-lg bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg border border-white p-8 mx-4">
            <h3 className="text-3xl font-bold mb-4">Fan Community</h3>
            <p className="text-lg text-zinc-300">
              TOLYROBOT brings Toli Yakovchuk fans together around one iconic visual — memes, robot,
              and a shared mission to finish what we started.
            </p>
          </div>
          <div className="rounded-lg bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg border border-white p-8 mx-4">
            <h3 className="text-3xl font-bold mb-4">Always Evolving</h3>
            <p className="text-lg text-zinc-300">
              New animations, scene tweaks, and community features land on the roadmap. Follow Docs
              for release notes and what ships next.
            </p>
          </div>
        </div>
        <Link
          href="/docs"
          className="inline-block mt-12 px-8 py-3 rounded border border-fuchsia-500 hover:bg-fuchsia-900/30 transition-colors"
        >
          Read full documentation →
        </Link>
      </div>
    </section>
  );
}
