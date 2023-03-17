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
    console.log(arr)
    console.log(minPageValue)
    console.log(maxPageValue)
    console.log(page);
  }, [minPageValue, maxPageValue])

  const handleNextPage = (pageValue: number) => {
    setMinPageValue(pageValue - 1);
    setMaxPageValue(pageValue + 1);
    setPage(pageValue);
  }

  return (
    <div style={{display: "flex"}}>
      {pages.map(p =>
        <button
          key={p}
          onClick={() => handleNextPage(p)}
          style={{border:p === page ? '2px solid green' : '1px solid gray', padding: 10}}
        >
          {p}
        </button>
      )}
    </div>
  );
};

export default Pagination;
