import { createContext, useEffect, useReducer } from "react";
import { bookReducer } from "../reducer/bookReducer";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  /*  { title: "The clean coder", author: "Robert C.Martin", id: 1 },
    { title: "clean code", author: "Robert C.Martin", id: 2 },
    { title: "clean agile", author: "Robert C.Martin", id: 3 },
    { title: "clean architecture", author: "Robert C.Martin", id: 4 },
    { title: "you don't know javaScript yet", author: "Kyle Simpson", id: 5 }, */

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
