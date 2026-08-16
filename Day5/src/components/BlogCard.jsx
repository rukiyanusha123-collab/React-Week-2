import { Link } from "react-router-dom";

function BlogCard({ blog, onDelete }) {
  return (
    <div className="blog-card">
      <h2 className="blog-title">{blog.title}</h2>

      <p className="blog-body">{blog.body}</p>

      <div className="blog-actions">
        <Link
          className="view-btn"
          to={`/blogs/${blog.id}`}
        >
          View
        </Link>

        <button
          className="delete-btn"
          onClick={() => onDelete(blog.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BlogCard;