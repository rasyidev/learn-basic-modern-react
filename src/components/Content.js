import useFetch from "../hooks/useFetch";
import ArticleList from "./ArticleList";

const Content = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:3002/blogs");

  return (
    <main>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading . . .</p>}
      {blogs && <ArticleList articles={blogs} title="All Articles" />}
      {blogs && (
        <ArticleList
          articles={blogs.filter((article) => article.author === "Rasyidev")}
          title="Only Rasyidev's Articles"
        />
      )}
    </main>
  );
};

export default Content;
