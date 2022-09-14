import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Form from "./Components/Forms/Form";
import Cards from "./Components/Cards/Card";

// const tele = window.Telegram.WebApp;


function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <Form/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
