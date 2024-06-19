import styles from "./slides.module.scss";
// IMPORT JSON FILE THAT HAVE SLIDER IMAGES
import SliderData from "../../featuresApp.json";

// IMPORT MAIN IMAGE
import main_slider from "../../assets/images/illustration-dashboard.png";
import { useEffect, useState } from "react";

export default function Slides() {
  // STATE TO HOLD DATA
  const [sliderImages, setSlidesImage] = useState(SliderData);
  // CURRENT INDEX TRACKER
  const [currentIndex, setCurrentIndex] = useState(0);

  // FUNCTION USE EFFECT INTERVAL
  useEffect(() => {
    const interValimages = () => {
      setCurrentIndex((prevState) =>
        prevState === SliderData.length - 1 ? 0 : prevState + 1
      );
    };

    const intervalId = setInterval(interValimages, 3000);

    return () => clearInterval(intervalId);
  }, [SliderData.length]);

  return (
    <div className={styles.slidesCard}>
      <div className={styles.images}>
        <img
          className={styles.img_slide}
          src={sliderImages[currentIndex].feature_1}
          alt="main slider"
        />
      </div>
    </div>
  );
}
