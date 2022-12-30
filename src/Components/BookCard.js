import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { Delete_book, Edit_book } from "../redux/Action/BookAction";
import Modal from "react-bootstrap/Modal";
import "./Book.css";
import Form from "react-bootstrap/Form";
const BookCard = ({ book }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [name, setName] = useState(book.name);
  const [numberpage, setNumberpage] = useState(book.numberpage);
  const [image, setImage] = useState(book.image);
  const [author, setAuthor] = useState(book.author);
  const [date, setDate] = useState(book.date);
  const handleEdit = () => {
    dispatch(
      Edit_book(book._id, { name, numberpage, image, author, date }),
      handleClose()
    );
  };
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
            <a
              href="#"
              className="button"
              onClick={() => dispatch(Delete_book(book._id))}
            >
              delete
            </a>
            <Button variant="warning" onClick={handleShow}>
              EDIT
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Edit</Modal.Title>
              </Modal.Header>
              <Modal.Body>
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
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="warning " onClick={handleEdit}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
