import logo from "./logo.svg";
import "./App.css";
import { useQuery, useMutation, QueryClient } from "react-query";
import { deletePosts, getPosts } from "./api";

function App() {
  const { isLoading, error, data } = useQuery("posts", getPosts);
  const queryClient = new QueryClient();

  const mutation = useMutation(deletePosts, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("posts");
    },
  });
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className=" border border-emerald-700  m-10">
      {data?.map((e) => (
        <div className="flex justify-between mx-2">
          <div>
            <h1 className=" my-2"> {e.title}</h1>
          </div>
          <div className="flex justify-between gap-3">
            <button
              className="text-red-500"
              onClick={(p) => {
                mutation.mutate({
                  id: e.id,
                });
              }}
            >
              {" "}
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
