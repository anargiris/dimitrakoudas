import React from "react";
import Navbar from "../components/Navbar";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";
import Footer from "../components/Footer";
import Head from "next/head";

const photos = () => {
  return (
    <>
      <Head>
        <title>
          Oικοδομικές κατασκευές | Αφοί Δημητρακούδα | Ιερισσός Χαλκιδικής
        </title>
        <meta
          name="title"
          content="Oικοδομικές κατασκευές | Αφοί Δημητρακούδα | Ιερισσός
      Χαλκιδικής | Photos"
        />

        <link rel="canonical" href="https://dimitrakoudas.gr/photos" />
        <meta
          name="description"
          content="Φωτογραφίες από τις εργασίες μας. Αφοί Δημητρακούδα, Ιερισσός Χαλκιδικής. Οικοδομικές εργασίες σε όλο το τρίτο πόδι Χαλκιδικής."
        />
        <meta property="og:url" content="https://dimitrakoudas.gr/photos" />
        <meta
          property="og:title"
          content="Oικοδομικές κατασκευές | Αφοί Δημητρακούδα | Ιερισσός
      Χαλκιδικής"
        />
        <meta
          property="og:description"
          content="Φωτογραφίες από τις εργασίες μας. Αφοί Δημητρακούδα, Ιερισσός Χαλκιδικής. Οικοδομικές εργασίες σε όλο το τρίτο πόδι Χαλκιδικής."
        />
        <meta property="og:image" content="/mainbg.jpg" />

        <meta name="robots" content="index, follow" />
      </Head>
      <header className="font-manrope">
        <Navbar />
        <h1 className="text-2xl text-center font-bold text-gray-800">
          Οικοδομικές κατασκευές Αφοί Δημητρακούδα.
        </h1>
        <h2 className="text-xl text-center mt-2 text-gray-700">
          Φωτογραφίες από τις εργασίες μας.
        </h2>
        <p className="text-lg text-center my-2 text-gray-800">
          Κάντε click για zoom.
        </p>
      </header>
      <main className="flex mb-2 flex-wrap gap-2 max-w-5xl mx-auto font-manrope items-center justify-center">
        <Zoom>
          <Image
            src="/photos/1.jpg"
            width={250}
            height={250}
            objectFit="cover"
            alt="Constructions Image 1"
          />
        </Zoom>
        <Zoom>
          <Image
            src="/photos/2.jpg"
            width={250}
            height={250}
            objectFit="cover"
            alt="Constructions Image 2"
          />
        </Zoom>
        <Zoom>
          <Image
            src="/photos/3.jpg"
            width={250}
            height={250}
            objectFit="cover"
            alt="Constructions Image 3"
          />
        </Zoom>
        <Zoom>
          <Image
            src="/photos/4.jpg"
            width={250}
            height={250}
            objectFit="cover"
            alt="Constructions Image 4"
          />
        </Zoom>
        <Zoom>
          <Image
            src="/photos/5.jpg"
            width={250}
            height={250}
            objectFit="cover"
            alt="Constructions Image 5"
          />
        </Zoom>
        <Zoom>
          <Image
            src="/photos/6.jpg"
            width={250}
            height={250}
            objectFit="cover"
            alt="Constructions Image 6"
          />
        </Zoom>
        <Zoom>
          <Image
            src="/photos/7.jpg"
            width={250}
            height={250}
            objectFit="cover"
            alt="Constructions Image 7"
          />
        </Zoom>
        <Zoom>
          <Image
            src="/photos/8.jpg"
            width={250}
            height={250}
            objectFit="cover"
            alt="Constructions Image 8"
          />
        </Zoom>
        <Zoom>
          <Image
            src="/photos/9.jpg"
            width={250}
            height={250}
            objectFit="cover"
            alt="Constructions Image 9"
          />
        </Zoom>
        <Zoom>
          <Image
            src="/photos/10.jpg"
            width={250}
            height={250}
            objectFit="cover"
            alt="Constructions Image 10"
          />
        </Zoom>
        <Zoom>
          <Image
            src="/photos/11.jpg"
            width={250}
            height={250}
            objectFit="cover"
            alt="Constructions Image 11"
          />
        </Zoom>
      </main>
      <Footer />
    </>
  );
};

export default photos;
