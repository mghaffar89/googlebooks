import React, { useState, useEffect } from "react";

import API from "../../utils/API";
import BookCard from "../card";

function Search() {
  const [books, setBooks] = useState({
    name: "",
  });

  const [result, setResult] = useState([]);

  useEffect(() => {}, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBooks({ name: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    API.searchBook(books.name)
      .then((res) => {
        const searchRes = res.data.items.filter((item) => item);
        setResult(searchRes);
        console.log(searchRes);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="form-group">
        <input onChange={handleInputChange} className="form-control" />
      </div>
      <button
        onClick={handleFormSubmit}
        style={{ float: "right", marginBottom: 10 }}
        className="btn btn-success"
      >
        Search Author
      </button>
      {result.length ? (
        <div>
          {result.map((item) => (
            <BookCard
              key={item.id}
              cardTitle={item.volumeInfo.title}
              description={item.volumeInfo.description}
            />
          ))}
        </div>
      ) : (
        <h3>Please wait while Google API renders results</h3>
      )}
    </>
  );
}

export default Search;
