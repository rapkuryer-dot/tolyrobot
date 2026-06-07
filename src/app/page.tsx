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
            <h2 className="text-4xl font-bold mb-4 tracking-widest">О проекте</h2>
            <p className="text-lg text-zinc-200 leading-relaxed">
              <strong className="text-white">TOLYROBOT</strong> — фан-страница и цифровой мемориал
              известного инфлюенсера <strong className="text-fuchsia-300">Толи Яковенко</strong>.
              Мы собрали 3D-робота с его лицом в шлеме, чтобы сообщество могло поддержать идею,
              следить за развитием проекта и участвовать в его истории.
            </p>
            <p className="text-lg text-zinc-400 mt-4 leading-relaxed">
              Это неофициальный фан-проект, созданный с любовью комьюнити. Мы не связаны напрямую
              с Толей, но вдохновлены его энергией, юмором и вкладом в культуру стриминга.
            </p>
          </div>
        </section>

        <section
          id="token"
          className="min-h-screen flex justify-center items-center bg-black text-white py-16 px-4 z-10 relative"
        >
          <div className="max-w-4xl w-full rounded-lg bg-gray-900 bg-opacity-40 backdrop-filter backdrop-blur-xl border border-fuchsia-900/50 p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-6 tracking-widest text-center">$TOLY Token</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Для поддержки строительства TOLYROBOT мы запускаем комьюнити-токен{' '}
              <span className="text-fuchsia-300 font-bold">$TOLY</span>. Покупки и донаты через
              токен помогут профинансировать разработку сайта, 3D-модели, хостинг и закрыть
              накопившиеся долги при постройке этого проекта.
            </p>
            <ul className="grid gap-4 md:grid-cols-2 text-zinc-400">
              <li className="rounded border border-white/10 p-4">Финансирование 3D и веб-разработки</li>
              <li className="rounded border border-white/10 p-4">Оплата серверов и деплоя на Vercel</li>
              <li className="rounded border border-white/10 p-4">Погашение долгов команды проекта</li>
              <li className="rounded border border-white/10 p-4">Развитие фан-экосистемы Toli</li>
            </ul>
            <p className="text-sm text-zinc-500 mt-8 text-center">
              Токен в разработке. Следи за анонсами в Docs и на этой странице.
            </p>
          </div>
        </section>

        <Services />

        <section
          id="pricing"
          className="h-fit text-white min-h-screen w-full flex flex-col items-center justify-center gap-8 p-8"
        >
          <h4 className="text-4xl text-white md:text-5xl font-bold tracking-widest">Поддержка</h4>
          <p className="text-zinc-400 max-w-2xl text-center">
            Выбери уровень поддержки TOLYROBOT. Все средства идут на развитие проекта и запуск $TOLY.
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
          ${price} <span className="text-sm font-normal text-white">/ месяц</span>
        </p>
      </div>
      <button className="bg-black rounded p-2 text-white text-sm transition-colors hover:bg-fuchsia-800">
        Поддержать проект
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
        <h2 className="text-4xl font-bold mb-8 tracking-widest">Что внутри</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg border border-white p-8 mx-4">
            <h3 className="text-3xl font-bold mb-4">3D Toli Robot</h3>
            <p className="text-lg text-zinc-300">
              Интерактивная Spline-сцена с 3D-роботом и лицом Толи в каске. Голова следит за
              курсором и двигается вместе с моделью.
            </p>
          </div>
          <div className="rounded-lg bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg border border-white p-8 mx-4">
            <h3 className="text-3xl font-bold mb-4">Фан-комьюнити</h3>
            <p className="text-lg text-zinc-300">
              TOLYROBOT объединяет фанатов Толи Яковенко: мемы, робот, токен и общая цель —
              довести проект до конца.
            </p>
          </div>
          <div className="rounded-lg bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg border border-white p-8 mx-4">
            <h3 className="text-3xl font-bold mb-4">$TOLY Economy</h3>
            <p className="text-lg text-zinc-300">
              Комьюнити-токен для прозрачного финансирования: каждая покупка приближает нас к
              оплате долгов и новым фичам.
            </p>
          </div>
        </div>
        <Link
          href="/docs"
          className="inline-block mt-12 px-8 py-3 rounded border border-fuchsia-500 hover:bg-fuchsia-900/30 transition-colors"
        >
          Читать полную документацию →
        </Link>
      </div>
    </section>
  );
}
