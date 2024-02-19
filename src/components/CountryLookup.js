"use client";
import React, { useEffect, useState } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("United State");
  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
      )
        .then((res) => {
          const data = res.json();
          //   console.log(res.json(), "res");
          return data;
        })
        .then((data) => {
          //   data.country;
          console.log(data.country, "data");
          return data.country;
        });
      console.log(response, "country");
      if (!response) return;
      setCountry(response);
    };
    getCountry();
  }, []);
  return <div>{country}</div>;
};

export default CountryLookup;
