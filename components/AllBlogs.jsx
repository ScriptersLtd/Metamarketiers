"use client";
import { React, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "@/constants";
const AllBlogs = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter blogs based on the search term
    const filteredBlogs = blogData.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className=" justify-center items-center flex flex-col min-h-screen pt-32">
    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary font-bold mb-6 text-neutral-100 ">
      Our Latest Blog Posts
    </h1>
    <div className="mb-6 flex justify-end">
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border bg-secondary text-black rounded-md placeholder-primary focus:outline-none shadow"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredBlogs.map((blog, index) => (
        <Link key={index} href={`/blog/${blog.slug}`}>
          {/* blog.slug href  */}
          <div className=" hover:shadow-lg hover:shadow-gray-300 transition-all shadow-md rounded-md p-6 hover:scale-[1.01] group">
            <Image
              src={blog.image}
              alt={blog.title}
              width={350}
              height={250}
              className="w-full h-64  mb-4 rounded-md"
            />

            <h2 className="sm:text-xl group-hover:text-secondary text-primary cursor-pointer font-semibold mb-2 text-lg transition-all duration-200">
              {blog.title}
            </h2>

            <p className="text-gray-400 mb-2 line-clamp-4 text-xs sm:text-base">
              {blog.description}
            </p>
            <p className="text-green-900 text-sm">
              By {blog.author} - {blog.date}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
  )
}

export default AllBlogs