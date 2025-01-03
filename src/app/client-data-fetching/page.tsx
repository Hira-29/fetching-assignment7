"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ITodo {
  id: number;
  title: string;
  price: number;
  description: string;
  category:string;
  image:string;
  rating:{
    rate:number;
    count: number;
  };

}

const page = () => {
  const [data, setData] = useState<ITodo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );
      const parsedResponse: ITodo[] = await response.json();
      console.log("todos >>>", parsedResponse);
      setData(parsedResponse);
    };
    fetchData();
  }, []);

  return (
   
    <div className=" h-screen justify-center items-center">
     <h1 className="text-center text-[30px] font-bold ">Client Side Data Fetching</h1>
      <br />
      <div className="grid  md:grid-cols-3 sm:grid-cols-2  gap-7">
      {data.map((product, index) => (
        <div key={index} className="w-full border bg-slate-400 border-black shadow-lg rounded-lg hover:scale-[1.05] transition-all ">
        
          <div className="h-[200px]">
            <Image src={product.image} alt={product.title} width={100} height={100} className="mx-auto"></Image>
         </div>
          <p>id: {product.id}</p>
          <p>Title: {product.title}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
         
          <p><span>rating: {product.rating.rate}</span>{product.rating.count}</p>
        </div>
       
      ))}
      </div>
      <p className="text-center text-blue-700 font-bold"><Link  href="/">Back To Home Page</Link></p>
    </div>
  );
};

export default page;