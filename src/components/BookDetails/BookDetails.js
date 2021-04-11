import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { ThemeContext } from "../../context/ThemeContext";
import "./BookDetails.css";

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <li
      style={{
        background: theme.ui,
        color: theme.syntax,
      }}
      className="BookDetails"
      onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
    >
      <div>{book.title}</div>
      <br />
      <div>{book.author}</div>
    </li>
  );
};

export { BookDetails };
