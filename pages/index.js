import Head from "next/head";
import HomepageHeader from "../components/HomepageHeader";
import HomePageMain from "../components/HomePageMain";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Oικοδομικές κατασκευές | Αφοί Δημητρακούδα | Ιερισσός Χαλκιδικής
        </title>
        <meta
          name="google-site-verification"
          content="dIm_zFMudjHjPr2VUdGnlljx1MWI2v5bq2gCDz5o50c"
        />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dimitrakoudas.gr" />
        <meta
          name="title"
          content="Oικοδομικές κατασκευές | Αφοί Δημητρακούδα | Ιερισσός
          Χαλκιδικής"
        />
        <meta
          name="description"
          content="Οικοδομικές κατασκευές και εργασίες με βάση την Ιερισσό Χαλκιδικής. Ανέγερση οικοδομής, σκεπές, πέργκολες, περιφράξεις και άλλα."
        />
        <meta property="og:url" content="https://dimitrakoudas.gr" />
        <meta
          property="og:title"
          content="Oικοδομικές κατασκευές | Αφοί Δημητρακούδα | Ιερισσός
          Χαλκιδικής"
        />
        <meta
          property="og:description"
          content="Οικοδομικές κατασκευές και εργασίες με βάση την Ιερισσό Χαλκιδικής. Ανέγερση οικοδομής, σκεπές, πέργκολες, περιφράξεις και άλλα."
        />
        <meta
          property="og:image"
          content="https://dimitrakoudas.gr/public/mainbg.jpg"
        />
      </Head>
      <HomepageHeader />
      <HomePageMain />
      <Footer />
    </div>
  );
}
