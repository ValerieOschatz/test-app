import { useState, useEffect } from "react";
import type { PaginationProps } from "../utils/types/props";

const Pagination: React.FC<PaginationProps> = (props) => {
  const { setPage, page } = props;
  const [minPageValue, setMinPageValue] = useState(1);
  const [maxPageValue, setMaxPageValue] = useState(3);
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const arr = [];
    for (let i = minPageValue; i <= maxPageValue; i++) {
      arr.push(i);
    }
    setPages(arr);
  }, [minPageValue, maxPageValue])

  const handleChangePage = (pageValue: number) => {
    if (pageValue > 1 && pageValue < 10) {
      setMinPageValue(pageValue - 1);
      setMaxPageValue(pageValue + 1);
    }
    setPage(pageValue);
  }

  const handleFirstPage = () => {
    setMinPageValue(1);
    setMaxPageValue(3);
    setPage(1);
  }

  const handleLastPage = () => {
    setMinPageValue(8);
    setMaxPageValue(10);
    setPage(10);
  }

  return (
    <div style={{display: "flex"}}>
      <button onClick={handleFirstPage}>{'<<'}</button>
      {pages.map(p =>
        <button
          key={p}
          onClick={() => handleChangePage(p)}
          style={{border:p === page ? '2px solid green' : '1px solid gray', padding: 10}}
        >
          {p}
        </button>
      )}
      <button onClick={handleLastPage}>{'>>'}</button>
    </div>
  );
};

export default Pagination;
