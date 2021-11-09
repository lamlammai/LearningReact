import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Pagination.css";
function Pagination({postPerPage,totalPost,currentPage, paginate}) {
  const totalPages = Math.ceil(totalPost/postPerPage);
  return (
    <>
      <div className="Pagination">
        <button
          className="PaginationIcon"
          disabled={currentPage <= 1}
          onClick={() => paginate(currentPage -1)}
        >
          <FontAwesomeIcon icon="chevron-left" />
        </button>
        <button
          className="PaginationIcon"
          disabled={currentPage  >= totalPages}
          onClick={() => paginate(currentPage +1)}
        >
          <FontAwesomeIcon icon="chevron-right" />
        </button>
      </div>
    </>
  );
}
export default Pagination;
