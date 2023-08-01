import { Children, useState } from 'react';

export function SlideSwitcher({ children }) {
  const [currentPage, setCurrentPage] = useState(1);
  let childCount = Children.count(children);

  function nextPg() {
    setCurrentPage(currentPage === childCount ? 1 : currentPage + 1);
  }
  function lastPg() {
    setCurrentPage(currentPage === 1 ? childCount : currentPage - 1);
  }
  return (
    <>
      <div className="vh-90">{children}</div>

      <div
        className="container full w-100 vh-10 vh-md-20"
        style={{ zIndex: 9000, position: 'fixed', bottom: 0, left: 0, right: 0 }}
      >
        <div className="row-4 invert p-1 jc-around ai-center">
          <button className="button" onClick={lastPg}>
            back
          </button>
          <p>
            {currentPage}/{childCount}
          </p>
          <button className="button" onClick={nextPg}>
            next
          </button>
        </div>
      </div>
    </>
  );
}
