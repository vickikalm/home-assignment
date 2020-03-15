import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/form/form";
//import Search from "./components/search/search";
import ReviewsListContainer from "./components/reviews/reviewsListContainer";

//<Search />
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
        <ReviewsListContainer />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
