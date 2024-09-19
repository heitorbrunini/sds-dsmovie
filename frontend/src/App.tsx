import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react';
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import About from 'pages/About'
import Navbar from './components/navbar';
import Contact from "pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/about" element= {<About/>}/>
        <Route path="/contact" element= {<Contact/>}/>
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
