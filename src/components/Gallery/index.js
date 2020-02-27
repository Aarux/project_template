import React from "react";
import { Gallery, GalleryImage } from "../../styles/GlobalStyle";
import g1 from "../../assets/G1.jpg";
import g2 from "../../assets/G2.jpg";
import g3 from "../../assets/G3.jpg";

const GalleryPage = () => (
  <Gallery>
    <h1>Gallery</h1>
    <p>Galleri sida med bilder från guilden {"(T.ex. raid kills)"}</p>
    <GalleryImage>
      <img src={g1} alt="" />
      <img src={g2} alt="" />
      <img src={g3} alt="" />
    </GalleryImage>
  </Gallery>
);

export default GalleryPage;
