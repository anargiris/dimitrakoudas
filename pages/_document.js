import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="el">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
            rel="stylesheet"
          />
          <meta property="og:locale" content="el_GR" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="robots" content="index, follow" />
          <meta
            property="og:site_name"
            content="Οικοδομικές εργασίες Αφοί Δημητρακούδα"
          />
          <meta name="theme-color" content="#ff9f1c" />
          <meta property="og:type" content="website" />
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
