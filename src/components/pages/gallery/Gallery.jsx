import { useEffect } from "react";
import "./Gallery.css";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="gallery">
      <h1>page Gallery</h1>
    </section>
  );
};

export default Gallery;
