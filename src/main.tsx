import { createRoot } from 'react-dom/client'
import { HashRouter as Router } from "react-router-dom";

import './index.css'
import App from './App.tsx'
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  ,
)