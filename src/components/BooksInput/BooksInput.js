import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

const BooksInput = () => {
  const [books, setBooks] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://www.anapioficeandfire.com/api/books?pageSize=30"
    );

    setBooks(response.data);
  };

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="books">
        {books &&
          books.map((book, index) => {
            const cleanedDate = new Date(book.released).toDateString();
            const authors = book.authors.join(", ");

            return (
              <div className="book" key={index}>
                <h3>Book {index + 1}</h3>
                <h2>{book.name}</h2>

                <div className="details">
                  <p>๐จ: {authors}</p>
                  <p>๐: {book.numberOfPages} pages</p>
                  <p>๐๏ธ: {book.country}</p>
                  <p>โฐ: {cleanedDate}</p>
                  <p>๐: {book.isbn}</p>
                  <p>๐: {book.publisher}</p>
                  <p>๐งท: {book.mediaType}</p>
                  <p>๐บ: {book.released}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

BooksInput.propTypes = {};

export default BooksInput;
