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
          name="title"
          content="Oικοδομικές κατασκευές | Αφοί Δημητρακούδα | Ιερισσός
          Χαλκιδικής"
        />
        <meta
          name="description"
          content="Οικοδομικές κατασκευές και εργασίες με βάση την Ιερισσό Χαλκιδικής. Ανέγερση οικοδομής, σκεπές, πέργκολες, περιφράξεις και άλλα."
        />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="Oικοδομικές κατασκευές | Αφοί Δημητρακούδα | Ιερισσός
          Χαλκιδικής"
        />
        <meta
          property="og:description"
          content="Οικοδομικές κατασκευές και εργασίες με βάση την Ιερισσό Χαλκιδικής. Ανέγερση οικοδομής, σκεπές, πέργκολες, περιφράξεις και άλλα."
        />
        <meta property="og:image" />
      </Head>
      <HomepageHeader />
      <HomePageMain />
      <Footer />
    </div>
  );
}