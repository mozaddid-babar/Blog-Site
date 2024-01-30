import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Blog = ({ blog, onToggleFavorite }) => {
  const { id, title, body } = blog;
  const [isFavorite, setIsFavorite] = useState(false);

  const navigate = useNavigate();
  const handleGoToDetails = (blogId) => {
    console.log("Clicked id is: ", blogId);
    navigate(`blogs/${blogId}`);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button onClick={() => handleGoToDetails(id)} variant="primary">
          Details
        </Button>
        <Button
          className="ms-3"
          onClick={() => onToggleFavorite(id)}
          variant="success"
        >
          {isFavorite ? "Unmark Favorite" : "Mark Favorite"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Blog;
