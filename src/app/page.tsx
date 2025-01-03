import Image from "next/image";
import Link from "next/link";


import React from 'react'

const page = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-green-900">
      <div className="md:w-[600px] sm:w-[300px] lg:w-[800px] border-2 border-black bg-white">
        <h1 className="font-bold text-center text-red-600 text-[20px]" >Server Side Data Rendering (SSR):</h1>
        <p className="text-justify">Server-side rendering (SSR) in Next.js is a technique used to generate the HTML for your web pages on the server instead of the client. This process happens each time a request is made to your server, ensuring that users receive fully-rendered HTML pages from the server, which is then hydrated by the JavaScript on the client side.</p>
          <span className="text-red-600 font-bold">Example: </span><Link className="text-blue-700 font-bold text-center" href="/serverside-data-fetching">Server Side Data Fetching</Link>

        </div>
        <br /><br />
        <div className="md:w-[600px] sm:w-[300px] lg:w-[800px] border-2 border-black bg-white">
        <h1 className="font-bold text-center text-red-600 text-[20px]">Client Side Data Rendering (CSR):</h1>
        <p className="text-justify">Client-side rendering (CSR) in Next.js refers to the technique where the HTML is generated on the client side using JavaScript, typically after the initial page load. This means that the server sends a mostly empty HTML document to the client, and the browser then uses JavaScript to fill in the content.</p>
        <br /><span className="text-red-600 font-bold">Example: </span><Link className="text-blue-700 font-bold text-center" href="/client-data-fetching">Client Side Data Fetching</Link>
        
      </div>
    </div>
  )
}

export default page


