import Link from 'next/link';
import MapContainer from '../components/MapContainer/MapContainer';

export default function Home() {
  return (
    <div className="relative max-w-5xl mx-auto pt-5 md:pt-20 sm:pt-24 lg:pt-32">
      <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
        Contact
      </h1>
      <h2 className="mt-6 md:text-3xl text-xl font-bold text-slate-600 max-w-3xl mx-auto text-center dark:text-white">
        Parish of the Holy Martyr Jehoshaphat and All Saints
      </h2>
      <div className="mt-6 md:text-lg text-sm text-slate-600 text-center max-w-3xl dark:text-slate-400 flex flex-col md:flex-row md:justify-between  ">
        <p>
          Clergy: <span className="text-blue-500">Father Volodymyr Kovtyk</span>
        </p>
        <ul className="grid md:grid-cols-2 grid-cols-3">
          <li className="text-right">Phone:</li>
          <li className="text-left pl-1 col-span-2 md:col-span-1">
            <span className="text-blue-500">+(380) 50 678 65 01</span>
          </li>
          <li className="text-right">Email:</li>
          <li className="text-left pl-1 col-span-2 md:col-span-1">
            <span className="text-blue-500">vol.kot@ukr.net</span>
          </li>
        </ul>
      </div>
      <div className="mt-6 flex-col">
        <h3 className="text-xl font-bold text-slate-600 max-w-3xl mx-auto dark:text-white mb-5">Visit us:</h3>
        <MapContainer />
        <p className="md:text-lg text-sm text-slate-600 dark:text-slate-400">
          Address:
          <span className="text-blue-500 pl-1">Tymiryazjeva St, 15а, Uzhhorod</span>
        </p>
      </div>
    </div>
  );
}
