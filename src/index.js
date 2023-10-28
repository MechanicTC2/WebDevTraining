import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/home';
import Two from './routes/two';
import './public/stylesheets/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * @since 2023-10-28
 * @author Nathan Kwok
 * @version v1.0.0
 * 
 * 2637 WebDev training example; showcases React Router setup.
 */
export default function App() { //set up routes for multiple pages
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="2" element={<Two />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);