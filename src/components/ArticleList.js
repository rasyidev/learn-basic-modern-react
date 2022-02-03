import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ArticleList = ({ articles, title }) => {
  return (
    <article>
      <h1 style={{ color: "coral", marginTop: "50px" }}>{title}</h1>
      <hr />
      {articles.map((article, keyId) => (
        <div className="article-list" key={keyId}>
          <Link to={`/blog/${article.id}`}>
            <h3>{article.title}</h3>
            <small>{article.author}</small>
          </Link>
        </div>
      ))}
    </article>
  );
};

export default ArticleList;
