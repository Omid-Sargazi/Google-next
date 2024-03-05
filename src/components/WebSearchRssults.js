import Link from "next/link";
import React from "react";
import Parser from "html-react-parser";
import PaginationButton from "./PaginationButton";

const WebSearchRssults = ({ results }) => {
  console.log(results, "webSearch");
  return (
    <div className=" sm:pb-24 pb-40 w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className=" text-gray-600 text-sm mb-5 mt-3 ">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div className=" mb-8 max-w-xl" key={result.link}>
          <div className=" group flex flex-col">
            <Link href={result.link}>{result.formattedUrl}</Link>
            <Link
              href={result.link}
              className=" group-hover:underline decoration-blue-500 text-xl truncate font-medium text-blue-500"
            >
              {result.title}
            </Link>
          </div>
          <p className=" text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButton />
    </div>
  );
};

export default WebSearchRssults;
