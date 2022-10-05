import '../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';

import TemplateProvider from '../contexts/SelectedTemplate';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TemplateProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </TemplateProvider>
  );
}
