import React from 'react';

const Pagination = ({ pages, handlePagination }) => {
  if (typeof pages !== 'number' || pages <= 0) {
    return null;
  }

  const createPages = () => {
    let pageNumbers = [];
    for (let i = 1; i <= pages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="pagination mt-6">
      {createPages().map((pageNumber) => (
        <button class="bg-[#466DF7] text-white px-2 py-2 rounded-md xsm:py-1 hover:to-blue-700 hover:cursor-pointer mr-2" key={pageNumber} onClick={() => handlePagination(pageNumber)}>
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
