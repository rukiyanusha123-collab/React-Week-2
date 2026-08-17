import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext();

function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState(() => {
    const storedBlogs = localStorage.getItem("blogs");
    return storedBlogs ? JSON.parse(storedBlogs) : [];
  });

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  
  const addBlog = (blog) => {
    const newBlog = {
      id: Date.now(), 
      title: blog.title,
      body: blog.body,
    };

    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  const deleteBlog = (id) => {
    setBlogs((prevBlogs) =>
      prevBlogs.filter((blog) => blog.id !== id)
    );
  };

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