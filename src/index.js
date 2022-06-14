import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import Home from '../src/pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Error404 from './pages/Error404/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id"  element={<Dashboard />} />
        <Route path="*" element={<Error404 message="La page que vous demandez n'existe pas" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
