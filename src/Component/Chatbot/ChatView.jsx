import React, { useState, useEffect, useRef } from "react";
import { ContactCard } from "./ContactCard";
import { ChatBoxHeader } from "./ChatBoxHeader";
import { MessageBubble } from "./MessageBubble";
import { ChatInput } from "./ChatInput";
import ChatHeader from "./ChatHeader";
const contacts = [
  {
    id: "1",
    name: "YIHUN M",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c17abee978bdde84a5a015b77d76c7c39bccbc90738e4d9d8bf3226c094eb03c?placeholderIfAbsent=true&apiKey=d7aa41e166d24a01a8141c7c8f0568f0",
    lastMessage: "Assignment sira",
    time: "10:30",
    isActive: true,
    isSelected: true,
    position: "Graphic Designer",
  },
  {
    id: "2",
    name: "Mikias ",
    avatar: "https://avatars.githubusercontent.com/u/192638712?v=4",
    lastMessage: "Assignment sira",
    time: "12:30",
    isActive: true,
    isRead: true,
    position: "Graphic Designer",
  },
  {
    id: "3",
    name: "Michael",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c17abee978bdde84a5a015b77d76c7c39bccbc90738e4d9d8bf3226c094eb03c?placeholderIfAbsent=true&apiKey=d7aa41e166d24a01a8141c7c8f0568f0",
    lastMessage: "Assignment sira",
    time: "1:30",
    isActive: true,
    isRead: false,
    position: "Software Developer",
  },
  {
    id: "4",
    name: "Meraol F",
    avatar:
      "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastMessage: "Assignment sira",
    time: "11:30",
    isActive: true,
    isRead: false,
  },
  {
    id: "5",
    name: "Yohanna Y",
    avatar:
      "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastMessage: "Assignment sira",
    time: "11:30",
    isActive: true,
    isRead: false,
  },
  {
    id: "6",
    name: "Mike T",
    avatar:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg",
    lastMessage: "Assignment sira",
    time: "11:30",
    isActive: true,
    isRead: false,
  },
];

export const ChatView = () => {
  const [selectedContact, setSelectedContact] = useState(contacts[0].id);
  const [messages, setMessages] = useState({});

  // Initialize messages with empty arrays for each contact ID
  useEffect(() => {
    const initialMessages = {};
    contacts.forEach((contact) => {
      initialMessages[contact.id] = []; // Create an entry for each contact ID with an empty array
    });
    setMessages(initialMessages);
  }, []);

  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem("chatMessages");
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      }
    } catch (error) {
      // console.error("Failed to load messages from localStorage:", error);
      setMessages([]);
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    } catch (error) {
      // console.error("Failed to save messages to localStorage:", error);
    }
  }, [messages]);

  // Function to add a new message
  const handleSendMessage = (newMessage, file) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [selectedContact]: [
        ...(prevMessages[selectedContact] || []), // Ensure it defaults to an empty array
        // Only add a message if newMessage has content
        ...(newMessage.trim()
          ? [
              {
                id: Date.now().toString(),
                sender: {
                  name: "Current User",
                  avatar: "currentUserAvatarUrl",
                },
                message: newMessage,
                time: new Date().toLocaleTimeString(),
                isCurrentUser: true,
              },
            ]
          : []),
        // If a file is provided, add a separate message for it
        ...(file
          ? [
              {
                id: Date.now().toString() + "-file",
                sender: {
                  name: "Current User",
                  avatar: "currentUserAvatarUrl",
                },
                message: " ", // Use file name as message
                time: new Date().toLocaleTimeString(),
                isCurrentUser: true,
                fileName: file.name,
                file: URL.createObjectURL(file), // Create a URL for the file
              },
            ]
          : []),
      ],
    }));
  };

  const messageContainerRef = useRef(null); // Create a ref for the message container

  useEffect(() => {
    // Scroll to the bottom of the message container
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]); // Run this effect whenever the messages change

  return (
    <div className="flex flex-col relative !h-screen overflow-hidden w-full">
      <div className="absolute top-0 !w-full">
        <ChatHeader />
      </div>
      <div className="self-center px-16 max-md:px-5 !h-screen !max-h-screen pt-[165px] w-full md:px-[88px] max-md:max-w-full gap-x-2 md:gap-x-[27px] flex">
        <div className="flex flex-grow flex-col w-[20%] sm:w-[31%] max-md:ml-0 max-md:w-full overflow-y-scroll overflow-x-hidden scrollbar-hide ">
          <div className="flex flex-col justify-center items-center text-black max-md:mt-7">
            {contacts.map((contact) => (
                <ContactCard
                  contact={contact}
                  isSelected={contact.id === selectedContact}
                  onSelect={setSelectedContact}
                />
            ))}
          </div>
        </div>

        <div className="flex flex-col w-[80%] sm:w-[69%] max-md:ml-0 max-md:w-full relative">
          <div className="absolute top-0 w-full">
            <ChatBoxHeader
              title={
                contacts?.find((contact) => {
                  return contact.id === selectedContact;
                })?.name
              }
              icon={
                contacts?.find((contact) => {
                  return contact.id === selectedContact;
                })?.avatar
              }
              position={
                contacts?.find((contact) => {
                  return contact.id === selectedContact;
                })?.position
              }
            />
          </div>{" "}
          <div
            ref={messageContainerRef} // Attach the ref to the container
            className="flex flex-col w-full max-md:mt-7 max-md:max-w-full bg-[#E4FFF2] !h-[calc(100%-95px)]  md:!h-[calc(100%-145px)] scrollbar-hide px-[38px] mt-[90px] pt-20 md:pt-16 pb-3 overflow-y-auto scrollbar-hidden"
          >
            {/* <div className="flex-grow flex-col py-20 w-full bg-emerald-50 bg-opacity-50 overflow-y-auto"> */}
            {messages?.[selectedContact]?.map((message, index) => (
              <MessageBubble
                isCurrentUser={message.isCurrentUser}
                message={message.message}
                avatar={message.sender.avatar}
                file={message.file} // Pass the file URL
                fileName={message.fileName} // Pass the file name
              />
            ))}
            {/* </div> */}
          </div>
          <div className="absolute bottom-0 w-full">
            <ChatInput onSend={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};
