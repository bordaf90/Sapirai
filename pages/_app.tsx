import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Sapirai Solutions</title> {/* Podés cambiar el título si querés */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}
