import HomeHearder from "@/components/HomeHearder";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <HomeHearder />
      <div className=" flex flex-col items-center mt-24">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          width={300}
          height={100}
          alt="Google Logo"
          priority
          style={{ width: "auto" }}
        />
        <HomeSearch />
      </div>
    </>
  );
}
