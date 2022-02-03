import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewArticle = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Rasyidev");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newBlog = { title, author, body };
    console.log(newBlog);
    fetch("http://localhost:3002/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then((whatisthis) => {
      setIsLoading(false);
      history.push("/blog");
    });
  };

  return (
    <>
      <h1>Create New Blog</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="author">author</label>
        <select
          name="author"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Makachev">Makachev</option>
          <option value="Chimaev">Chimaev</option>
          <option value="Rasyidev">Rasyidev</option>
        </select>

        <label htmlFor="body">Body</label>
        <textarea
          name="body"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        {!isLoading && <button type="submit">Create new Blog</button>}
        {isLoading && <button type="submit">Creating a new blog...</button>}
        <p>{title}</p>
      </form>
    </>
  );
};

export default NewArticle;
