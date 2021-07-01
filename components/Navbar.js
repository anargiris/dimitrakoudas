import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="flex gap-3 p-2 justify-end text-gray-900">
      <ul className="flex gap-4">
        <li>
          <Link href="/">
            <a className={styles.underline}>Αρχική</a>
          </Link>
        </li>
        <li>
          <Link href="/photos">
            <a className={styles.underline}>Φωτογραφίες</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={styles.underline}>Επικοινωνία</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
