"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Driver from "../../public/driver.png";
import Mechanical from "../../public/mechanical.png";
import Jeeps from "../../public/jeeps.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content container">
        <h1>OFF ROAD ZAKOPANE</h1>
        <p>Zastanawiałeś się, jak wygląda prawdziwy Off Road?</p>
        <p>
          Chciał byś poczuć niezapomniane wrażenia w pięknych Podhalańskich
          plenerach?
        </p>
        <div className="hero__buttons">
          <a href="#offer" className="btn btn--red">
            WYKUP OFF ROAD
          </a>
          <a href="#contact" className="btn btn--white">
            KONTAKT
          </a>
        </div>
      </div>

      <div className="mobile">
        <div className="hero__icons  container">
          <div className="hero-icon box">
            <Image src={Driver} alt="Kierowcy" />
            <h3>Doświadczeni kierowcy</h3>
            <p>
              Nasi kierowcy to doświadczeni pasjonaci z którymi możesz czuć się
              całkowicie bezpiecznie
            </p>
          </div>
          <div className="hero-icon box">
            <Image src={Mechanical} alt="Sprawne auta" />
            <h3>Sprawne auta</h3>
            <p>
              Nasze pojazdy są całkowicie sprawne mechanicznie i zapewniaja
              całkowite bezpieczeństwo.
            </p>
          </div>
          <div className="hero-icon box">
            <Image src={Jeeps} alt="Wybrane trasy" />
            <h3>Wybrane trasy</h3>
            <p>
              Trasy są wybrane i zrużnicowane oraz dobrze znany naszym kierowcą.
              Zapewniaj niezapomniane wrazenia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
