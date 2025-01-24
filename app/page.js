import Link from "next/link";

async function getBlogs(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

export default async function Home() {
  const blogs = await getBlogs()
  return (
    <main>
      <div>
       <h2 className="text-center font-bold text-2xl">Blog Post</h2> 
        <ul>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {blogs.map((blog) => (
    <div
      key={blog.id}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          {blog.title}
        </h2>
        <p className="text-gray-600 mb-5">
          {blog.body.length > 100
            ? blog.body.slice(0, 100) + "..."
            : blog.body}
        </p>
        <Link
          href={`/${blog.id}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  ))}
</div>

        </ul>
      </div>
    </main>
  );
}
