'use client'; 
import React,{useState} from "react";
import axios from "axios";
import Sidebar from "@/components/chat/Sidebar";
import Navbar from "@/components/chat/Navbar";
import Chat from "@/components/chat/Chat";

export default function page() {

    interface Message {
    content: string;
    response: string;
  }

  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);
  const [selectedChatTitle, setSelectedChatTitle] = useState<string | null>(null);


  const handleNewChat = async() =>{
    const userId = 1
    console.log('new chat page')
    try{

      const response = await axios.post(
        `http://127.0.0.1:8000/assistant/new-chat?user_id=${userId}`
      )
      console.log(response)
      setMessages(response.data.message);
      // console.log(response.data.chat_id)
      setSelectedChatId(response.data.chat_id);
      setSelectedChatTitle(response.data.chat_title);
    }
    catch(err){
      console.log('error', err)
    }
  }

  return (
    <>
      <div className="flex flex-col">
        <Navbar 
        setSelectedChatId={setSelectedChatId}
        setMessages={setMessages}
        selectedChatTitle={selectedChatTitle}
        />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar 
            onNewChat={handleNewChat}
            setMessages={setMessages}
            setSelectedChatId={setSelectedChatId}
            setSelectedChatTitle={setSelectedChatTitle}
          />
          <Chat messages={messages} setMessages={setMessages} chatId={selectedChatId}/>
          {/* <ChatHistory setMessages={setMessages} setSelectedChatId={setSelectedChatId} setSelectedChatTitle={setSelectedChatTitle}/> */}
        </div>
      </div>
    </>
  );
}
