import React from "react";

export default async function WebSearchPage({ searchParams }) {
  let url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyAHE5XXfueIT5jSVVk7Ym1rx-NLYtVNl1Q&cx=1425e5293ecd44890&q=${searchParams.searchTerm}`;
  const response = await fetch(
    url
    // `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=lectures`
  );
  const data = await response.json();
  console.log(data);
  const results = data.items;

  return (
    <div className="">
      {results && results.map((result) => <h1>{result.title}</h1>)}
    </div>
  );
}
