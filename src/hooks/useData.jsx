import axios from "axios";
import { useState, useEffect } from "react";

const useData = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogComments, setBlogComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return {
    blogs,
    setBlogs,
    setBlogComments,
    blogComments,
    isLoading,
  };
};

export default useData;
