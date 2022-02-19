import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '@/store/index'
import { Provider } from 'react-redux'
import { DefaultSPALayout } from '@/layouts/DefaultSPALayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultSPALayout>
      <Provider store={store}>         
        <Component {...pageProps} />
      </Provider>
    </DefaultSPALayout>
  )
}

export default MyApp
