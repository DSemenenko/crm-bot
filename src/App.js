import React, { useState, useEffect } from "react";
import './App.css';
import Base from "./Components/Base/Base";
import ClipLoader from "react-spinners/ClipLoader";


function App() {
  // const[loading, setLoading] = useState(false)
  // useEffect(()=>{
  //   setLoading(true)
  //   setTimeout(()=>{
  //     setLoading(false)
  //   }, 500)
  // }, [])


  return (
    <div className="App">
      {/* {
        loading?
        <ClipLoader
          color={'#000  '}
          loading={loading}
          size={150}
        />
        : */}
        <Base/>
    </div>
  );
}

export default App;
