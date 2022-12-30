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
export const Add_book = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/book/add", data);
    dispatch(Get_books());
  } catch (error) {
    console.log(error);
  }
};
export const Delete_book = (id) => async (dispatch) => {
  try {
    await axios.delete(`/book/del/${id}`);
    dispatch(Get_books());
  } catch (error) {
    console.log(error);
  }
};
export const Edit_book = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`book/edit/${id}`, data);
    dispatch(Get_books());
  } catch (error) {
    console.log(error);
  }
};
