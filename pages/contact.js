import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";

const contact = () => {
  return (
    <>
      <Head>
        <title>
          Oικοδομικές κατασκευές | Αφοί Δημητρακούδα | Στοιχεία Επικοινωνίας
        </title>
        <meta
          name="title"
          content="
          Oικοδομικές κατασκευές | Αφοί Δημητρακούδα | Στοιχεία Επικοινωνίας"
        />
        <meta
          name="description"
          content="Οικοδομικές κατασκευές και εργασίες με βάση την Ιερισσό Χαλκιδικής. Ανέγερση οικοδομής, σκεπές, πέργκολες, περιφράξεις και άλλα."
        />
        <meta property="og:url" content="https://dimitrakoudas.gr/contact" />
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

        <link rel="canonical" href="https://dimitrakoudas.gr/contact" />

        <meta name="robots" content="index, follow" />
      </Head>
      <header className="font-manrope">
        <Navbar />
      </header>
      <main className="flex md:flex-row flex-col text-center md:text-base max-w-5xl mt-5 mx-auto justify-between font-manrope">
        <div className="md:w-1/2 ">
          <h1 className="text-3xl font-bold text-yellow-main">
            Οικοδομικές κατασκευές Αφοί Δημητρακούδα - Επικοινωνία
          </h1>
          <p className="mt-4 text-xl text-gray-900">
            Επικοινωνήστε μαζί μας. Κάνουμε οικοδομικές εργασίες σε όλο το τρίτο
            πόδι Χαλκιδικής. Συνεργαζόμαστε κατόπιν συννενόησης.
          </p>
          <p className="text-lg italic text-gray-700 mt-2">
            Ιερισσός - Νέα Ρόδα - Ουρανούπολη - Στρατώνι - Γομάτι - Άγιο Όρος
          </p>
        </div>
        <div className="flex flex-col gap-5 text-xl mt-4">
          <p className="text-gray-900">
            <span className="text-yellow-main font-bold">Mail:</span>
            <br />
            <a href="mailto:afoidimitrakouda@gmail.com">
              afoidimitrakouda@gmail.com
            </a>
          </p>
          <p className="text-gray-800">
            <span className="text-yellow-main font-bold">Τηλέφωνα:</span>
            <br />
            6972 292 141, 6946 463 124
          </p>
          <p className="text-gray-700">Ιερισσός Χαλκιδικής.</p>
        </div>
      </main>
      <section className="mt-10 md:flex hidden  md:flex-row flex-col items-center justify-around">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d602.3954676015894!2d23.871867829188844!3d40.39368402010909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIzJzM3LjMiTiAyM8KwNTInMjAuNyJF!5e1!3m2!1sen!2sgr!4v1624895033049!5m2!1sen!2sgr"
          width="50%"
          height="450"
          loading="lazy"
          title="Google maps 1"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d602.3393103626724!2d23.872093829188845!3d40.39996102001381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIzJzU5LjkiTiAyM8KwNTInMjEuNSJF!5e1!3m2!1sen!2sgr!4v1624895089805!5m2!1sen!2sgr"
          width="50%"
          height="450"
          loading="lazy"
          title="Google maps 2"
        ></iframe>
      </section>
      <section className="mt-10 md:hidden flex md:flex-row flex-col items-center justify-around">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d602.3954676015894!2d23.871867829188844!3d40.39368402010909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIzJzM3LjMiTiAyM8KwNTInMjAuNyJF!5e1!3m2!1sen!2sgr!4v1624895033049!5m2!1sen!2sgr"
          width="100%"
          height="450"
          loading="lazy"
          title="Google maps 1"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d602.3393103626724!2d23.872093829188845!3d40.39996102001381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIzJzU5LjkiTiAyM8KwNTInMjEuNSJF!5e1!3m2!1sen!2sgr!4v1624895089805!5m2!1sen!2sgr"
          width="100%"
          height="450"
          loading="lazy"
          title="Google maps 2"
        ></iframe>
      </section>
      <section className="h-96">
        <h2 className="p-20 text-center text-xl text-gray-800 font-manrope">
          Οικοδομικές εργασίες, οικοδομικές κατασκευές, περιφράξεις, πέργκολες,
          εργασίες με μπετόν, ανεγέρσεις οικοδομών, Ιερισσός Χαλκιδικής, Νέα
          Ρόδα, Ουρανούπολη, Στρατώνι, Άγιο Όρος, Γομάτι, τρίτο πόδι Χαλκιδικής.
          Αφοί Δημητρακούδα.
        </h2>
        <p className="text-gray-700 text-center font-manrope">
          Για επεξεργασία ξύλου καστανιάς δείτε{" "}
          <Link href="https://ksiliaefthimiou.gr">
            <a rel="noreferrer">
              <span className="font-bold text-black">έδω</span>
            </a>
          </Link>
          .
        </p>
      </section>
      <Footer />
    </>
  );
};

export default contact;
