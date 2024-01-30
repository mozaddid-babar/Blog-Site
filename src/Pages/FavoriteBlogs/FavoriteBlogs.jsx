import useData from "../../hooks/useData";
import Blog from "../Blog/Blog";

const FavoriteBlogs = () => {
  const { isLoading, favorites } = useData();

  if (isLoading) {
    return <div>Loading favorite blogs...</div>;
  }

  return (
    <div>
      <h2>Favorite Blogs: {favorites.length}</h2>
      <div className="blogs">
        {favorites.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteBlogs;
