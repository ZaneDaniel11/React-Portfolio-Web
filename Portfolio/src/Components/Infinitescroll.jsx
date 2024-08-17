import React from "react";

export default function StockTicker() {
  return (
    <div className="bg-[#EBC78D] w-full flex items-center justify-center m-0">
      <div className="stock-ticker flex gap-[20px] h-[50px] md:h-[70px] lg:h-[100px] overflow-hidden w-full border-black text-[15px] md:text-[25px] lg:text-[40px] select-none m-0 border-y-4">
        <ul className="list-none flex-shrink-0 min-w-full flex justify-between items-center gap-[20px] lg:gap-[40px] animate-scroll m-0 font-kreon">
          {Array(window.innerWidth >= 768 ? 7 : 6)
            .fill("HIRE ME")
            .map((text, index) => (
              <li key={index} className="flex items-center">
                <span className="font-bold">{text}</span>
              </li>
            ))}
        </ul>
        <ul
          aria-hidden="true"
          className="list-none flex-shrink-0 min-w-full flex justify-between items-center gap-[20px] lg:gap-[40px] animate-scroll m-0 font-kreon font-bold"
        >
          {Array(window.innerWidth >= 768 ? 7 : 6)
            .fill("HIRE ME")
            .map((text, index) => (
              <li key={index} className="flex items-center">
                <span className="font-bold">{text}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
