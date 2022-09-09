import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./components/views/home";
import "./assets/fonts/Canter Bold.otf";
import "./assets/fonts/Canter Bold Shadow.otf";
import "./assets/fonts/Canter Bold 3D.otf";
import "./assets/fonts/Canter Bold Strips.otf";
import "./assets/fonts/Canter Light.otf";
import "./assets/fonts/Canter Outline.otf"
import "./assets/fonts/Flatform_Light.otf";
import "./assets/fonts/Flatstock.ttf";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
