import axios from "axios";
import useData from "../../hooks/useData";
import Blog from "../Blog/Blog";
import "./Blogs.css";

const Blogs = () => {
  const { blogs, setBlogs, setBlogComments, blogComments, isLoading } =
    useData();

  // Function to toggle favorite status
  const handleToggleFavorite = async (blogId) => {
    try {
      // Make API request to toggle favorite status
      await axios.put(`/users/1/favorites/${blogId}`);
      // Update local state or refetch data as needed
      // Example: Refetch the list of blogs
      const response = await axios.get("http://localhost:8080/blogs");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error toggling favorite status:", error);
    }
  };

  console.log(blogs);
  return (
    <div className="my-3">
      <div className="blogs">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
