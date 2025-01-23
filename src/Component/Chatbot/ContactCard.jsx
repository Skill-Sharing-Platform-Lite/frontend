import React from "react";
import PropTypes from "prop-types";

export const ContactCard = ({ contact, isSelected, onSelect }) => {
  return (
    <button
      key={contact?.id}
      onClick={() => onSelect(contact.id)}
      className={`flex flex-col !w-full max-w-sm border-0 cursor-pointer p-0 rounded-[10px] ${
        isSelected
          ? "!bg-[#dbeeff] bg-opacity-[86] "
          : "bg-white hover:bg-[#dbeeff]/50"
      }`}
    >
      <div className="flex gap-5 justify-between pl-3 py-5 pr-3 sm:pr-10 sm:pl-5 rounded-xl w-full">
        <img
          src={contact.avatar}
          alt={`${contact.name}'s avatar`}
          className="object-cover shrink-0 my-auto rounded-full w-[50px] md:w-[70px] aspect-square"
        />
        <div className="hidden sm:flex flex-col w-full">
          <div className="flex gap-3 lg:gap-5 justify-between items-start w-full">
            <div className="flex flex-col self-start">
              <span className="text-start text-lg md:text-2xl line-clamp-1 xl:line-clamp-none">
                {contact.name}
              </span>
              <span className="mt-1 text-base lg:text-lg line-clamp-1 xl:line-clamp-none">
                {contact.lastMessage}
              </span>
            </div>
            {!isSelected && (
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9d74a90c8a95278cad53e7062770abbf2c12c6ddf1049896b720fcc48c7950b?placeholderIfAbsent=true&apiKey=d7aa41e166d24a01a8141c7c8f0568f0"
                alt="status"
                className="object-contain shrink-0 self-end mt-6 rounded-xl w-5 lg:w-[33px] aspect-square"
              />
            )}
          </div>
          <span className="self-start mt-1.5 text-base">{contact.time}</span>
        </div>
      </div>
    </button>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    lastMessage: PropTypes.string,
    time: PropTypes.string,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};
