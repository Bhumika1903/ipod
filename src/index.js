import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';



createRoot(document.getElementById('root')).render(<App />);

reportWebVitals();
