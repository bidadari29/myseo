import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <script defer type="application/javascript" src="https://patches.ahrefs.com/9b00879b-d410-4840-99a1-9bebde3df8c9.js"></script> */}
        <script
          defer
          type="application/javascript"
          src="https://patches.ahrefs.com/9b00879b-d410-4840-99a1-9bebde3df8c9.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
