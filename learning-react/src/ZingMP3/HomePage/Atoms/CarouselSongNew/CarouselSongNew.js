import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import CarouselItem from "../CarouselItem/CarouselItem";
// eslint-disable-next-line
import db from "../../FirebaseConfig";
import {
  fetchNewSong,
  selectSongData,
  setPage,
  selectSongPage,
} from "../../../../Redux/Song/songSlice";
import { useDispatch, useSelector } from "react-redux";

function CarouselSongNew() {
  const dispatch = useDispatch();
  const song = useSelector(selectSongData);
  // const [song, setSongs] = useState([]);
  const currentPage = useSelector(selectSongPage);
  const [postPerPage] = useState(5);
  useEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    () => {
      // db.collection("His")
      //   .get()
      //   .then((snapshot) => {
      //     setSongs(snapshot.docs.map(e => e.data()))
      //   });
      dispatch(fetchNewSong());
    },
    [dispatch]
  );
  if (song.length === 0) return null;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = song[0].list.slice(indexOfFirstPost, indexOfLastPost);

  //set page
  const paginate = (page) => dispatch(setPage(page));
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
          <CarouselItem key={i} item={item} />
        ))}
      </div>
    </>
  );
}
export default CarouselSongNew;
