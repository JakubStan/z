"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextJsImage";
import photos from "./photos";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Clock from "../../public/clock.png";
import Zlotyk from "../../public/zloty.png";
import Route from "../../public/route.png";

export const Offer = () => {
  const [index, setIndex] = useState(-1);
  return (
    <div className="offer" id="offer">
      <div className="container">
        <h2>WYKUP JAZDĘ!</h2>
        <p className="sub-header">Czekamy na Ciebie!</p>

        <p className="description">
          Gotowy na niezapomnianą przygodę? Wybierz się z nami na ekscytującą
          wycieczkę off-road po malowniczych szlakach Podhala i okolicach Tatr!
          Dołącz do nas i stwórz niezapomniane wspomnienia na górskich szlakach.
          Rezerwuj swoje miejsce już dziś!
        </p>

        <div className="items">
          <div className="item">
            <Image src={Clock} alt="Czas trfanai wycieczki" />
            <h5>Czas wycieczki - 2h</h5>
            <p>
              Zapewniamy transfer - przyjedziemy po Ciebię w wskazne miejsce i
              odwieziemy z powrotem. Oferujemy dwa niezapomniane postoje.
              Pierwszy z nich to szansa na uwiecznienie chwil przyrody na
              zdjęciach pamiątkowych. To moment, w którym możesz zatrzymać czas
              i zachwycić się otaczającym pięknem. Drugim przystankiem jest
              wizyta na autentycznej bacówce. Tutaj poczujesz ducha góralskiej
              kultury i historii regionu i skosztujesz regionalnych przysmaków i
              doświadcz atmosfery, która tylko tu istnieje.
            </p>
          </div>

          <div className="item">
            <Image src={Route} alt="Trasy" />
            <h5>Trasy</h5>
            <p>
              Nasze off-roadowe wyprawy skupiają się na przepięknych terenach
              wokół Zakopanego, Poronina i Białego Dunajca. Trasy, które
              wyznaczamy, to mieszanka urozmaiconych terenów – od malowniczych
              dolin i pagórków po wyzwanie skalistych ścieżek. Chcemy, aby twoja
              przygoda była dokładnie taka, jakiej oczekujesz. Dlatego też na
              życzenie klienta jesteśmy gotowi dostosować trasę do twoich
              preferencji.
            </p>
          </div>

          <div className="item">
            <Image src={Zlotyk} alt="Koszr wycieczki" />
            <h5>Koszr wycieczki</h5>
            <ul>
              <li>2-4 osób: 400pln</li>
              <li>5 osób: 500pln</li>
              <li>6 osób: 550pln</li>
            </ul>
          </div>
        </div>

        <div className="album">
          <PhotoAlbum
            photos={photos}
            layout="columns"
            targetColumnHeight={250}
            onClick={({ index }) => setIndex(index)}
          />

          <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
