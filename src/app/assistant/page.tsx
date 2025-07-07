import React from "react";
import Sidebar from "@/components/chat/Sidebar";
import Navbar from "@/components/chat/Navbar";
import Procard from "@/components/chat/Procard";
import Chat from "@/components/chat/Chat";
import ChatHistory from "@/components/chat/ChatHistory";

export default function page() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <Chat />
          <ChatHistory />
        </div>
      </div>
    </>
  );
}
