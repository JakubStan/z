import React, { useState } from "react";

import Logo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";

import { BsGeoAlt } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

import Facebook from "../../public/facebook.png";
import Youtube from "../../public/yutube-logo.png";

import FacebookRed from "../../public/facebook-red.png";
import YoutubeRed from "../../public/yutube-logo-red.png";

const Footer = () => {
  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };

  const ImageHoverChange = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleMouseEnter = (imageId) => {
      setHoveredImage(imageId);
    };

    const handleMouseLeave = () => {
      setHoveredImage(null);
    };

    return (
      <div className="socjal-icons">
        <Link href="https://www.facebook.com/profile.php?id=61550623141302">
          <Image
            src={hoveredImage === 1 ? FacebookRed : Facebook}
            alt="Opis obrazka 1"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          />
        </Link>
        <Link href="https://www.youtube.com/channel/UCLUqzPFQhKpIGqurrCNd4kw">
          <Image
            src={hoveredImage === 2 ? YoutubeRed : Youtube}
            alt="Opis obrazka 2"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          />
        </Link>
      </div>
    );
  };

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link href="/">
              <Image className="logo" fill={true} src={Logo} />
            </Link>

            <ul>
              <li>
                <BsPhone />
                <Callto phone="+48 577 293 539">+48 577 293 539</Callto>
              </li>

              <li>
                <BsEnvelope />
                <p>off.road.zakopane.info@gmail.com</p>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>OFF ROAD ZAKOPANE</h5>
            <ul>
              <li>
                <a href="#about">O NAS</a>
              </li>
              <li>
                <a href="#advantages">DLACZEGO WARTO</a>
              </li>
              <li>
                <a href="#offer">OFERTA</a>
              </li>
              <li>
                <a href="#contact">KONTAKT</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>ZOBACZ</h5>
            <ul>
              <li>
                <Link href="https://tylka-extrem-hobby.pl/">
                  tylka-extrem-hobby.pl
                </Link>
              </li>
              <li>
                <Link href="https://jstankiewicz.pl/">jstankiewicz.pl</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="socjal-icons">
          <ImageHoverChange />
        </div>

        <div className="footer-bootom">
          <div className="row">
            <div className="col-md-6">
              <h6>OFF ROAD ZAKOPANE &copy; 2023 </h6>
            </div>
            <div className="col-md-6">
              <h6>
                WYKONANIE
                <Link href="https://jstankiewicz.pl/">
                  &nbsp;jstankiewicz.pl
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
