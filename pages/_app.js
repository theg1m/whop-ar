// pages/_app.js
import '../styles/globals.css';
import { AuthProvider } from '../context/AuthContext'; // Import AuthProvider

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider> {/* Wrap Component with AuthProvider */}
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
