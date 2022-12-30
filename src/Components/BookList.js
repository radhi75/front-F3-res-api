import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Get_books } from "../redux/Action/BookAction";
import BookCard from "./BookCard";

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Get_books());
  }, [dispatch]);
  const books = useSelector((state) => state.books);
  console.log(books);
  return (
    <div
      style={{
        margin: "10% 30px 20px 10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20%",
      }}
    >
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
