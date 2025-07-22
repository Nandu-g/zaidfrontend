import React from "react";
import ChatHistory from "./ChatHistory";

// const SidebarContext = createContext();
type ChatHistoryProps = {
  
  setMessages: React.Dispatch<React.SetStateAction<{ content: string; response: string }[]>>;
  setSelectedChatId: React.Dispatch<React.SetStateAction<number | null>>;
  setSelectedChatTitle: React.Dispatch<React.SetStateAction<string | null>>;
  onNewChat: () => void;

};


function Sidebar({ onNewChat,setMessages,setSelectedChatId,setSelectedChatTitle }: ChatHistoryProps) {

  return (
    <div className="bg-dark flex-[1] justify-center">
      <div className="ml-10">
        <button className="bg-indigo-700 px-10 py-2 rounded-md cursor-pointer mb-5 mt-4" onClick={onNewChat}>
          + New Chat{" "}
        </button>
        <ChatHistory setMessages={setMessages} setSelectedChatId={setSelectedChatId} setSelectedChatTitle={setSelectedChatTitle} onNewChat={onNewChat}/>
      </div>
    </div>
  );
}

export default Sidebar;
