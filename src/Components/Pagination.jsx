import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Pagination = ({ totalPages, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {currentPage > 1 ? (
        <Link to={`/page/${currentPage - 1}`}>
          <Button variant="outlined">Previous</Button>
        </Link>
      ) : (
        <Button variant="outlined" disabled>
          Previous
        </Button>
      )}
      {pages.map((page) => (
        <Link
          key={page}
          to={`/page/${page}`}
          className={currentPage === page ? "active" : "notActive"}
        >
          <Button variant={currentPage === page ? "contained" : "outlined"}>
            {page}
          </Button>
        </Link>
      ))}
      {currentPage < totalPages ? (
        <Link to={`/page/${currentPage + 1}`}>
          <Button variant="outlined">Next</Button>
        </Link>
      ) : (
        <Button variant="outlined" disabled>
          Next
        </Button>
      )}
    </div>
  );
};

export default Pagination;
