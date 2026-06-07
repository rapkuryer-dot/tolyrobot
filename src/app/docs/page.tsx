import Link from 'next/link';
import SiteNavbar from '../components/SiteNavbar';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: 'Docs — TOLYROBOT',
  description: 'Документация фан-проекта TOLYROBOT в честь Толи Яковенко',
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
            Всё о фан-проекте, 3D-роботе, токене $TOLY и планах развития.
          </p>
        </header>

        <DocSection title="1. Что такое TOLYROBOT?">
          <p>
            <strong>TOLYROBOT</strong> — фан-страница и веб-проект, посвящённый известному
            инфлюенсеру <strong>Толи Яковенко</strong>. На главной странице — интерактивный
            3D-робот с его лицом в шахтёрской каске, собранный в Spline и встроенный в Next.js.
          </p>
          <p className="mt-4 text-zinc-400">
            Проект создан комьюнити и не является официальным представительством Толи. Это дань
            уважения, мем и технический эксперимент в одном флаконе.
          </p>
        </DocSection>

        <DocSection title="2. Миссия проекта">
          <ul className="list-disc list-inside space-y-2 text-zinc-300">
            <li>Сохранить культурный след Толи в формате 3D-робота</li>
            <li>Объединить фанатов вокруг одного визуального символа</li>
            <li>Профинансировать разработку через комьюнити и токен $TOLY</li>
            <li>Закрыть долги, накопленные при строительстве проекта</li>
          </ul>
        </DocSection>

        <DocSection title="3. 3D-робот и технологии">
          <p className="text-zinc-300">Стек проекта:</p>
          <ul className="list-disc list-inside space-y-2 text-zinc-400 mt-4">
            <li>
              <strong className="text-white">Next.js 14</strong> — фреймворк и деплой на Vercel
            </li>
            <li>
              <strong className="text-white">Spline</strong> — 3D-сцена робота
            </li>
            <li>
              <strong className="text-white">@splinetool/runtime</strong> — замена текстуры головы
              на лицо Толи при загрузке
            </li>
            <li>
              <strong className="text-white">Tailwind CSS</strong> — тёмный UI в стиле сайта
            </li>
          </ul>
          <p className="mt-4 text-zinc-400">
            Текстура головы: <code className="text-fuchsia-300">/toli-head-zoom.png</code>.
            Применяется через matcap-слой объекта Head 2. Встроенный lookAt в сцене Spline
            поворачивает голову за курсором.
          </p>
        </DocSection>

        <DocSection title="4. Токен $TOLY">
          <p>
            Мы создаём комьюнити-токен <strong className="text-fuchsia-300">$TOLY</strong> для
            поддержки TOLYROBOT. Средства от покупок пойдут на:
          </p>
          <ul className="list-disc list-inside space-y-2 text-zinc-400 mt-4">
            <li>Разработку и поддержку сайта</li>
            <li>Улучшение 3D-модели и анимаций</li>
            <li>Хостинг, домен, Vercel Pro при необходимости</li>
            <li>Погашение долгов команды при постройке проекта</li>
            <li>Маркетинг и развитие фан-экосистемы</li>
          </ul>
          <div className="mt-6 p-4 rounded border border-yellow-600/40 bg-yellow-900/10 text-yellow-200/80 text-sm">
            ⚠️ $TOLY — комьюнити-токен в разработке. Не является инвестиционным предложением.
            DYOR. Участвуй только на свой страх и риск.
          </div>
        </DocSection>

        <DocSection title="5. Roadmap">
          <div className="space-y-4">
            <RoadmapItem phase="Phase 1 — Live" done>
              Сайт TOLYROBOT, 3D-робот с лицом Толи, деплой на Vercel
            </RoadmapItem>
            <RoadmapItem phase="Phase 2 — Token">Анонс и запуск $TOLY, whitelist для саппортеров</RoadmapItem>
            <RoadmapItem phase="Phase 3 — Community">Discord, голосования за фичи, новые скины робота</RoadmapItem>
            <RoadmapItem phase="Phase 4 — Scale">Мерч, NFT-скины, партнёрства с фан-комьюнити</RoadmapItem>
          </div>
        </DocSection>

        <DocSection title="6. Локальная разработка">
          <pre className="bg-gray-900/80 border border-white/10 rounded p-4 overflow-x-auto text-sm text-zinc-300">
{`git clone https://github.com/rapkuryer-dot/tolyrobot.git
cd tolyrobot
npm install
npm run dev
# → http://localhost:3000`}
          </pre>
          <p className="mt-4 text-zinc-500 text-sm">
            Сборка для продакшена: <code className="text-fuchsia-300">npm run build</code>
          </p>
        </DocSection>

        <DocSection title="7. Деплой на Vercel">
          <ol className="list-decimal list-inside space-y-2 text-zinc-400">
            <li>Зайди на vercel.com и импортируй репозиторий rapkuryer-dot/tolyrobot</li>
            <li>Framework Preset: Next.js (определяется автоматически)</li>
            <li>Build Command: npm run build</li>
            <li>Output: .next (по умолчанию)</li>
            <li>Нажми Deploy — готово</li>
          </ol>
        </DocSection>

        <div className="text-center pt-8">
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded border border-fuchsia-500 hover:bg-fuchsia-900/30 transition-colors"
          >
            ← На главную
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
