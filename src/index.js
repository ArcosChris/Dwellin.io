import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/ContactPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App.js/>
    
  </React.StrictMode>
);
