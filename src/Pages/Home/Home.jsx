import { Container } from "react-bootstrap";
import Blogs from "../Blogs/Blogs";

const Home = () => {
  return (
    <Container>
      <h2 className="text-center my-3">Blog Site</h2>
      <a
        className="text-decoration-none fs-4 bg-info text-black p-1 rounded"
        href="/"
      >
        Home Button
      </a>

      <Blogs />
    </Container>
  );
};

export default Home;
