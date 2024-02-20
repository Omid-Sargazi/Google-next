import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOption from "./SearchHeaderOption";

const SearchHeader = () => {
  return (
    <header className=" sticky top-0 bg-white">
      <div className=" flex w-full p-6 justify-between items-center">
        <Link href="/">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
            width={120}
            height={40}
            priority
            style={{ width: "auto" }}
          />
        </Link>
        <div className="">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <RiSettings3Line className=" bg-transparent rounded-full p-2 text-4xl cursor-pointer hover:bg-gray-400" />
          <TbGridDots className=" bg-transparent rounded-full p-2 text-4xl cursor-pointer hover:bg-gray-400" />
          <button className=" bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow ml-2">
            Sign In
          </button>
        </div>
      </div>
      <SearchHeaderOption />
    </header>
  );
};

export default SearchHeader;
