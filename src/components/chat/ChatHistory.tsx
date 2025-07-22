'use client'
import React, { useState,useEffect } from 'react'
import { BsThreeDots } from "react-icons/bs";
import axios from 'axios';

type ChatHistoryProps = {
  setMessages: React.Dispatch<React.SetStateAction<{ content: string; response: string }[]>>;
  setSelectedChatId: React.Dispatch<React.SetStateAction<number | null>>
  setSelectedChatTitle: React.Dispatch<React.SetStateAction<string | null>>;
  onNewChat?: () => void
};

interface Message {
    query: string;
    response: string;
  }


function ChatHistory({ setMessages,setSelectedChatId,setSelectedChatTitle,onNewChat }: ChatHistoryProps) {

  const [chats, setChats] = useState<{ id: number; title: string;}[]>([]);  
  useEffect(() => {
        fetchChats();
    }, []);

  const handleSelectChat = async(chatId:number,chatTitle:string) => {
    const userId = 1
    console.log('this is the chatID',chatId)
    try {
      const response = await axios.get(`http://localhost:8000/assistant/chat-messages?user_id=${userId}&chat_id=${chatId}`);
      console.log('this is the response',response.data)
      const messages = response.data.messages;
      const formatted = messages.map((msg: Message) => ({ 
        content: msg.query,
        response: msg.response,
      }));
      setSelectedChatId(chatId)
      setSelectedChatTitle(chatTitle)
      setMessages(formatted);
    }
    catch(err) {
      console.log(err,'error')
    }
  }
  useEffect(() => {
    fetchChats();
  }, []);

  // Optional: Refresh chat list when a new chat is created
  useEffect(() => {
    if (onNewChat) {
      fetchChats(); // Refresh chat list after new chat creation
    }
  }, [onNewChat]);

  const fetchChats = async () => {
    const userId = 1
        try {
            // setLoading(true);
            const response = await axios.get(`http://localhost:8000/assistant/chat-list?user_id=${userId}`);
            const data = await response.data;
            console.log(data)
            setChats(data.chat_list);
        } catch (err) {
            // setError(err.message);
            console.log('error', err)
        } finally {
            // setLoading(false);
        }
    };
  return (
<div className='flex-[1]'>
  <p className="font-semibold mb-2">Chat History</p>

  <div className='flex flex-col gap-2'>
  {Array.isArray(chats) && chats.length > 0 ? (
    chats.map((chat) => (
      <div
        key={chat.id}
        className="flex items-center justify-between cursor-pointer px-4"
        onClick={() => handleSelectChat(chat.id,chat.title)}
      >
        <span>{chat.title || "Untitled Chat"}</span>
        <BsThreeDots />
      </div>
    ))
  ) : (
    <p className="text-gray-400 px-4">No chats found</p>
  )}
</div>

</div>
 
  )
}

export default ChatHistory
