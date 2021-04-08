import "./Navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, toggleLoggedIn } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
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
};

export { Navbar };
