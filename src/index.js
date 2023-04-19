import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import  { BrowserRouter as Router} from 'react-router-dom'
import ScrollToTop from './Components/JS/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
    <React.StrictMode>
    <ScrollToTop />
    <App />
    </React.StrictMode>
</Router>
  
);

