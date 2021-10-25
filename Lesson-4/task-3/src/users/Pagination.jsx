import React from 'react';

const Pagination = ({ prevPage, nextPage, totalItems, currentPage, itemsPerPage }) => {
  const maxPageNumber = Math.ceil(totalItems / itemsPerPage);

  const isPrevDisable = currentPage > 1;
  const isNextDisable = currentPage < maxPageNumber;

  return (
    <div className="pagination">
      <button className="btn" onClick={prevPage} disabled={!isPrevDisable}>
        {isPrevDisable && '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={nextPage} disabled={!isNextDisable}>
        {isNextDisable && '→'}
      </button>
    </div>
  );
};

export default Pagination;
