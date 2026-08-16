import { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const { addBlog } = useContext(BlogContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addBlog({
      title,
      body,
    });

    setTitle("");
    setBody("");

    navigate("/blogs");
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h1 className="page-title">Create Blog</h1>

        <form
          className="blog-form"
          onSubmit={handleSubmit}
        >
          <input
            className="form-input"
            type="text"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="form-textarea"
            placeholder="Write your blog..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <button
            className="create-btn"
            type="submit"
          >
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;