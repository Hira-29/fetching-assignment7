import React from "react";
import Link from "next/link";

interface ITodo {
 
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const Page = async () => {
  const response = await fetch("https://simple-books-api.glitch.me/books/");

  const parsedResponse: ITodo[] = await response.json();

  console.log("todos >>>", parsedResponse);

  return (
    <div className=" h-screen">
     <h1 className="text-center text-[30px] font-bold ">Server Side Data Fetching</h1>
      <div className="grid  md:grid-cols-3 sm:grid-cols-2  gap-7">
      {parsedResponse.map((todo, index) => (
        <div key={index} className="w-full border bg-slate-400 border-black shadow-lg rounded-lg hover:scale-[1.05] transition-all ">
          <p className="text-center">userId: {todo.id}</p>
          <p className="text-center">name: {todo.name}</p>
          <p className="text-center">type: {todo.type}</p>
          <p className="text-center">available: {`${todo.available}`}</p>
        </div>
      ))}
    </div>
    <p className="text-center text-blue-700 font-bold"><Link  href="/">Back To Home Page</Link></p>
    </div>
  );
};

export default Page;