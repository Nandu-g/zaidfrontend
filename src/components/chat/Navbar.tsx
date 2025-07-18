
import React,{useState} from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineCurtainsClosed } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import axios from 'axios'

interface SearchResult {
  id:number;
  title: string;
  query: string;
  chat_id:number;
}

type NavbarProps = {
  setSelectedChatId: React.Dispatch<React.SetStateAction<number | null>>;
  setMessages: React.Dispatch<React.SetStateAction<{ content: string; response: string }[]>>;
  selectedChatTitle: string | null;

};


function Navbar({ setSelectedChatId, setMessages,selectedChatTitle }: NavbarProps) {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  
  const handleSearchClick = () => {
    
    setShowSearchModal(true);
  };

  const handleCloseModal = () => {
    setShowSearchModal(false);
  };

   const handleSelectSearchResult = async (chatId: number) => {
    const userId = 1;

    try {
      const res = await axios.get(`http://localhost:8000/assistant/chat-messages?user_id=${userId}&chat_id=${chatId}`);
      const messages = res.data.messages.map((msg: any) => ({
        content: msg.query,
        response: msg.response,
      }));

      setSelectedChatId(chatId);
      setMessages(messages);
      setShowSearchModal(false);
    } catch (error) {
      console.error('Failed to fetch messages from search result', error);
    }
  }
  const handleSearchMessages = async(e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value.trim();  
  const userId = 1

  if (!value) {
    setSearchResults([]); 
    return;
  }
  try{
   
    const results = await axios.get(`http://localhost:8000/assistant/search-messages?q=${value}&user_id=${userId}`)
    // const results = await axios.get(`http://localhost:8000/assistant/search-messages?q=${value}&user_id=${userId}`)

    console.log(results,'results')
    setSearchResults(results.data);

    console.log(searchResults,'search results')
    // setSearchResults()
  }
  catch(err){
    console.log(err,'error')
  }
        
  }

  return (
    <>
    <div className="bg-dark w-full h-32 border-b-2 border-gray-600 flex items-center">
      {/* Parent Flex for 3 Divs */}
      <div className="flex flex-1 ml-8 mr-4">
        {/* Left Box */}
        <div className="flex-[1] flex items-center">
          <p className="text-white font-extrabold text-6xl ml-4">ZAID</p>

          <div className="flex ml-10">
            <IoSearchOutline className="text-2xl cursor-pointer text-gray-400 mr-4" onClick={handleSearchClick}/>
            <MdOutlineCurtainsClosed className="text-2xl cursor-pointer text-gray-400" />
          </div>
        </div>
        {/*center box*/}
        <div className="bg-neutral-800 h-28 mt-3 rounded-tl-3xl flex-[2] flex items-center border-r-2 border-gray-600 px-6">
          <p className="text-2xl">{selectedChatTitle || "Select a chat"}</p>
          <div className="flex ml-auto gap-4">
            <FiUpload className="text-2xl cursor-pointer text-gray-400" />
            <FiUpload className="text-2xl cursor-pointer text-gray-400" />
            <FiUpload className="text-2xl cursor-pointer text-gray-400" />
          </div>
        </div>

        {/* Right Box */}
        <div className="bg-neutral-800 h-28 mt-3 flex-[1] flex items-center justify-between rounded-tr-3xl px-4">
          <p className="text-white text-xl">All Chats</p>
          <IoSearchOutline className="text-2xl cursor-pointer text-gray-400 mr-4" />
          <FiUpload className="text-2xl cursor-pointer text-gray-400" />
        </div>
      </div>
    </div>
{showSearchModal && (
  <div className="fixed inset-0 z-50 bg-opacity-40 flex items-center justify-center">
    <div className="bg-neutral-800 p-6 rounded-lg w-full max-w-md shadow-lg relative">
      <button
        className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
        onClick={handleCloseModal}
      >
        ✕
      </button>
      <h2 className="text-white text-lg mb-4">Search Chats</h2>
      <input
        type="text"
        placeholder="Type to search..."
        className="w-full p-3 rounded bg-neutral-700 text-white placeholder-gray-400 focus:outline-none"
        onChange={handleSearchMessages}
      />

      {/* Scrollable Results Container */}
      <div className="mt-4 max-h-60 overflow-y-auto space-y-3">
        {searchResults.length === 0 ? (
          <p className="text-gray-400 text-sm">No results found.</p>
        ) : (
          searchResults.map((result, index) => (
            <div
              key={index}
              className="bg-neutral-700 p-3 rounded text-white hover:bg-neutral-600 transition cursor-pointer"
              onClick={() => handleSelectSearchResult(result.chat_id)}
            >
              <p className="text-sm font-semibold ">{result.title?result.title:"Untitled"}</p>
              <p className="text-xs text-gray-300 truncate px-4 rounded-md">{result.query}</p>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
)}

</>
  );
}
export default Navbar;

