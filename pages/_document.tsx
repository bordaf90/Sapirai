// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico?v=2" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Sapirai Solutions - AI for your business" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Sapirai Solutions - AI for your business" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
