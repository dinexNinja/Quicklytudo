import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Leanding from './pages/leanding';
import Adm from './pages/adm';
import Login from './pages/login';
import Menu from './pages/menu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css'; 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Leanding/>} />
    <Route path="/Leanding" element={<Leanding />} />
    <Route path="/Adm" element={<Adm />} />
    <Route path="/Menu" element={<Menu />} />
    <Route path="/Login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
