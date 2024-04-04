import React from "react";
import Example from "./Example";
import Home from "./Home";
import Success from "./Success"; // Success bileşenini import edin
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="/home" element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
};

export default App;
