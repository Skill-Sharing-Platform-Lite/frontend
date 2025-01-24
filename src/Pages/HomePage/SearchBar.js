// src/components/SearchBar.js
import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchBarRef = useRef(null);

  // Mock data for search
  const mockData = [
    { name: "React", link: "/react" },
    { name: "JavaScript", link: "/javascript" },
    { name: "CSS", link: "/css" },
    { name: "Tailwind", link: "/tailwind" },
    { name: "Python", link: "/python" },
    { name: "Java", link: "/java" },
  ];

  const handleSearch = () => {
    const filteredResults = mockData.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredResults);
    setShowResults(true); // Show results when search is clicked
  };

  // Hide results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={searchBarRef}
      className="relative mx-auto w-[50%] my-10 rounded-lg "
    >
      <div className="relative border border-gray-200 rounded-xl overflow-hidden">
        <input
          type="text"
          placeholder="What skill are you looking for?"
          className="p-3.5 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-[#00ff84]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="absolute right-0 top-1/2 transform px-4 h-full -translate-y-1/2 bg-[#00ff84] rounded-r-lg p-1 cursor-pointer"
          onClick={handleSearch}
        >
          <FaSearch className="text-white" size={20} />
        </button>
      </div>
      {showResults && results.length > 0 && (
        <ul className=" z-10 absolute mt-2 bg-white border border-gray-300 rounded-lg w-full">
          {results.map((result, index) => (
            <li
              key={index}
              className="py-2 px-4 hover:bg-gray-100 text-gray-700 cursor-pointer"
            >
              <a
                href={result.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {result.name}
              </a>
            </li>
          ))}
        </ul>
      )}
      {showResults && results.length === 0 && (
        <p className="absolute mt-2 bg-white border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-500">
          No results found.
        </p>
      )}
    </div>
  );
};

export default SearchBar;
