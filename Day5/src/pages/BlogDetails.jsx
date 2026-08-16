import { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { useNavigate, useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();

  const { blogs, updateBlog } = useContext(BlogContext);

  const blog = blogs.find(
    (blog) => String(blog.id) === String(id)
  );

  const [title, setTitle] = useState(blog?.title || "");
  const [body, setBody] = useState(blog?.body || "");

  const [edit, setEdit] = useState(false);

  const navigate = useNavigate();

  if (!blog) {
    return (
      <div className="page-container">
        <h2>Blog not found</h2>
      </div>
    );
  }

  const handleUpdate = async () => {
    await updateBlog(id, {
      title,
      body,
    });

    setEdit(false);
  };

  return (
    <div className="page-container">
      <div className="details-container">
        {edit ? (
          <>
            <h1 className="page-title">Edit Blog</h1>

            <input
              className="form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="form-textarea"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

            <button
              className="update-btn"
              onClick={handleUpdate}
            >
              Update Blog
            </button>
          </>
        ) : (
          <>
            <h1 className="details-title">
              {blog.title}
            </h1>

            <p className="details-body">
              {blog.body}
            </p>

            <button
              className="edit-btn"
              onClick={() => setEdit(true)}
            >
              Edit
            </button>
          </>
        )}

        <button
          className="back-btn"
          onClick={() => navigate("/blogs")}
        >
          Back to Blogs
        </button>
      </div>
    </div>
  );
}

export default BlogDetails;