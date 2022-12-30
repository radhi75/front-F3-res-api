import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Add_book } from "../redux/Action/BookAction";
const AddBook = () => {
  const dispatch = useDispatch("");

  const [name, setName] = useState("");
  const [numberpage, setNumberpage] = useState(0);
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Add_book({ name, numberpage, image, author, date }));
  };
  console.log(date);
  return (
    <div style={{ marginTop: "10rem" }}>
      <Card style={{ width: "500px", left: "35%" }}>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Number of pages</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Number of pages"
                onChange={(e) => setNumberpage(e.target.value)}
                value={numberpage}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Author name"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </Form.Group>

            <Button variant="warning" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddBook;
