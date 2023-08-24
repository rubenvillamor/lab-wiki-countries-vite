import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";


function App() {
  return (
    <>
      <div className="App">
        <h1>LAB | React WikiCountries</h1>
      </div>
      <nav>
        <Link to="/">HomePage</Link>
        <Link to="/someCountryId">CountryDetailsPage</Link> 
      </nav>
      console.log()

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:countryId" element={<CountryDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;