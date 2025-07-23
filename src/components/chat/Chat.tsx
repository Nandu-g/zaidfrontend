// "use client";
// import React, { useState } from "react";
// import { IoReloadOutline } from "react-icons/io5";
// import { RiSendPlaneLine } from "react-icons/ri";
// import axios from "axios";
// import { MdSportsGolf } from "react-icons/md";

// type Props = {
//   messages: { content: string; response: string }[];
//   setMessages: React.Dispatch<
//     React.SetStateAction<{ content: string; response: string }[]>
//   >;
//   chatId: number | null;
// };

// function Chat({ messages, setMessages, chatId }: Props) {
//   interface Message {
//     content: string;
//     response: string;
//   }

//   const [query, setQuery] = useState("");
//   const [loading, setLoading] = useState(false);
//   // const [messages, setMessages] = useState<Message[]>([]);
//   console.log("this is the message ");
//   const handleRegenerate = async () => {
//     const userId = 1;
//     console.log(chatId, "this is the chatid");
//     const lastQuery =
//       messages.length > 0 ? messages[messages.length - 1].content : "";
//     setMessages((prevMessages) =>
//       prevMessages.map((msg, index) =>
//         index === prevMessages.length - 1 ? { ...msg, response: "" } : msg
//       )
//     );

//     setLoading(true);
//     try {
//       const response = await axios.post(
//         `http://127.0.0.1:8000/assistant/chat?user_id=${userId}&chat_id=${chatId}`,
//         {
//           message: lastQuery,
//         }
//       );
//       console.log("Response:", response.data);
//       setQuery("");
//       setMessages((prevMessages) =>
//         prevMessages.map((message, index) =>
//           index === prevMessages.length - 1
//             ? { ...message, response: response.data }
//             : message
//         )
//       );
//       console.log(messages, "messages");
//       setLoading(false);
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(event.target.value, "value of query of user");
//     setQuery(event?.target.value);
//   };

//   const handleSubmit = async (
//     event?: React.FormEvent | React.KeyboardEvent | React.MouseEvent
//   ) => {
//     event?.preventDefault();
//     const userId = 1;
//     setLoading(true);
//     if (query.trim() === "") return;
//     const userMessage: Message = { content: query, response: "" };
//     setMessages([...messages, userMessage]);

//     console.log(messages);
//     // const chatId = 1
//     console.log(chatId, "this is the chatId");
//     try {
//       const response = await axios.post(
//         `http://127.0.0.1:8000/assistant/chat?user_id=${userId}&chat_id=${chatId}`,
//         {
//           message: query,
//         }
//       );
//       console.log("Response:", response.data);
//       setQuery("");
//       setMessages((prevMessages) =>
//         prevMessages.map((message, index) =>
//           index === prevMessages.length - 1
//             ? { ...message, response: response.data }
//             : message
//         )
//       );
//       console.log(messages, "messages");
//       setLoading(false);
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };

//   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter") {
//       handleSubmit();
//     }
//   };

//   return (
//     <div className="flex-[3] bg-neutral-800 relative h-screen flex flex-col">
//       {/* Chat messages area */}
//       <div className="flex-1 overflow-y-auto pb-36 ">
//         {messages.map((msg, index) => (
//           <div key={index}>
//             <div className="flex justify-end px-6 py-4 gap-4">
//               <p className="text-gray-300 px-4 py-2 rounded-lg max-w-[70%]">
//                 {msg.content}
//               </p>
//               <img
//                 src="/images/images.png"
//                 className="w-10 h-10 rounded-full"
//               />
//             </div>
//             <hr className="border-gray-600 mx-4 my-2" />
//             <div className="flex justify-start px-6 py-4 gap-4">
//               {msg.response ? (
//                 <>
//                   <img
//                     src="/images/chatbot.jpg"
//                     className="w-10 h-10 rounded-full"
//                   />
//                   <p className="text-gray-300">{msg.response}</p>
//                 </>
//               ) : loading ? (
//                 <p className="animate-pulse text-gray-400">
//                   Generating a response...
//                 </p>
//               ) : (
//                 <>
//                   <img
//                     src="/images/chatbot.jpg"
//                     className="w-10 h-10 rounded-full"
//                   />
//                   <p className="text-gray-300">{msg.response}</p>
//                 </>
//               )}
//               <hr className="border-gray-600 mx-4 my-2" />
//             </div>
//           </div>
//         ))}

//         <div className="border-t border-gray-700 px-6 py-4 bg-neutral-100 sticky bottom-0 z-10">
//           {messages.length > 0 && messages[messages.length - 1].response && (
//             <div className="flex justify-center mb-4">
//               <button
//                 className="bg-indigo-700 px-8 py-2 rounded-md flex font-medium cursor-pointer"
//                 onClick={handleRegenerate}
//                 disabled={loading}
//               >
//                 <IoReloadOutline className="mt-1 mr-2" />
//                 Regenerate response
//               </button>
//             </div>
//           )}

//           <div className="flex items-center">
//             <button className="px-6 py-3 bg-neutral-700 rounded-lg mx-2 cursor-pointer">
//               <IoReloadOutline />
//             </button>
//             <button className="px-6 py-3 bg-neutral-700 rounded-lg mx-2 cursor-pointer">
//               <IoReloadOutline />
//             </button>

