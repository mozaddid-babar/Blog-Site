import { Card, Container, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useData from "../../hooks/useData";
import { useEffect, useState } from "react";
import BlogComments from "../BlogComments/BlogComments";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs, blogComments: cachedComments, setBlogComments } = useData();
  const selectedBlog = blogs.find((blog) => blog.id === Number(id));

  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        // Check if comments are already cached
        if (cachedComments.length > 0 && !isInitialLoad) {
          // Use cached comments without fetching from the API
          setBlogComments(cachedComments);
        } else {
          // Fetch comments from the API
          const response = await fetch(`http://localhost:8080/comments/${id}`);
          const comments = await response.json();
          setBlogComments(comments);
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
      } finally {
        setIsLoading(false);
        setIsInitialLoad(false);
      }
    };

    fetchData();
  }, [id, cachedComments, setBlogComments, isInitialLoad]);

  if (!selectedBlog) {
    return <div>Blog not found</div>;
  }

  const { title, body } = selectedBlog;
  return (
    <Container className="my-3">
      <a
        className="text-decoration-none fs-4 bg-info text-black p-1 rounded"
        href="/"
      >
        Back Button
      </a>
      <h2 className="text-center">This is blog no: {id}</h2>
      <Card>
        <Card.Body>
          <Card.Title>Blog Title: {title}</Card.Title>
          <h5>Blog Description</h5>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
      <h4 className="mt-4">Comments</h4>
      <hr />
      {/* comments */}
      <ListGroup as="ol" numbered>
        {isLoading ? (
          <div>Loading comments...</div>
        ) : (
          cachedComments.map((comment) => (
            <BlogComments key={comment.id} comment={comment} />
          ))
        )}
      </ListGroup>
    </Container>
  );
};

export default BlogDetails;
