// import React from "react";
// import { IoSearchOutline } from "react-icons/io5";
// import { MdOutlineCurtainsClosed } from "react-icons/md";
// import { FiUpload } from "react-icons/fi";

// function Navbar() {
//   return (

//     <div className="bg-dark w-full h-32 border-b-2 mx-2 border-gray-600 flex items-center">
//       <p className="text-white font-extrabold text-6xl ml-4">ZAID</p>

//       <div className="flex">
//         <IoSearchOutline className="text-2xl ml-10 cursor-pointer text-gray-400" />
//         <MdOutlineCurtainsClosed className="text-2xl ml-4 cursor-pointer text-gray-400" />
//       </div>

//       {/* Parent Flex for the two equal divs */}
//       <div className="flex flex-1 ml-8 mr-4">
//         {/* Left Box */}
//         <div className="bg-neutral-800 h-28 mt-3 rounded-tl-3xl flex-[2] flex items-center border-r-2 border-gray-600">
//           <p className="ml-6 text-2xl">Getting a Commercial Registration</p>
//           <div className="flex ml-56 gap-7">
//             <FiUpload className="text-2xl cursor-pointer text-gray-400" />
//             <FiUpload className="text-2xl cursor-pointer text-gray-400" />
//             <FiUpload className="text-2xl cursor-pointer text-gray-400" />
//           </div>
//         </div>

//         {/* Right Box */}
//         <div className="bg-neutral-800 h-28 mt-3 flex-[1] flex items-center justify-between rounded-tr-2xl px-4">
//           <p className="text-white text-xl">All Chats</p>
//           <FiUpload/>
//         </div>
//         {/* <div className=" bg-neutral-800"></div> */}
//       </div>
//     </div>
//   );
// }
// export default Navbar;

import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineCurtainsClosed } from "react-icons/md";
import { FiUpload } from "react-icons/fi";

function Navbar() {
  return (
    <div className="bg-dark w-full h-32 border-b-2 border-gray-600 flex items-center">
      {/* Parent Flex for 3 Divs */}
      <div className="flex flex-1 ml-8 mr-4">
        {/* Left Box */}
        <div className="flex-[1] flex items-center">
          <p className="text-white font-extrabold text-6xl ml-4">ZAID</p>

          <div className="flex ml-10">
            <IoSearchOutline className="text-2xl cursor-pointer text-gray-400 mr-4" />
            <MdOutlineCurtainsClosed className="text-2xl cursor-pointer text-gray-400" />
          </div>
        </div>
        {/*center box*/}
        <div className="bg-neutral-800 h-28 mt-3 rounded-tl-3xl flex-[2] flex items-center border-r-2 border-gray-600 px-6">
          <p className="text-2xl">Getting a Commercial Registration</p>
          <div className="flex ml-auto gap-4">
            <FiUpload className="text-2xl cursor-pointer text-gray-400" />
            <FiUpload className="text-2xl cursor-pointer text-gray-400" />
            <FiUpload className="text-2xl cursor-pointer text-gray-400" />
          </div>
        </div>

        {/* Right Box */}
        <div className="bg-neutral-800 h-28 mt-3 flex-[1] flex items-center justify-between rounded-tr-3xl px-4">
          <p className="text-white text-xl">All Chats</p>
          <FiUpload className="text-2xl cursor-pointer text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
