import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Layout from '../components/Layout';

// Prevent Font Awesome from adding its CSS automatically since we import it manually in _app.
config.autoAddCss = false;

// Instantiate a single QueryClient for the lifetime of the app. In a real
// application you might configure default options here (stale time,
// retries, etc.).
const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}