import React from 'react';

async function getBlogById(id) {
  const res = await fetch(` https://jsonplaceholder.typicode.com/posts/${id}`); // Replace with the deployed API if needed
  return res.json();
}

export default async function Blog({ params }) {
  const { id } = params;
  console.log(id)
  const blog = await getBlogById(id); // Fetch the blog data using the id from the URL

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <h1 className="text-4xl font-extrabold text-purple-700 mb-6">{blog.title}</h1>
    <p className="text-lg text-gray-800 mb-6 leading-relaxed">
      {blog.body}
    </p>
    <div className="mt-6 flex items-center justify-between text-gray-600">
      <p className="text-sm">Blog ID: <span className="font-semibold text-gray-900">{id}</span></p>
    </div>
  </div>
  
  );
}
