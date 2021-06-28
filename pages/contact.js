import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
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
      <header className="font-manrope">
        <Navbar />
      </header>
      <main className="flex md:flex-row flex-col-reverse text-center md:text-base max-w-5xl mt-5 mx-auto justify-between font-manrope">
        <div className="md:w-1/2 md:mt-0 mt-10">
          <h1 className="text-3xl font-bold text-yellow-main">
            Οικοδομικές εργασίες - Επικοινωνία
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
          <p className="text-gray-900">Mail:</p>
          <p className="text-gray-800">
            Τηλέφωνα:
            <br />
            6972 292 141, 6946 463 124
          </p>
          <p className="text-gray-700">Ιερισσός Χαλκιδικής.</p>
        </div>
      </main>
      <section className="mt-10 flex items-center justify-around">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d602.3954676015894!2d23.871867829188844!3d40.39368402010909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIzJzM3LjMiTiAyM8KwNTInMjAuNyJF!5e1!3m2!1sen!2sgr!4v1624895033049!5m2!1sen!2sgr"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d602.3393103626724!2d23.872093829188845!3d40.39996102001381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIzJzU5LjkiTiAyM8KwNTInMjEuNSJF!5e1!3m2!1sen!2sgr!4v1624895089805!5m2!1sen!2sgr"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </section>
      <Footer />
    </>
  );
};

export default contact;