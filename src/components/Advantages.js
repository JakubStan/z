import React from "react";
import Image from "next/image";

import Camera from "../../public/camera.png";
import Heart from "../../public/heart.png";
import Highlander from "../../public/highlander.png";
import Mountain from "../../public/mountain.png";
import Relax from "../../public/relax.png";
import Memories from "../../public/memories.png";

function Advantages() {
  return (
    <div className="advantages" id="advantages">
      <div className="container">
        <h2>OFF ROAD ZAKOPANE</h2>
        <p className="sub-header">DLACZEGO WARTO</p>
        <p>
          Jesteśmy dumni, że możemy zaprezentować Wam krajobrazy, które skrywają
          nasze Tatry. W Off Road Zakopane, wiemy, że podróż to nie tylko
          odkrywanie nowych miejsc, ale także zbliżanie się do natury i kultury.
          Dołącz do nas w niezapomnianej wyprawie, która przeniesie cię w serce
          gór i góralskiej duszy.
        </p>

        <div className="items">
          <div className="item">
            <Image src={Heart} alt="Adrenalina i emocje" />

            <div className="specification">
              <h3>Adrenalina i emocje</h3>
              <p>
                Jazda off-road zapewnia dreszczyk emocji i adrenaliny, który
                ciężko znaleźć gdzie indziej. Pokonywanie trudnych terenów,
                wzniesień, błota czy kamienistych ścieżek dostarcza niesamowitej
                satysfakcji i ekscytacji.
              </p>
            </div>
          </div>

          <div className="item">
            <Image src={Mountain} alt="Bliskość z naturą" />

            <div className="specification">
              <h3>Bliskość z naturą</h3>
              <p>
                Off-road pozwala ci dotrzeć do miejsc, do których tradycyjne
                drogi nie prowadzą. To doskonała okazja, by odkryć dzikie
                zakątki natury, unikalne krajobrazy i dzikie zwierzęta.
              </p>
            </div>
          </div>

          <div className="item">
            <Image src={Highlander} alt="Unikalna kultura" />

            <div className="specification">
              <h3>Unikalna kultura</h3>
              <p>
                W niektórych regionach, takich jak Podhale, jazda off-road może
                być okazją do zanurzenia się w lokalnej kulturze i tradycjach.
                Możesz poznać historię danego regionu, zetknąć się z ludźmi i
                poznać ich sposób życia.
              </p>
            </div>
          </div>

          <div className="item">
            <Image src={Camera} alt="Widoki i fotografie" />

            <div className="specification">
              <h3>Widoki i fotografie</h3>
              <p>
                Off-road prowadzi do miejsc, z których roztacza się niesamowita
                panorama. To doskonała okazja, by uwiecznić te chwile na
                zdjęciach i podzielić się nimi z innymi.
              </p>
            </div>
          </div>

          <div className="item">
            <Image src={Relax} alt="Relaks i ucieczka od codzienności" />

            <div className="specification">
              <h3>Relaks i ucieczka od codzienności</h3>
              <p>
                Off-road to sposób na oderwanie się od zgiełku miejskiego życia.
                To chwila relaksu, w której możesz cieszyć się ciszą gór, szumu
                drzew i piękna przyrody.
              </p>
            </div>
          </div>

          <div className="item">
            <Image src={Memories} alt="Unikalne wspomnienia" />

            <div className="specification">
              <h3>Unikalne wspomnienia</h3>
              <p>
                Wyprawa off-road to niewątpliwie coś, o czym będziesz opowiadać
                przez lata. Tworzy się niezapomniane wspomnienia, które zostaną
                z tobą na zawsze.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
