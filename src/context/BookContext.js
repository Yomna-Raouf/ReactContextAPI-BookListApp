import { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: "The clean coder", id: 1 },
    { title: "clean code", id: 2 },
    { title: "clean agile", id: 3 },
    { title: "clean architecture", id: 4 },
    { title: "you don't know javaScript yet", id: 5 },
  ]);

  const addBook = (e, newBook) => {
    e.preventDefault();
    setBooks({ ...books, newBook });
  };

  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
