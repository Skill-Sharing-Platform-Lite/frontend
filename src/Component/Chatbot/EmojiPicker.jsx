import React, { useState } from "react";

const emojiData = [
  { emoji: "😀", tags: ["happy", "smile", "joy"] },
  { emoji: "😍", tags: ["love", "heart", "crush"] },
  { emoji: "😂", tags: ["laugh", "funny", "tears"] },
  { emoji: "😎", tags: ["cool", "sunglasses", "swag"] },
  { emoji: "🥳", tags: ["party", "celebrate", "fun"] },
  { emoji: "😡", tags: ["angry", "mad", "frustrated"] },
  { emoji: "😴", tags: ["sleepy", "tired", "bored"] },
  { emoji: "🤔", tags: ["thinking", "confused", "ponder"] },
  { emoji: "🤯", tags: ["mindblown", "shocked", "amazed"] },
  { emoji: "🥶", tags: ["cold", "freezing", "chilly"] },
  { emoji: "🤩", tags: ["excited", "starstruck", "amazed"] },
  { emoji: "🥺", tags: ["pleading", "sad", "emotional"] },
  { emoji: "🤗", tags: ["hug", "happy", "friendly"] },
  { emoji: "🤢", tags: ["sick", "disgusted", "nauseous"] },
  { emoji: "🤠", tags: ["cowboy", "yeehaw", "western"] },
  { emoji: "🥰", tags: ["love", "affection", "happy"] },
  { emoji: "🤪", tags: ["crazy", "silly", "goofy"] },
  { emoji: "😇", tags: ["angel", "innocent", "holy"] },
  { emoji: "🤓", tags: ["nerd", "geek", "smart"] },
  { emoji: "😷", tags: ["sick", "mask", "health"] },
];

const EmojiPicker = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter emojis based on search term and tags
  const filteredEmojis = emojiData.filter(({ tags }) =>
    tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="flex flex-col items-start justify-start py-2">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search emojis..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-1 mb-2 rounded-md placeholder:text-sm text-sm h-6 px-1"
      />

      {/* Emoji list */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-1 cursor-pointer text-[24px]">
        {filteredEmojis.map(({ emoji }, index) => (
          <span
            key={index}
            onClick={() => onSelect(emoji)}
            className="col-span-1"
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EmojiPicker;
