import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import ArticleDetails from "./components/ArticleDetails";
import Content from "./components/Content";
import Header from "./components/Header";
import NewArticle from "./components/NewArticle";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <h1>Welcome to my blog!</h1>
          </Route>
          <Route path="/create">
            <NewArticle />
          </Route>
          <Route exact path="/blog">
            <Content />
          </Route>
          <Route path="/blog/:id">
            <ArticleDetails />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
