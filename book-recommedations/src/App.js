import React, { useState } from "react";
import "./styles.css";

const booksDatabase = {
  Fiction: [
    {
      name: "The Alchemist",
      author: "Paulo Coelho",
      pages: "181",
      quote:
        "”It's the possibility of having a dream come true that makes life interesting.”",
      photo: "https://m.media-amazon.com/images/I/51Z0nLAfLmL._SY346_.jpg"
    },
    {
      name: "The Kite Runner",
      author: "Khaled Hosseini",
      pages: "372",
      quote: "”For you, a thousand times over”",
      photo: "https://m.media-amazon.com/images/I/41QlgiuLl5L._SY346_.jpg"
    }
  ],
  Poetry: [
    {
      name: "The Air Year",
      author: "Caroline Bird",
      pages: "64",
      photo:
        "https://images-na.ssl-images-amazon.com/images/I/311-0P1t4cL._SX310_BO1,204,203,200_.jpg"
    },
    {
      name: "I Want! I Want!",
      author: "Vicki Feaver",
      pages: "112",
      photo:
        "https://images-na.ssl-images-amazon.com/images/I/31eIWt3I7LL._SX333_BO1,204,203,200_.jpg"
    }
  ],
  Romance: [
    {
      name: "Undercover Bromance",
      author: "Lyssa Kay Adams",
      pages: "352",
      quote: "”Fear is a powerful motivator, but so is love.”",
      photo:
        "https://images-na.ssl-images-amazon.com/images/I/51ud8R5r7pL._SX331_BO1,204,203,200_.jpg"
    },
    {
      name: "The Proposal",
      author: "Jasmine Guillory ",
      pages: "352",
      quote:
        "”I’ve spent so long being afraid of love, because the last time I was in love, the man I loved only loved one part of me, but not all of me, and I thought love meant having to sacrifice a part of yourself. But then I was with you, and you loved every part of me, even the parts I don’t like.”",
      photo:
        "https://images-na.ssl-images-amazon.com/images/I/41zUt6TQSuL._SX331_BO1,204,203,200_.jpg"
    }
  ],
  Mystery: [
    {
      name: "The Hound of the Baskervilles",
      author: "Arthur Conan Doyle ",
      pages: "165",
      quote:
        "“The world is full of obvious things which nobody by any chance ever observes.”",
      photo: "https://m.media-amazon.com/images/I/41Y9xbU6syL.jpg"
    },
    {
      name: "The Da Vinci Code",
      author: "Dan Brown",
      pages: "466",
      quote: "“Everyone loves a conspiracy.”",
      photo: "https://m.media-amazon.com/images/I/5171w-4D2FL.jpg"
    }
  ]
};

let bookArray = Object.keys(booksDatabase);
//console.log(bookArray);

export default function App() {
  var [bookgenre, setGenre] = useState("Fiction");

  //console.log(bookArray)
  function genreHandler(genre) {
    //console.log(genre);
    setGenre(genre);
  }
  // console.log(bookgenre);

  return (
    <div className="App">
      <div className="header">
        <div className="head-text">BOOK RECOMMENDATIONS</div>
        <img
          className="head-img"
          src={
            "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
          }
          alt="cover"
        />
      </div>

      {bookArray.map(function (genre) {
        return (
          <button
            className="btn"
            onClick={() => genreHandler(genre)}
            key={genre}
          >
            {genre}
          </button>
        );
      })}

      {booksDatabase[bookgenre].map(function (b) {
        return (
          <div className="display">
            <section>
              <img className="photo" src={b.photo} alt="book-cover"></img>
              <div className="Bookname">Name : {b.name}</div>
              <div className="author">Author : {b.author}</div>
              <div className="pages">Pages : {b.pages}</div>
              <div className="quote">Quote : {b.quote}</div>
            </section>
          </div>
        );
      })}
      <footer>
        <div>&#169; Made with love &#9829; || Sakshi || 2020</div>
      </footer>
    </div>
  );
}
