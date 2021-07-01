import React from "react";
import Image from "next/image";
import styles from "../styles/Section.module.scss";
import Link from "next/link";

const HomePageMain = () => {
  return (
    <main>
      <section className="h-screen md:flex-row flex-col flex justify-between font-manrope relative">
        <div className="p-4 md:w-2/3 flex-2">
          <div className={`${styles.line} flex items-center justify-center`}>
            <Image
              src="/svg/house.svg"
              width={75}
              height={75}
              className="relative z-10"
              alt="Header icon"
            />
          </div>
          <p className="text-lg 2xl:text-2xl text-gray-900">
            <span className="text-yellow-main 2xl:text-4xl text-2xl font-bold">
              Ε
            </span>
            ίμαστε οικογενειακή επιχείρηση από την Ιερισσό Χαλκιδικής. Από το
            1984 κάνουμε εμπειροτεχνικές οικοδομικές εργασίες στο τρίτο πόδι
            Χαλκιδικής.
          </p>
          <p className="mt-2 2xl:text-2xl text-lg text-gray-800">
            Αναλαμβάνουμε απο σκεπές και πέργκολες μεχρι ανεγέρσεις οικοδομών.
            Κάνουμε εργασίες με μπετόν καθώς και καλούπια για εμφανή μπετά.
            Φτιάχνουμε πισίνες και περιφράξεις.
          </p>
          <div className={` ${styles.quote}`}>
            <blockquote>
              <p className="text-xl 2xl:text-3xl font-semibold text-gray-800 p-2">
                Η συνέπεια και η πολυετής εμπειρία μας είναι η εγγύηση μας προς
                τους πελάτες μας.
              </p>
            </blockquote>
          </div>
          <p className="mt-8 2xl:text-xl text-gray-800">
            Εργαζόμαστε κατόπιν συνεννόησης. Αν έχετε ερωτήσεις ή θελετε να
            συνεργαστούμε, επικοινωνήστε μαζί μας{" "}
            <Link href="/contact">
              <span className="text-yellow-main font-bold cursor-pointer">
                εδώ
              </span>
            </Link>
            .
          </p>
        </div>
        <div className="relative md:w-1/2 w-full shadow-xl">
          <Image
            src="/working.jpg"
            layout="fill"
            objectFit="cover"
            alt="photo of working man"
          />
        </div>
      </section>
      <section className="min-h-screen border-t border-gray-300 font-manrope pt-8">
        <h4 className="text-center text-2xl 2xl:text-3xl font-bold text-gray-800">
          Οικοδομικές εργασίες, περιφράξεις και άλλες φωτογραφίες από δουλειές
          που έχουμε κάνει.
        </h4>
        <p className="text-center text-lg my-2 text-gray-700">
          Για περισσότερα δείτε{" "}
          <Link href="/photos">
            <span className="font-bold text-yellow-main cursor-pointer">
              εδώ
            </span>
          </Link>
          .
        </p>
        <div className="flex min-h-screen relative mt-5 flex-wrap justify-evenly">
          <div className="relative w-full md:w-1/2">
            <Image
              src="/photos/8.jpg"
              layout="fill"
              objectFit="cover"
              alt="constructions picture"
            />
          </div>
          <div className="relative w-full md:w-1/2">
            <Image
              src="/photos/11.jpg"
              layout="fill"
              objectFit="cover"
              alt="constructions picture"
            />
          </div>
          <div className="relative w-full md:w-1/2">
            <Image
              src="/photos/2.jpg"
              layout="fill"
              objectFit="cover"
              alt="constructions picture"
            />
          </div>
          <div className="relative w-full md:w-1/2">
            <Image
              src="/photos/9.jpg"
              layout="fill"
              objectFit="cover"
              alt="constructions picture"
            />
          </div>
        </div>
      </section>
      <section className="font-manrope  py-4 relative ">
        <div className="md:w-1/2 mx-auto">
          <p className="text-xl text-center mt-5 text-gray-800">
            Οι οικοδομικές εργασίες είναι κάθε είδους τεχνικές υπηρεσίες
            διαφόρων ειδικοτήτων, που σκοπεύουν στην διαδοχική εκτέλεση όλων των
            απαραίτητων σταδίων με τελικό στόχο την ολοκλήρωση μίας οικοδομής.
          </p>
          <p className="text-xl text-center mt-10 text-gray-700">
            Μεμονωμένες οικοδομικές εργασίες αφορούν προβλήματα που
            δημιουργούνται με την πάροδο των χρόνων σε μια κατοικία.
          </p>
          <p className="text-xl text-center mt-10 text-yellow-main">
            Αναλαμβάνουμε κάθε είδους οικοδομική εργασία, με εγγύηση ποιοτικά
            αποτελέσματα.
          </p>
        </div>
        <Link href="/contact">
          <button className="text-2xl p-4 rounded-md md:ml-20 ml-12 mt-20 mb-10 hover:border bg-gray-800 text-yellow-50 shadow-lg hover:bg-gray-700 transition duration-200">
            επικοινωνήστε μαζί μας!
          </button>
        </Link>
        <div className="absolute md:block hidden right-0 bottom-0">
          <Image
            src="/svg/building.svg"
            height={350}
            width={350}
            alt="building SVG"
          />
        </div>
      </section>
    </main>
  );
};

export default HomePageMain;
