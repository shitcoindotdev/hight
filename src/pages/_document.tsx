import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>$T - HIGH T</title>
        <link rel="icon" href="/dexs.svg" />
        <script
          src="https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js"
          defer
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"
          defer
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
