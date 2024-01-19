import React from 'react';

export default function Footer({
    pageNumber,
    changePage,
    TotalResultsValue
}) {
    const totalPages = Math.ceil(TotalResultsValue / 20);
    const handleClick = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
          changePage(newPage);
        }
      };
  return (
    <div
      className=" h-14 bg-gray-700 
    text-white flex flex-col gap-1 mt-5
    justify-center items-center
     "
    >
      <div className="flex gap-20 justify-center items-center">
        <button className=" text-center hover:rounded-full hover:cursor-pointer hover:bg-red-500 w-[25px] h-[25px]" onClick={()=>handleClick(pageNumber-1)}>
          &larr;
        </button>
        <button className=" text-center hover:rounded-full hover:cursor-pointer hover:bg-red-500 w-[25px] h-[25px]" onClick={()=>handleClick(pageNumber+1)}>
          &rarr;
        </button>
      </div>
      <p className="">&#169; Reserved By Rohit Singh &#10083;</p>
    </div>
  );
}
