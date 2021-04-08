import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./BookList.css";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="BookList"
      style={{
        background: theme.bg,
      }}
    >
      <ul>
        <li
          style={{
            background: theme.ui,
            color: theme.syntax,
          }}
        >
          the clean coder
        </li>
        <li
          style={{
            background: theme.ui,
            color: theme.syntax,
          }}
        >
          clean Code
        </li>
        <li
          style={{
            background: theme.ui,
            color: theme.syntax,
          }}
        >
          you don't know JavaScript yet
        </li>
      </ul>
    </div>
  );
};

export { BookList };
