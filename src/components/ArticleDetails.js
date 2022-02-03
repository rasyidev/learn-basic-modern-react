import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ArticleDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`http://localhost:3002/blogs/${id}`);
  const history = useHistory();

  const handleDelete = (id) => {
    fetch(`http://localhost:3002/blogs/${id}`, {
      method: "DELETE",
    }).then(() => history.push("/blog"));
  };

  return (
    <div className="article-details">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <p>Author: {blog.author}</p>
          <p>{blog.body}</p>
        </article>
      )}

      <button onClick={() => handleDelete(id)}>Delete this blog</button>
    </div>
  );
};

export default ArticleDetails;
