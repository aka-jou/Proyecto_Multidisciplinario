import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import Solicitud from "./Pages/Solicitud";
import InicioSesion from "./Pages/InicioSesion";
import CategoriesX from "./Pages/Categories";
import RequestsX from "./Pages/Applicants/Requests";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/solicitud" element={<Solicitud />} />
          <Route path="/inicioSesion" element={<InicioSesion />} />
          <Route path="/categories" element={<CategoriesX />} />
          <Route path="/requests" element={<RequestsX/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;