import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-white-900 text-white w-full py-4 text-center z-10 relative">
      <div className="bg-primary">
        <section className="max-w-[1400px] mx-auto text-white">
          <div className="grid md:grid-cols-3 py-5">
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 tracking-widest">
                TOLYROBOT
              </h1>
              <p className="text-gray-400 text-left">
                Фан-проект в честь{' '}
                <span className="text-white font-bold">Толи Яковенко</span>. Подпишись на обновления
                и запуск токена.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h2 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Навигация</h2>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link className="cursor-pointer hover:text-fuchsia-500" href="/#home">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="cursor-pointer hover:text-fuchsia-500" href="/#about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="cursor-pointer hover:text-fuchsia-500" href="/docs">
                        Docs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-6">
                  <h2 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Проект</h2>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link className="cursor-pointer text-left hover:text-fuchsia-300" href="/#token">
                        $TOLY Token
                      </Link>
                    </li>
                    <li>
                      <Link className="cursor-pointer text-left hover:text-fuchsia-300" href="/#pricing">
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h2 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Legal</h2>
                  <ul className="flex flex-col gap-3">
                    <li className="cursor-pointer text-left hover:text-fuchsia-300">Privacy</li>
                    <li className="cursor-pointer text-left hover:text-fuchsia-300">Terms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <p>&copy; 2026 TOLYROBOT. Fan project. Not affiliated with Toli Yakovchuk officially.</p>
    </footer>
  );
}
