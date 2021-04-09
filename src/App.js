import "./App.css";
import { BookList } from "./components/BookList/BookList";
import { Navbar } from "./components/Navbar/Navbar";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import ThemeContextProvider from "./context/ThemeContext";
import AuthContextProvider from "./context/AuthContext";
import BookContextProvider from "./context/BookContext";

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <BookContextProvider>
            <Navbar />
            <BookList />
            <ThemeToggle />
          </BookContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
};

export default App;
