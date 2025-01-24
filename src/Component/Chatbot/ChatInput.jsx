import React, { useState, useRef } from "react";
import EmojiPicker from "./EmojiPicker";

export const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const fileInputRef = useRef(null); // Create a ref for the file input

  const maxFileSize = 5 * 1024 * 1024; // Maximum file size in bytes (5 MB)
  const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "application/pdf"]; // Allowed file types

  const handleSend = () => {
    if (message.trim() || file) {
      onSend(message.trim(), file);
      setMessage("");
      setFile(null);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (!ALLOWED_FILE_TYPES.includes(selectedFile.type)) {
        alert("Invalid file type. Please upload a JPEG, PNG, or PDF file.");
        return;
      }
      if (selectedFile.size > maxFileSize) {
        alert(
          "File size exceeds the 5 MB limit. Please upload a smaller file."
        );
        return;
      }
      setFile(selectedFile); // Store the file object if valid
    }
  };

  const handleFileButtonClick = () => {
    fileInputRef.current.click(); // Trigger the hidden file input
  };

  const handleEmojiSelect = (emoji) => {
    setMessage((prevMessage) => prevMessage + emoji);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
      setShowEmojiPicker(false);
    }
  };

  return (
    <div className="flex gap-5 justify-between px-2 sm:px-5 xl:px-9 py-5  w-full text-2xl rounded-xl bg-zinc-100">
      <div className="flex gap-2 sm:gap-5 xl:gap-10 my-auto w-full">
        <div className="flex gap-x-2 sm:gap-x-5 xl:gap-x-[30px] justify-between items-center">
          {/* file */}
          <input
            type="file"
            ref={fileInputRef} // Attach the ref to the file input
            onChange={handleFileChange}
            style={{ display: "none" }} // Hide the file input
            accept={ALLOWED_FILE_TYPES.join(",")}
          />
          <button
            className="group min-w-[20px] lg:w-[40px] lg:h-[38px] xl:w-[44px] xl:h-[42px] relative"
            onClick={handleFileButtonClick} // Attach the click handler here
            type="button"
          >
            <svg
              width="44"
              height="42"
              viewBox="0 0 44 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="!w-full !h-full"
            >
              <path
                d="M24.1389 5.25V13.125C24.1389 14.2123 25.0965 15.0938 26.2778 15.0938H34.8334M24.5059 5.25H13.4445C11.0819 5.25 9.16669 7.01288 9.16669 9.1875V32.8125C9.16669 34.9871 11.0819 36.75 13.4445 36.75H30.5556C32.9181 36.75 34.8334 34.9871 34.8334 32.8125V14.756C34.8334 13.7117 34.3827 12.7102 33.5804 11.9717L27.5307 6.40327C26.7285 5.66484 25.6404 5.25 24.5059 5.25Z"
                className="stroke-black group-hover:stroke-blue-500 transition-colors duration-200"
                strokeWidth="2"
              />
            </svg>
            {file != null && (
              <div className="absolute top-[2px] right-[2px] w-2 h-2 rounded-full bg-red-500"></div>
            )}
          </button>

          {/* record */}
          <button className="group min-w-[20px] lg:w-[38px] lg:h-[35px] xl:w-[40px] xl:h-[37px]">
            {/* // bg-white hover:bg-gray-100 focus:outline-2 focus:outline-offset-2 focus:outline-white active:bg-gray-200 ... */}
            <svg
              width="40"
              height="37"
              viewBox="0 0 40 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="!w-full !h-full"
            >
              <path
                d="M7.32983 17.2314C7.77288 20.0473 9.29714 22.6215 11.6237 24.483C13.9504 26.3446 16.9238 27.3691 20 27.3691M20 27.3691C23.0762 27.3691 26.0497 26.3446 28.3763 24.483C30.7029 22.6215 32.2271 20.0473 32.6702 17.2314M20 27.3691V33.3M20.0018 3.70001C18.5469 3.70001 17.1516 4.23462 16.1228 5.18624C15.0941 6.13785 14.5161 7.42851 14.5161 8.7743V15.54C14.5161 16.8858 15.0941 18.1765 16.1228 19.1281C17.1516 20.0797 18.5469 20.6143 20.0018 20.6143C21.4567 20.6143 22.852 20.0797 23.8808 19.1281C24.9096 18.1765 25.4875 16.8858 25.4875 15.54V8.7743C25.4875 7.42851 24.9096 6.13785 23.8808 5.18624C22.852 4.23462 21.4567 3.70001 20.0018 3.70001Z"
                className="stroke-black group-hover:stroke-blue-500 transition-colors duration-200"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          {/* Emoji button */}
          <button
            className="group min-w-[18px] lg:w-[38px] lg:h-[38px] xl:w-[42px] xl:h-[42px] relative"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            type="button"
          >
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="!w-full !h-full"
            >
              <path
                d="M31.3857 20.309L31.6543 19.3458L31.3857 20.309ZM32.1194 21.0479L33.0937 20.8226L32.1194 21.0479ZM22.4033 9.95036L22.75 9.01237L22.4033 9.95036ZM23.0389 10.7777L22.0498 10.925L23.0389 10.7777ZM35.6782 3.5C35.6782 2.94772 35.2305 2.5 34.6782 2.5C34.1259 2.5 33.6782 2.94772 33.6782 3.5H35.6782ZM33.6782 15.051C33.6782 15.6033 34.1259 16.051 34.6782 16.051C35.2305 16.051 35.6782 15.6033 35.6782 15.051H33.6782ZM29.0082 8.30115C28.4559 8.30115 28.0082 8.74886 28.0082 9.30115C28.0082 9.85343 28.4559 10.3011 29.0082 10.3011V8.30115ZM40.25 10.3011C40.8023 10.3011 41.25 9.85343 41.25 9.30115C41.25 8.74886 40.8023 8.30115 40.25 8.30115V10.3011ZM12.8319 27.2152C12.5447 26.7435 11.9295 26.5938 11.4577 26.881C10.986 27.1681 10.8363 27.7833 11.1235 28.2551L12.8319 27.2152ZM23.9012 28.2551C24.1884 27.7833 24.0387 27.1681 23.567 26.881C23.0952 26.5938 22.48 26.7435 22.1928 27.2152L23.9012 28.2551ZM12.6512 19.1494V18.1494C12.0989 18.1494 11.6512 18.5971 11.6512 19.1494H12.6512ZM12.8102 19.1494H13.8102C13.8102 18.5971 13.3625 18.1494 12.8102 18.1494V19.1494ZM22.2303 19.1494V18.1494C21.678 18.1494 21.2303 18.5971 21.2303 19.1494H22.2303ZM22.3717 19.1494H23.3717C23.3717 18.5971 22.924 18.1494 22.3717 18.1494V19.1494ZM12.8102 19.2794V20.2794C13.3625 20.2794 13.8102 19.8317 13.8102 19.2794H12.8102ZM12.6512 19.2794H11.6512C11.6512 19.8317 12.0989 20.2794 12.6512 20.2794V19.2794ZM22.3717 19.2794V20.2794C22.924 20.2794 23.3717 19.8317 23.3717 19.2794H22.3717ZM22.2303 19.2794H21.2303C21.2303 19.8317 21.678 20.2794 22.2303 20.2794V19.2794ZM22.75 9.01237C20.9982 8.36497 19.1078 8.01215 17.1381 8.01215V10.0121C18.8673 10.0121 20.5232 10.3216 22.0567 10.8884L22.75 9.01237ZM31.6543 19.3458C27.6939 18.2416 24.6551 14.8413 24.028 10.6304L22.0498 10.925C22.7925 15.9115 26.3916 19.9548 31.1172 21.2723L31.6543 19.3458ZM33.5262 24.6311C33.5262 23.3218 33.3767 22.0466 33.0937 20.8226L31.1451 21.2733C31.3942 22.3504 31.5262 23.4744 31.5262 24.6311H33.5262ZM17.1381 41.25C26.203 41.25 33.5262 33.7954 33.5262 24.6311H31.5262C31.5262 32.719 25.0705 39.25 17.1381 39.25V41.25ZM0.75 24.6311C0.75 33.7954 8.07323 41.25 17.1381 41.25V39.25C9.20576 39.25 2.75 32.719 2.75 24.6311H0.75ZM17.1381 8.01215C8.07323 8.01215 0.75 15.4668 0.75 24.6311H2.75C2.75 16.5432 9.20576 10.0121 17.1381 10.0121V8.01215ZM31.1172 21.2723C31.1266 21.2749 31.1346 21.2784 31.1409 21.2821C31.1472 21.2857 31.1508 21.2889 31.1523 21.2903C31.1536 21.2916 31.1526 21.2909 31.1506 21.2874C31.1484 21.2836 31.1463 21.2786 31.1451 21.2733L33.0937 20.8226C32.9166 20.0569 32.3193 19.5312 31.6543 19.3458L31.1172 21.2723ZM22.0567 10.8884C22.0476 10.885 22.0403 10.8807 22.0354 10.8769C22.0308 10.8734 22.0299 10.8717 22.0315 10.8738C22.0332 10.876 22.0368 10.8814 22.0406 10.8906C22.0444 10.8999 22.0478 10.9115 22.0498 10.925L24.028 10.6304C23.9276 9.95664 23.4929 9.28692 22.75 9.01237L22.0567 10.8884ZM33.6782 3.5V15.051H35.6782V3.5H33.6782ZM29.0082 10.3011H40.25V8.30115H29.0082V10.3011ZM17.5124 29.9159C15.5629 29.9159 13.8297 28.8545 12.8319 27.2152L11.1235 28.2551C12.4537 30.4405 14.8081 31.9159 17.5124 31.9159V29.9159ZM22.1928 27.2152C21.195 28.8545 19.4618 29.9159 17.5124 29.9159V31.9159C20.2166 31.9159 22.571 30.4405 23.9012 28.2551L22.1928 27.2152ZM12.6512 20.1494H12.8102V18.1494H12.6512V20.1494ZM22.2303 20.1494H22.3717V18.1494H22.2303V20.1494ZM11.8102 19.1494V19.2794H13.8102V19.1494H11.8102ZM12.8102 18.2794H12.6512V20.2794H12.8102V18.2794ZM13.6512 19.2794V19.1494H11.6512V19.2794H13.6512ZM21.3717 19.1494V19.2794H23.3717V19.1494H21.3717ZM22.3717 18.2794H22.2303V20.2794H22.3717V18.2794ZM23.2303 19.2794V19.1494H21.2303V19.2794H23.2303Z"
                className="fill-black group-hover:stroke-blue-500 transition-colors duration-200"
              />
            </svg>
            {/* Custom Emoji Picker */}
            {showEmojiPicker && (
              <div
                className="absolute top-[-205px] left-[-30px] sm:left-0 z-10 bg-gray-200 border-[1px] border-gray-300 px-3 w-[150px] sm:w-[200px] h-[200px] overflow-y-auto overflow-x-hidden scrollbar-hide flex items-start justify-center rounded-md"
                onClick={(e) => e.stopPropagation()}
              >
                <EmojiPicker onSelect={handleEmojiSelect} />
              </div>
            )}
          </button>
        </div>
        <input
          type="text"
          placeholder="Write a message..."
          className="flex w-full my-auto placeholder:text-black placeholder:text-sm placeholder:sm:text-base text-black bg-[#F1F1F1] px-2 focus:border-[#F1F1F1] focus-within:border-[#F1F1F1]"
          aria-label="Message input field"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {/* send button */}
        <button
          disabled={message !== "" || file !== null ? false : true}
          onClick={() => {
            handleSend();
            setShowEmojiPicker(false);
          }}
          className="group lg:w-[48px] lg:h-[50px] xl:w-[52px] xl:h-[54px] disabled:opacity-50"
        >
          {/* send svg */}

          <svg
            width="52"
            height="54"
            viewBox="0 0 52 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="!w-full !h-full !min-w-full"
          >
            <path
              d="M45.6525 6.59159L22.5472 30.5855M7.08733 18.5294L43.0668 5.56661C45.2825 4.76833 47.4083 6.97586 46.6395 9.27678L34.1569 46.64C33.3017 49.1997 29.8405 49.2699 28.8898 46.7468L23.1765 31.5847C22.8912 30.8275 22.3143 30.2284 21.5851 29.932L6.98449 23.999C4.55492 23.0118 4.6225 19.4174 7.08733 18.5294Z"
              className="stroke-black group-hover:stroke-blue-500 transition-colors duration-200"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};