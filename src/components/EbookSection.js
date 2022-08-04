import React from 'react';
import './Home.css';
import { Document, Page } from 'react-pdf';
import { useState, useEffect } from "react";

const EbookSection = () => {
  const [books, setBooks] = useState([]);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {

    fetch("http://localhost:5000/api/books")
      .then(response => {
        return response.json();
      })
      .then(booksObj => {
        console.log("data has been stored", booksObj);
        setBooks(booksObj.books)


      });

  }, []);
  console.log(books)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div >
      {books.map((book, i) =>
        <div key={i} className='books'>
          <div className="Books">

            <div >
              <Document file={"http://localhost:5000/public/" + book.books} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
              </Document>
              <p>
                Page {pageNumber} of {numPages}
              </p>

              {/* <iframe className='pdf' url={book.books} title="This is a unique title" ></iframe > */}
              <h4 className="btn2">{book.name}</h4>
            </div>

          </div>
        </div>)
      }
    </div>
  );
}


export default EbookSection;