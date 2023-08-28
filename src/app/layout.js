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
        <title>OFF ROAD ZAKOPANE</title>
        <meta
          name="description"
          content="Off Road w sercu Podhala. Nasza pasja  - Off Road łączy się z urokiem niezwykłego regionu Podhala i majestatycznych Tatr. Jesteśmy twoim przewodnikiem po dzikich ścieżkach, które ukazują piękno górskiej natury i góralskiej kultury. "
        />
        <meta
          name="keywords"
          content="Off Road, Zakopane, Podhale, jazda terenowa"
        />

        <meta property="og:image" content="./og-image.png" />
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
