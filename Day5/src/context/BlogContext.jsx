import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext();

function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState(() => {
    const storedBlogs = localStorage.getItem("blogs");
    return storedBlogs ? JSON.parse(storedBlogs) : [];
  });

  // Save blogs to localStorage
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  // CREATE
  const addBlog = (blog) => {
    const newBlog = {
      id: Date.now(),
      title: blog.title,
      body: blog.body,
    };

    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  // DELETE
  const deleteBlog = (id) => {
    setBlogs((prevBlogs) =>
      prevBlogs.filter((blog) => blog.id !== id)
    );
  };

  // UPDATE
  const updateBlog = (id, updatedBlog) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === id
          ? {
              ...blog,
              title: updatedBlog.title,
              body: updatedBlog.body,
            }
          : blog
      )
    );
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        addBlog,
        deleteBlog,
        updateBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export default BlogProvider;