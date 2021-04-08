import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className="ThemeToggle">
      <button onClick={toggleTheme}> Toggle the Theme </button>
    </div>
  );
};

export default ThemeToggle;
