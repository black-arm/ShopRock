import '../styles/globals.css'
import variables from '../styles/variables.module.scss';
import 'bootstrap/scss/bootstrap.scss';

import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
