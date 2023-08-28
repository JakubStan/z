import React, { useState, useEffect } from "react";
import Link from "next/link";

import Image from "next/image";

import Logo from "../../public/logo.png";

import Facebook from "../../public/facebook.png";
import Youtube from "../../public/yutube-logo.png";

import FacebookRed from "../../public/facebook-red.png";
import YoutubeRed from "../../public/yutube-logo-red.png";

import header_style from "../../src/app/scss/header.scss";

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

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundColor = scrolled ? "#110303" : "transparent";
  const borderBottom = scrolled ? "1px solid #fd0200" : "none";
  const transitionDuration = "0.8s";

  return (
    <header
      style={{
        backgroundColor: backgroundColor,
        borderBottom: borderBottom,
        transition: `background-color ${transitionDuration}, border-bottom ${transitionDuration}`,
      }}
    >
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon my-toggler"></span>
          </button>

          <Link className="navbar-brand" href="/">
            <Image className="logo" fill={true} src={Logo} />
          </Link>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  O NAS
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#advantages">
                  DLACZEGO WARTO
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#offer">
                  OFERTA
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  KONTAKT
                </a>
              </li>
            </ul>
          </div>
          <ImageHoverChange />
        </div>
      </nav>
    </header>
  );
};

export default Header;
