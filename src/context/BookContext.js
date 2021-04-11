import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: "The clean coder", author: "Robert C.Martin", id: 1 },
    { title: "clean code", author: "Robert C.Martin", id: 2 },
    { title: "clean agile", author: "Robert C.Martin", id: 3 },
    { title: "clean architecture", author: "Robert C.Martin", id: 4 },
    { title: "you don't know javaScript yet", author: "Kyle Simpson", id: 5 },
  ]);

  // ADD BOOK ACTION
  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: uuidv4() }]);
  };

  // REMOVE BOOK ACTION
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
