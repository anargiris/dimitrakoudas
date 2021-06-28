import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="flex gap-3 p-2 justify-end text-gray-900">
      <ul>
        <Link href="/">
          <a className={styles.underline}>Αρχική</a>
        </Link>
      </ul>
      <ul>
        <Link href="/photos">
          <a className={styles.underline}>Φωτογραφίες</a>
        </Link>
      </ul>
      <ul>
        <Link href="/contact">
          <a className={styles.underline}>Επικοινωνία</a>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
