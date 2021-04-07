import { Component } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./BookList.css";

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
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
  }
}

export { BookList };
