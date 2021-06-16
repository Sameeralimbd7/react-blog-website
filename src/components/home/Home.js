import React from "react";
import Card from "./Card";
import { useFetch } from "../useFetch";
import Loader from "../Loader";
import Error from "../Error";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home text-center" style={{ minHeight: "100vh" }}>
      {blogs && (
        <div className="d-flex justify-content-around flex-wrap">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.body}
            />
          ))}
        </div>
      )}
      {isPending && <Loader />}
      {error && <Error error={error} />}
    </div>
  );
};

export default Home;
