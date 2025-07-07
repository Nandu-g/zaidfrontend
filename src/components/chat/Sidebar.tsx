import React from "react";
import { RiChatSearchLine } from "react-icons/ri";
import { BiLibrary } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import Procard from "./Procard";

function Sidebar() {
  return (
    <div className="bg-dark flex-[1] justify-center">
      <div className="ml-10">
        <button className="bg-indigo-700 px-10 py-2 rounded-md cursor-pointer mb-5 mt-4">
          + New Chat{" "}
        </button>
        <p className="mb-5 flex items-center gap-2 cursor-pointer text-gray-400">
          <RiChatSearchLine />
          Find Chat
        </p>
        <p className="mb-5 flex items-center gap-2 cursor-pointer text-gray-400">
          <BiLibrary />
          Law Library
        </p>
        <p className="mb-5 flex items-center gap-2 cursor-pointer text-gray-400">
          <FaMoneyBillTrendUp />
          Investment Advice
        </p>
        <p className="mb-5 flex items-center gap-2 cursor-pointer text-gray-400">
          <BsStars />
          Expert Review Mode
        </p>
        <p className="mb-5 flex items-center gap-2 cursor-pointer text-gray-400">
          <TbReportSearch />
          AI Reports
        </p>
        <p className="mb-5 flex items-center gap-2 cursor-pointer text-gray-400">
          <IoSettingsOutline />
          settings
        </p>
        <p className="mb-5 flex items-center gap-2 cursor-pointer text-gray-400">
          <IoMdInformationCircleOutline />
          Upgrades & FAQ
        </p>
        <Procard />
      </div>
    </div>
  );
}

export default Sidebar;
