import '@fontsource/cabin/variable.css'
// include styles from the ui package
import '@creight/ui/global-styles.css'

import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
