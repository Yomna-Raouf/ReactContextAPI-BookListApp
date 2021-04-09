import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { ThemeContext } from "../../context/ThemeContext";
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
      <ul>
        {books.map((book) => (
          <li
            style={{
              background: theme.ui,
              color: theme.syntax,
            }}
            key={book.id}
          >
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { BookList };
