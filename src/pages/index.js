import Link from 'next/link';

export default function Home() {
  return (
    <div className="content-container">
      <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
          Welcome to our online Mass reservation web page
        </h1>
        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
          To proceed with reservation you can click on a button below, or navigate through our side bar and select
          calendar item.
        </p>
        <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
          <Link href="/calendar">
            <a
              className="primary-button"
            >
              Get started
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
