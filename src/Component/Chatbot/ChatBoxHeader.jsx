import React, { useState } from "react";

export const ChatBoxHeader = ({ title, icon, position }) => {
  const [showPopover, setShowPopover] = useState(false);
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-5 justify-between px-3 sm:px-8 py-2.5 w-full text-white bg-[#0085FE]">
      <div className="flex gap-3 max-w-[80%] sm:max-w-none">
        <img
          src={icon}
          alt="icon"
          className="object-cover shrink-0 rounded-full w-[70px] aspect-square hidden sm:block"
        />
        <div className="flex flex-col my-auto">
          <span className="self-start text-lg sm:text-2xl line-clamp-1 sm:line-clamp-none text-white">
            {title}
          </span>
          <span className="mt-2 text-base text-white line-clamp-1 sm:line-clamp-none">
            {position || "Graphic Designer"}
          </span>
        </div>
      </div>
      <button
        className="flex flex-col gap-y-1 relative"
        onClick={() => {
          setShowPopover(!showPopover);
        }}
      >
        <div className="bg-white rounded-full w-[11px] h-[11px] "></div>
        <div className="bg-white rounded-full w-[11px]  h-[11px] "></div>
        <div className="bg-white rounded-full w-[11px]  h-[11px] "></div>
        {showPopover && (
          <div className="absolute top-12 right-1 w-48 h-40 p-4 bg-gray-50 rounded-lg">
            <input
              type="search"
              className="bg-white flex px-2 rounded-md w-full h-10 border-2 border-gray-300 placeholder:text-gray-50000"
              placeholder="search..."
            />
          </div>
        )}
      </button>
    </div>
  );
};
