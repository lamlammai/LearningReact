import React, { useEffect, useState } from "react";
import InfiniteCarousel from "react-leaf-carousel";
import "./Slide.css";
import db from "../../FirebaseConfig";
function Slide() {
  const [slide, setSlide] = useState([]);
  useEffect(() => {
    db.collection("slide")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((element) => {
          setSlide(snapshot.docs.map((e) => e.data().img));
        });
      });
  }, []);
  if (slide?.length === 0) return null;
  return (
    <div className="Slide">
      <InfiniteCarousel
        dots={false}
        showSides={true}
        sideSize={0}
        slidesToScroll={3}
        slidesToShow={3}
      >
        {slide.map((item) => (
          <div>
            <img alt="" src={item} />
          </div>
        ))}
      </InfiniteCarousel>
    </div>
  );
}
export default Slide;
