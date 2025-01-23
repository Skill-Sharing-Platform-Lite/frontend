import React from "react";
import { Link } from "react-router-dom";

const ChatHeader = () => {
  return (
    <header className="bg-white text-black w-full px-6 sm:px-16 py-2 sm:py-9">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <svg
            width="49.04"
            height="49"
            viewBox="0 0 50 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[30px] h-[30px] sm:w-[49px] sm:h-[49px]"
          >
            <path
              d="M19.4866 26.5417L14.9771 26.5435C14.135 28.9214 11.865 30.625 9.19671 30.625C5.81129 30.625 3.06689 27.8828 3.06689 24.5C3.06689 21.1172 5.81129 18.375 9.19671 18.375C11.8657 18.375 14.1363 20.0795 14.9778 22.4585L19.4866 22.4583L26.5645 10.2083L33.0429 10.2085C33.8846 7.82949 36.155 6.125 38.8242 6.125C42.2095 6.125 44.954 8.86726 44.954 12.25C44.954 15.6327 42.2095 18.375 38.8242 18.375C36.1559 18.375 33.8858 16.6715 33.0438 14.2935L28.9225 14.2917L23.0256 24.498L28.9245 34.7083L33.0429 34.7085C33.8846 32.3296 36.155 30.625 38.8242 30.625C42.2095 30.625 44.954 33.3672 44.954 36.75C44.954 40.1328 42.2095 42.875 38.8242 42.875C36.1559 42.875 33.8858 41.1714 33.0438 38.7935L26.5645 38.7917L19.4866 26.5417ZM38.8242 34.7083C37.6957 34.7083 36.7809 35.6224 36.7809 36.75C36.7809 37.8776 37.6957 38.7917 38.8242 38.7917C39.9527 38.7917 40.8674 37.8776 40.8674 36.75C40.8674 35.6224 39.9527 34.7083 38.8242 34.7083ZM9.19671 22.4583C8.06823 22.4583 7.15344 23.3724 7.15344 24.5C7.15344 25.6276 8.06823 26.5417 9.19671 26.5417C10.3252 26.5417 11.24 25.6276 11.24 24.5C11.24 23.3724 10.3252 22.4583 9.19671 22.4583ZM38.8242 10.2083C37.6957 10.2083 36.7809 11.1224 36.7809 12.25C36.7809 13.3776 37.6957 14.2917 38.8242 14.2917C39.9527 14.2917 40.8674 13.3776 40.8674 12.25C40.8674 11.1224 39.9527 10.2083 38.8242 10.2083Z"
              fill="black"
            />
          </svg>
          <span className="text-2xl font-bold"></span>
        </div>
        <ul className="flex space-x-3 sm:space-x-[38px] mx-auto text-sm sm:text-[22px] leading-[26.63px]">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/match" className="hover:underline">
              Matches
            </Link>
          </li>
          <li>
            <Link to="/setting" className="hover:underline">
              Setting
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default ChatHeader;
