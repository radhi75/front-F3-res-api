import React from "react";
import "./Book.css";
const BookCard = ({ book }) => {
  return (
    <div>
      <div className="team">
        <div className="carde">
          <div className="card-content">
            <h2 className="card-title">{book.name}</h2>
            <p className="card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              nisi corrupti nam corporis possimus vero laborum distinctio,
              soluta quas cum est aut saepe quibusdam optio incidunt maiores,
              iste doloremque eos!
            </p>
            <a href="#" className="button">
              {book.author}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
