import HeaderLayout from '../components/Layouts/HeaderLayout';
import '../styles/globals.css';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import AuthContext from '../context/AuthContext';
Amplify.configure({ ...awsconfig, ssr: true });

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AuthContext>
        <HeaderLayout>
          <Component {...pageProps} />
        </HeaderLayout>
      </AuthContext>
    </div>
  );
}

export default MyApp;
