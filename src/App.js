import "./App.css";
import AddBook from "./Components/AddBook";
import BookList from "./Components/BookList";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <BookList />
      <AddBook />
    </div>
  );
}

export default App;
