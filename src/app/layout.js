"use client";

import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";
import { useEffect } from "react";
import {
  Hero,
  Header,
  About,
  Advantages,
  Footer,
  Contact,
  Offer,
} from "../components";

import favicon from "./favicon.ico";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon} />
      </head>
      <body>
        <Header />

        <main>
          <Hero />
          <About />
          <Advantages />
          <Offer />
          <Contact />
        </main>

        <Footer />
      </body>
    </html>
  );
}
