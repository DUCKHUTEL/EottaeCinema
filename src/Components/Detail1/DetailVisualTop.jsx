import React from "react";
import styles from "./DetailVisualTop.module.scss";
import OwlCarousel from "react-owl-carousel";
import "./DetailVisualTop.scss";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function DetailVisualTop({ movieData, getMovieData }) {
  React.useEffect(() => {
    getMovieData();
  }, [getMovieData]);
  const stllsURLArray = movieData.stlls;

  return (
    <div className={styles["top-visual-wrap"]}>
      <OwlCarousel
        className="owl-theme top-visual-box"
        items={1}
        loop
        margin={10}
        nav
        autoplay
        autoplayTimeout={3000}
        autoplaySpeed={500}
      >
        {stllsURLArray === undefined ||
          stllsURLArray.map((url) => {
            return (
              <div className="item">
                <img src={`${url}`} alt="poster" />
              </div>
            );
          })}
      </OwlCarousel>
    </div>
  );
}
