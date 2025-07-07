'use client'
import React, { useState,useEffect } from 'react'
import { BsThreeDots } from "react-icons/bs";
import axios from 'axios';

function ChatHistory() {

  const [chats, setChats] = useState<string[]>([]);  
  useEffect(() => {
        fetchChats();
    }, []);

  const fetchChats = async () => {
    const userId = 1
        try {
            // setLoading(true);
            const response = await axios.get(`http://localhost:8000/assistant/chat-list?user_id=${userId}`);
            
           
            const data = await response.data;
            console.log(data)
            // setChatData(data);
        } catch (err) {
            // setError(err.message);
            console.log('error', err)
        } finally {
            // setLoading(false);
        }
    };
  return (
<div className='flex-[1]'>
  <p className="font-semibold mb-2">Saved chats</p>
  <div className='flex flex-col gap-2'>
    <div className="flex items-center justify-between">
      <span>sample 1</span>
      <BsThreeDots />
    </div>
    <div className="flex items-center justify-between">
      <span>sample 2</span>
      <BsThreeDots />
    </div>
    <div className="flex items-center justify-between">
      <span>sample 3</span>
      <BsThreeDots />
    </div>
    <div className="flex items-center justify-between">
      <span>sample 4</span>
      <BsThreeDots />
    </div>
  </div>
  <p className="font-semibold mb-2">Today</p>
  <div className='flex flex-col gap-2'>
    <div className="flex items-center justify-between">
      <span>sample 1</span>
      <BsThreeDots />
    </div>
    <div className="flex items-center justify-between">
      <span>sample 2</span>
      <BsThreeDots />
    </div>
    <div className="flex items-center justify-between">
      <span>sample 3</span>
      <BsThreeDots />
    </div>
    <div className="flex items-center justify-between">
      <span>sample 4</span>
      <BsThreeDots />
    </div>
  </div>
  <p className="font-semibold mb-2">Tomorrow</p>
  <div className='flex flex-col gap-2'>
    <div className="flex items-center justify-between">
      <span>sample 1</span>
      <BsThreeDots />
    </div>
    <div className="flex items-center justify-between">
      <span>sample 2</span>
      <BsThreeDots />
    </div>
    <div className="flex items-center justify-between">
      <span>sample 3</span>
      <BsThreeDots />
    </div>
    <div className="flex items-center justify-between">
      <span>sample 4</span>
      <BsThreeDots />
    </div>
  </div>
</div>
 
  )
}

export default ChatHistory
