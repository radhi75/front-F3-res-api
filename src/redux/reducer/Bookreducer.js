import { GET_BOOKS } from "../ActionType/BookType";

const initialState = {
  books: [],
};

const Bookreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BOOKS:
      return { ...state, books: payload.books };
    default:
      return state;
  }
};
export default Bookreducer;
