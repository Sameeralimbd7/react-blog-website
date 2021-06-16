import { useParams, useHistory } from "react-router-dom";
import { useFetch } from "./useFetch";
import Loader from "./Loader";
import Error from "./Error";
import URL from "../constants";

const BlogDes = () => {
  const { id } = useParams();
  const history = useHistory();

  const { data: blog, isPending, error } = useFetch(`${URL}/blogs/${id}`);

  function handleDelete() {
    fetch(`${URL}/blogs/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Blog Deleted");
        history.push("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className="container-fluid m-0 p-0" style={{ minHeight: "100vh" }}>
      {blog && (
        <div className="container-fluid text-center m-0 p-0">
          <h1
            className="m-3 mt-5 text-uppercase"
            style={{
              color: "#3ae374",
              fontFamily: `"Convergence", sans-serif`,
            }}
          >
            {blog.title}
          </h1>
          <p
            className="mt-5"
            style={{
              color: "#f1f2f6",
              fontFamily: `"Convergence", sans-serif`,
            }}
          >
            {blog.body}
          </p>
          <div className="my-3 container-fluid d-flex align-content-center justify-content-end">
            <h6
              className="my-3"
              style={{
                color: "#f1f2f6",
                fontFamily: `"Convergence", sans-serif`,
              }}
            >
              ---{blog.author}
            </h6>
          </div>
          <button
            className="btn btn-dark text-dark mb-3 fw-bold"
            style={{
              backgroundColor: "#3ae374",
              fontFamily: `"Mulish", sans-serif`,
            }}
            onClick={handleDelete}
          >
            DELETE BLOG
          </button>
        </div>
      )}
      {isPending && <Loader />}
      {error && <Error error={error} />}
    </div>
  );
};

export default BlogDes;
