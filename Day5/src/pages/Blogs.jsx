import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import BlogCard from "../components/BlogCard";

function Blogs() {
  const { blogs, deleteBlog } = useContext(BlogContext);

  return (
    <div className="page-container">
      <h1 className="page-title">All Blogs</h1>

      <div className="blogs-container">
        {blogs.length === 0 ? (
          <p className="empty-message">
            No blogs available.
          </p>
        ) : (
          blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onDelete={deleteBlog}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Blogs;