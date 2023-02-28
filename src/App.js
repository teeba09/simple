import logo from "./logo.svg";
import "./App.css";
import { useQuery, useQueryClient } from "react-query";
import { getPosts } from "./api";

function App() {
  const query = useQuery("posts", getPosts);

  return (
    <div className="App">
      {query.data.map((e) => (
        <h1> {e.title}</h1>
      ))}
    </div>
  );
}

export default App;
