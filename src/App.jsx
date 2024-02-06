import { useState } from "react";
import "./App.css";
import Modal from "react-bootstrap/Modal";
import Heading from "./components/Heading";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <div className="main-wrapper">
        <div className="container">
          <Heading />
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
