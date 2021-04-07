import "./App.css";
import { BookList } from "./components/BookList/BookList";
import { Navbar } from "./components/Navbar/Navbar";
import ThemeContextProvider from "./context/ThemeContext";

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
};

export default App;
