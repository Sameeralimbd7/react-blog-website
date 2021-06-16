import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [body, setbody] = useState("");
  const blog = { title, author, body };
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/blogs`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("Blog Added");
      history.push("/");
    });
  };

  return (
    <div className="create contaienr-fluid">
      <div className="card my-4 p-3 mx-auto border-0">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="text-center">
            <input
              id="title-input"
              type="text"
              className="p-2 my-2"
              maxLength="60"
              minLength="10"
              placeholder="Title"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
              required
            />
            <input
              type="text"
              className="p-2 my-2"
              maxLength="20"
              id="author-input"
              placeholder="Author"
              name="author"
              minLength="3"
              value={author}
              onChange={(e) => {
                setauthor(e.target.value);
              }}
              required
            />
            <textarea
              id="body-input"
              className="my-2 p-2"
              placeholder="Body"
              name="body"
              value={body}
              minLength="50"
              onChange={(e) => {
                setbody(e.target.value);
              }}
              required
            ></textarea>
            <button
              type="submit"
              className="btn btn-dark form-submit text-uppercase my-2"
            >
              Add blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
