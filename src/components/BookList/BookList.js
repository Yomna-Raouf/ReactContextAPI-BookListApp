import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { ThemeContext } from "../../context/ThemeContext";
import { BookDetails } from "../BookDetails/BookDetails";
import "./BookList.css";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books, addBook } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="BookList"
      style={{
        background: theme.bg,
      }}
    >
      {books.length ? (
        <ul>
          {books.map((book) => (
            <BookDetails key={book.id} book={book} />
          ))}
        </ul>
      ) : (
        <h3>You have read them all</h3>
      )}
    </div>
  );
};

export { BookList };
