import { useEffect, useState } from "react";

import "./styles.css";
import IMG1 from "../images/les-img-1.jpeg";
import IMG2 from "../images/les-img-2.jpeg";
import IMG3 from "../images/les-img-3.jpeg";
import IMG4 from "../images/les-img-4.jpeg";

const gallery = [IMG1, IMG2, IMG3, IMG4];

export const Gallery = () => {
  const [galleryId, setGalleryId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryId((prevId) => {
        if (prevId === gallery.length - 1) return 0;

        return prevId + 1;
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="gallery">
      <img
        src={gallery[galleryId]}
        alt="Birthday session"
        className="gallery-picture"
      />
    </div>
  );
};
