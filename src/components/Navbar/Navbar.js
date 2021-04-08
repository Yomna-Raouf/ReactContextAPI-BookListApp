import "./Navbar.css";
import { Component } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isLoggedIn, toggleLoggedIn } = authContext;
              const { isLightTheme, light, dark } = themeContext;
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
                    <div onClick={toggleLoggedIn}>
                      {isLoggedIn ? "logged in" : "logged out"}
                    </div>
                    <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li> Contact</li>
                    </ul>
                  </nav>
                </div>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export { Navbar };
