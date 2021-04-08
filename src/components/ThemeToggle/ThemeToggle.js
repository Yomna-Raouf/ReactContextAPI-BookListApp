import { Component } from "react";
import { ThemeContext } from "../../context/ThemeContext";

class ThemeToggle extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { toggleTheme } = context;
          return (
            <div className="ThemeToggle">
              <button onClick={toggleTheme}> Toggle the Theme </button>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemeToggle;
