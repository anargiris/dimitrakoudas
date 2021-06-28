import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/favicon.ico" />
          <meta name="robots" content="index, follow" />

          <meta name="theme-color" content="#ff9f1c" />
          <meta property="og:type" content="website" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
