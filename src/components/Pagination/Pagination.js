import React from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../../redux/filters/filterSlice";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

export const Pagination = () => {
  const dispatch = useDispatch();

  const handlePageClick = (e) => {
    dispatch(setPage(e.selected + 1));
  };
  return (
    <ReactPaginate
      className={styles.root}
      activeLinkClassName={styles.active}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={handlePageClick}
      pageCount={6}
    />
  );
};
