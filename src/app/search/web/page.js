import WebSearchRssults from "@/components/WebSearchRssults";
import Link from "next/link";
import React from "react";

export default async function WebSearchPage({ searchParams }) {
  let url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyAHE5XXfueIT5jSVVk7Ym1rx-NLYtVNl1Q&cx=1425e5293ecd44890&q=${searchParams.searchTerm}`;
  const response = await fetch(
    url
    // `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=lectures`
  );
  if (!response.ok) throw new Error("Something went wrong...");
  const data = await response.json();
  console.log(data);
  const results = data.items;

  if (!results) {
    return (
      <div className=" flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No results found for {searchParams.searchTerm}
        </h1>
        <p className=" text-lg">
          Try searching the web or images for something else
          <Link href="/" className=" text-blue-500 cd">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="">{results && <WebSearchRssults results={data} />}</div>
  );
}
