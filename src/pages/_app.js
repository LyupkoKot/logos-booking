import HeaderLayout from '../components/Layouts/HeaderLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="flex">
        <HeaderLayout />
        <Component {...pageProps} />{' '}
      </div>
    </div>
  );
}

export default MyApp;