//             <form className="flex flex-1 items-center" onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="Zaid is listening. Ask away..."
//                 className="bg-neutral-700 text-neutral-400 px-6 py-3 rounded-lg flex-1"
//                 onChange={handleChange}
//                 value={query}
//                 onKeyDown={handleKeyDown}
//               />
//               <button
//                 type="submit"
//                 className="px-4 py-3 bg-indigo-700 rounded-lg mx-2 cursor-pointer"
//               >
//                 <RiSendPlaneLine />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Chat;

"use client";
import React, { useState } from "react";
import { IoReloadOutline } from "react-icons/io5";
import { RiSendPlaneLine } from "react-icons/ri";
import axios from "axios";
import { MdSportsGolf } from "react-icons/md";

type Props = {
  messages: { content: string; response: string }[];
  setMessages: React.Dispatch<
    React.SetStateAction<{ content: string; response: string }[]>
  >;
  chatId: number | null;
};

function Chat({ messages, setMessages, chatId }: Props) {
  interface Message {
    content: string;
    response: string;
  }

  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegenerate = async () => {
    const userId = 1;
    const lastQuery =
      messages.length > 0 ? messages[messages.length - 1].content : "";
    setMessages((prevMessages) =>
      prevMessages.map((msg, index) =>
        index === prevMessages.length - 1 ? { ...msg, response: "" } : msg
      )
    );

    setLoading(true);
    try {
      const response = await axios.post(
        `https://zaid-backend-3.onrender.com/assistant/chat?user_id=${userId}&chat_id=${chatId}`,
        {
          message: lastQuery,
        }
      );
      setQuery("");
      setMessages((prevMessages) =>
        prevMessages.map((message, index) =>
          index === prevMessages.length - 1
            ? { ...message, response: response.data }
            : message
        )
      );
      setLoading(false);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (
    event?: React.FormEvent | React.KeyboardEvent | React.MouseEvent
  ) => {
    event?.preventDefault();
    const userId = 1;
    setLoading(true);
    if (query.trim() === "") return;
    const userMessage: Message = { content: query, response: "" };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post(
        `https://zaid-backend-3.onrender.com/assistant/chat?user_id=${userId}&chat_id=${chatId}`,
        {
          message: query,
        }
      );
      setQuery("");
      setMessages((prevMessages) =>
        prevMessages.map((message, index) =>
          index === prevMessages.length - 1
            ? { ...message, response: response.data }
            : message
        )
      );
      setLoading(false);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter") {
  //     handleSubmit();
  //   }
  // };

  return (
    <div className="flex-[3] bg-neutral-800 h-screen flex flex-col relative">
      {/* Scrollable messages area */}
      <div className="flex-1 overflow-y-auto pb-24">
        {messages.map((msg, index) => (
          <div key={index}>
            <div className="flex justify-end px-6 py-4 gap-4">
              <p className="text-gray-300 px-4 py-2 rounded-lg max-w-[70%] bg-neutral-700">
                {msg.content}
              </p>
              <img
                src="/images/images.png"
                className="w-10 h-10 rounded-full"
                alt="User avatar"
              />
            </div>
            <hr className="border-gray-600 mx-4 my-2" />
            <div className="flex justify-start px-6 py-4 gap-4">
              {msg.response ? (
                <>
                  <img
                    src="/images/chatbot.jpg"
                    className="w-10 h-10 rounded-full"
                    alt="Chatbot avatar"
                  />
                  <p className="text-gray-300 px-4 py-2 rounded-lg max-w-[70%] bg-neutral-700">
                    {msg.response}
                  </p>
                </>
              ) : loading && index === messages.length - 1 ? (
                <div className="flex items-center gap-4">
                  <img
                    src="/images/chatbot.jpg"
                    className="w-10 h-10 rounded-full"
                    alt="Chatbot avatar"
                  />
                  <p className="animate-pulse text-gray-400">
                    Generating a response...
                  </p>
                </div>
              ) : (
                <>
                  <img
                    src="/images/chatbot.jpg"
                    className="w-10 h-10 rounded-full"
                    alt="Chatbot avatar"
                  />
                  <p className="text-gray-300">{msg.response}</p>
                </>
              )}
            </div>
            <hr className="border-gray-600 mx-4 my-2" />
          </div>
        ))}
      </div>

      {/* Fixed input area */}
      <div className="fixed bottom-0 left-0 right-0 bg-neutral-800 border-t border-gray-700 px-6 py-4">
        {messages.length > 0 && messages[messages.length - 1].response && (
          <div className="flex justify-center mb-4">
            <button
              className="bg-indigo-700 px-8 py-2 rounded-md flex font-medium cursor-pointer items-center"
              onClick={handleRegenerate}
              disabled={loading}
            >
              <IoReloadOutline className="mr-2" />
              Regenerate response
            </button>
          </div>
        )}

        <div className="flex items-center">
          <button className="px-6 py-3 bg-neutral-700 rounded-lg mx-2 cursor-pointer">
            <IoReloadOutline />
          </button>
          <button className="px-6 py-3 bg-neutral-700 rounded-lg mx-2 cursor-pointer">
            <MdSportsGolf />
          </button>

          <form className="flex flex-1 items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Zaid is listening. Ask away..."
              className="bg-neutral-700 text-neutral-400 px-6 py-3 rounded-lg flex-1"
              onChange={handleChange}
              value={query}
              // onKeyDown={handleKeyDown}
            />
            <button
              type="submit"
              className="px-4 py-3 bg-indigo-700 rounded-lg mx-2 cursor-pointer"
            >
              <RiSendPlaneLine />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;