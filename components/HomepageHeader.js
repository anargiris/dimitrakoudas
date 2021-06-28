import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/Header.module.css";

const HomepageHeader = () => {
  return (
    <header className={`h-screen font-manrope ${styles.heroImage}`}>
      <Navbar />
      <h1
        className={`text-5xl text-center font-bold  text-indigo-secondary ${styles.title}`}
      >
        ΟΙΚΟΔΟΜΙΚΕΣ ΚΑΤΑΣΚΕΥΕΣ
      </h1>
      <h2 className="text-2xl text-center text-yellow-main mt-1">
        ΑΦΟΙ ΔΗΜΗΤΡΑΚΟΥΔΑ, ΙΕΡΙΣΣΟΣ ΧΑΛΚΙΔΙΚΗΣ
      </h2>
      <div className="flex max-w-2xl mx-auto mt-10 justify-between">
        <h3 className="text-indigo-secondary text-xl">
          -Ανέγερση οικοδομής <br />
          -Εργασίες με μπετό <br /> -Σκεπές <br /> -Πέργκολες <br /> -Εμφανή
          μπετά <br /> -Περιφράξεις
        </h3>
        <p className="italic text-2xl text-yellow-secondary ">Από το 1984. </p>
      </div>
    </header>
  );
};

export default HomepageHeader;
