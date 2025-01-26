//import { FaFilter, FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "942.21px",
        height: "80px",
        padding: "0 16px",
        backgroundColor: "#f7f9fc",
        borderRadius: "8px",
        border: "1px solid #e0e0e0",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Filter Icon */}
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#007bff",
          borderRadius: "50%",
        }}
      >
        {/* <FaFilter color="#fff" size={18} /> */}
      </div>

      {/* Input Field */}
      <input
        type="text"
        placeholder="What skill are you looking for?"
        style={{
          flex: 1,
          marginLeft: "16px",
          marginRight: "16px",
          border: "none",
          outline: "none",
          fontSize: "16px",
          color: "#333",
          backgroundColor: "transparent",
        }}
      />

      {/* Search Button */}
      <button
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#00ff7f",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
        }}
      >
      {/* <FaSearch color="#fff" size={18} /> */}
      </button>
    </div>
  );
};

export default SearchBar;
