import React, { useEffect } from "react";
import { io } from "socket.io-client";

export const MessageBubble = ({
  isCurrentUser,
  message,
  avatar,
  file,
  fileName,
}) => {
  const socket = io("http://localhost:5000"); // Connect to the backend

  // Listen for new messages
  useEffect(() => {
    socket.on("receiveMessage", (newMessage) => {
      // Update the UI with the new message
      console.log("New message received:", newMessage);
    });

    return () => {
      socket.off("receiveMessage"); // Clean up on unmount
    };
  }, []);

  return (
    <div
      key={message.id}
      className={`flex gap-2.5 mb-[10px] sm:mb-[20px] lg:mb-[45px] ${
        isCurrentUser ? "self-end" : ""
      }`}
      style={{ maxWidth: "404px" }}
    >
      {!isCurrentUser && (
        <img
          src={
            !avatar || avatar === "" || avatar == null
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/92db7486d66107f215d23d8e6bb51246a98dc99141961b371c6b194c21f7d0d6?placeholderIfAbsent=true&apiKey=d7aa41e166d24a01a8141c7c8f0568f0"
              : avatar
          }
          alt="avatar"
          className="object-contain shrink-0 my-auto rounded-full"
          style={{ width: "45px", height: "45px", aspectRatio: "1" }}
        />
      )}
      <div
        className={`flex flex-col grow shrink-0 px-7 py-4 min-w-[100px] max-w-[100px] sm:max-w-[350px] rounded-[34px] ${
          isCurrentUser ? "bg-[#00FF84]" : "bg-[#CDCDCD]"
        }`}
      >
        {file ? (
          <div className="bg-white rounded-xl p-4">
            <a
              href={file}
              download={fileName}
              className="flex flex-col items-center justify-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                  <path
                    d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </g>
              </svg>
              <p>{fileName}</p>
            </a>
          </div>
        ) : message === "" ? (
          <>
            <div
              className={`flex shrink-0 ${
                isCurrentUser ? "bg-white" : "bg-zinc-600"
              }`}
              style={{ height: "9px" }}
            />
            <div
              className={`flex shrink-0 mt-1.5 ${
                isCurrentUser ? "bg-white" : "bg-zinc-600"
              }`}
              style={{ height: "9px" }}
            />
            <div
              className={`flex shrink-0 mt-1.5 ${
                isCurrentUser ? "bg-white" : "bg-zinc-600"
              }`}
              style={{ height: "9px", width: "143px" }}
            />
          </>
        ) : (
          <div>
            <p className="break-words whitespace-pre-wrap text-base md:text-lg">{message}</p>
          </div>
        )}
      </div>
      {isCurrentUser && (
        <img
          src={
            "https://cdn.builder.io/api/v1/image/assets/TEMP/92db7486d66107f215d23d8e6bb51246a98dc99141961b371c6b194c21f7d0d6?placeholderIfAbsent=true&apiKey=d7aa41e166d24a01a8141c7c8f0568f0"
          }
          alt="avatar"
          className="object-contain shrink-0 my-auto rounded-full"
          style={{ width: "45px", height: "45px", aspectRatio: "1" }}
        />
      )}
    </div>
  );
};