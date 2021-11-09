import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import db from "../../FirebaseConfig";
import RadioItem from "../RadioItem/RadioItem";

function CarouselSongRadio() {
  const [song, setSongs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);
  useEffect(() => {
    db.collection("radio")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((element) => {
          setSongs(snapshot.docs.map((e) => e.data()));
        });
      });
  }, []);
  if (song?.length === 0) return null;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = song[0].list.slice(indexOfFirstPost, indexOfLastPost);

  //set page
  const paginate = (Page) => setCurrentPage(Page);
  return (
    <>
      <div className="CarouselTitle">
        <p className="CarouselText">{song[0].title}</p>
        <Pagination
          postPerPage={postPerPage}
          totalPost={song[0].list.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      <div className="Carousel">
      {currentPost.map((item, i) => (
          <RadioItem key={i} item={item} />
        ))}
      </div>
    </>
  );
}
export default CarouselSongRadio;
