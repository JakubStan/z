import React from "react";
import Image from "next/image";
import Driver from "../../public/driver.png";
import Mechanical from "../../public/mechanical.png";
import Jeeps from "../../public/jeeps.png";

export const About = () => {
  return (
    <div className="about container" id="about">
      <div className="hero__icons container mobile-dispaly">
        <div className="hero-icon box ">
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

      <div>
        <h2>O Nas</h2>
        <p className="sub-header">Off Road Zakopane</p>
        <p className="description">
          Witaj w sercu gór w Off Road Zakopane. Nasza pasja Off Road łączy się
          z urokiem niezwykłego regionu Podhala i majestatycznych Tatr. Jesteśmy
          twoim przewodnikiem po dzikich ścieżkach, które ukazują piękno
          górskiej natury i góralskiej kultury. Podhale, to miejsce pełne
          historii i legend, gdzie góralska dusza harmonizuje z dzikim
          krajobrazem. Nasza firma ma przyjemność zapraszać cię do odkrywania
          tajemniczych ścieżek, które prowadzą przez górskie pasma, skalne
          szczyty i dzikie doliny. To więcej niż tylko Off-Road, to powiew
          wiatru wśród stuletnich drzew i spektakularne widoki, które zapierają
          dech w piersiach. Nasi doświadczeni kierowcy to pasjonaci z którymi
          możesz czuć się całkowicie bezpiecznie, to mieszkańcy tych ziem,
          zakochani w każdym zakamarku Podhala. Znają każdą górską ścieżkę,
          każdy strumień i ukryty zakątek. To oni poprowadzą cię przez tereny,
          które współgrają z naszymi samochodami terenowymi. Odkryj góralską
          gościnność, ciepło i niezłomną ducha, podczas podróży bezdrożami
          Podhala. Podhala.
        </p>
      </div>
    </div>
  );
};

export default About;
