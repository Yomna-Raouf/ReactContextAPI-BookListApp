import { useContext, useState } from "react";
import { BookContext } from "../../context/BookContext";
import "./AddBookForm.css";

const AddBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, author);
    dispatch({ type: "ADD_BOOK", newBook: { title, author } });
    setAuthor("");
    setTitle("");
  };

  return (
    <div className="AddBookForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export { AddBookForm };
