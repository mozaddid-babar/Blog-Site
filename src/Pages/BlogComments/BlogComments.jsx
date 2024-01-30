import { ListGroup } from "react-bootstrap";

const BlogComments = ({ comment }) => {
  const { name, body } = comment;
  return (
    <div>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{name}</div>
          <span className="ms-4">{body}</span>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default BlogComments;
