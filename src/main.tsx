import { createRoot } from 'react-dom/client'
import { HashRouter as Router } from "react-router-dom";

import './index.css'
import App from './App.tsx'
import React from 'react';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe("your-publishable-key-here");

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </Router>
  </React.StrictMode>
  ,
)