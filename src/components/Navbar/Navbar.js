import "./Navbar.css";
import { Component } from "react";
import { ThemeContext } from "../../context/ThemeContext";

class Navbar extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;

    const theme = isLightTheme ? light : dark;

    return (
      <div className="navbar">
        <nav
          style={{
            background: theme.ui,
            color: theme.syntax,
          }}
        >
          <h1>Context API</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li> Contact</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export { Navbar };
