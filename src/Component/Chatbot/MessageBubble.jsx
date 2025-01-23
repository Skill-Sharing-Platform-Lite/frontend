import React from "react";

export const MessageBubble = ({
  key,
  isCurrentUser,
  message,
  avatar,
  file,
  fileName,
}) => {
  return (
    <div
      key={key}
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
        className={`flex flex-col grow shrink-0 px-7 py-4 min-w-[100px] max-w-[350px] rounded-[34px] ${
          isCurrentUser ? "bg-[#00FF84]" : "bg-[#CDCDCD]"
        }`}
      >
        {file ? (
          <div className=" bg-white rounded-xl p-4">
            <a href={file} download={fileName}>
              {fileName}
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
            <p className="break-words whitespace-pre-wrap">{message}</p>
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
