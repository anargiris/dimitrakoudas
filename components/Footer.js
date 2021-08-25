import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="font-manrope relative overflow-x-auto text-yellow-50"
      style={{ backgroundColor: "#313131" }}
    >
      <div className="flex gap-20">
        <div className="p-5">
          <p className="text-lg font-bold mb-2">
            Οικοδομικές εργασίες Αφοί Δημητρακούδα
          </p>
          <div className="flex mb-1">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4.75 6.75L9.25 4.75V17.25L4.75 19.25V6.75Z"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M14.75 6.75L19.25 4.75V17.25L14.75 19.25V6.75Z"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M14.75 6.75L9.25 4.75V17.25L14.75 19.25V6.75Z"
              ></path>
            </svg>

            <p>Ιερισσός Χαλκιδικής, Τ.Κ 63075</p>
          </div>
          <div className="flex mb-1">
            <svg width="24" height="24" fill="" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"
              />
            </svg>
            <p>6972 292 141, 6946 463 124</p>
          </div>
          <div className="flex">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5.5 6.5L12 12.25L18.5 6.5"
              ></path>
            </svg>
            <p>
              <a href="mailto:afoidimitrakouda@gmail.com">
                afoidimitrakouda@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="p-5">
          <Link href="/photos">
            <a className="font-bold">GALLERY</a>
          </Link>
        </div>
        <div className="p-5">
          <Link href="/contact">
            <a className="font-bold">ΕΠΙΚΟΙΝΩΝΙΑ</a>
          </Link>
        </div>
      </div>
      <div className="md:absolute md:p-0 p-5 md:right-0 md:left-auto left-0 bottom-0  md:mr-20 ">
        <p> &copy; Copyright 2021, Οικοδομικές κατασκευές Αφοί Δημητρακούδα</p>
        <p className="text-xs">
          Developed by{" "}
          <Link href="https://stylidis.io">
            <a>
              <span className="cursor-pointer hover:text-yellow-500 transition duration-200">
                Anargyros Stylidis
              </span>
            </a>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
