import { GET_BOOKS } from "../ActionType/BookType";
import axios from "axios";
export const Get_books = () => async (dispatch) => {
  try {
    const res = await axios.get("/book/all");
    dispatch({ type: GET_BOOKS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
