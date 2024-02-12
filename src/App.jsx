import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage/HomePage";
import React from 'react';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:countryId" element={<CountryDetailsPage />} />
      </Routes>


    </div>
  );
}

export default App;
