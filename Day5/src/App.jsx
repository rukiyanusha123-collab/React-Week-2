import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CreateBlog from "./pages/CreateBlog";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route
          path="/createblog"
          element={<CreateBlog />}
        />

        <Route
          path="/blogs"
          element={<Blogs />}
        />

        <Route
          path="/blogs/:id"
          element={<BlogDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;