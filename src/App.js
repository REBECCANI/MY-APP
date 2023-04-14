import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dataset from "./pages/about";
import Items from "./pages/home";
import Forma from "./pages/Contact";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/about" element={<Dataset />} />
          <Route path="/Contact" element={<Forma />} />
        </Routes>
      </Router>
    );
  }
}

export default App;