import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const firebaseConfig = {
  apiKey: '',
  authDomain: 'mw-technologies.firebaseapp.com',
  projectId: 'mw-technologies',
  storageBucket: 'mw-technologies.appspot.com',
  messagingSenderId: '45295475502',
  appId: '1:45295475502:web:a654633fdfef63ba8f38bf',
  measurementId: 'G-CJG61E8JC4'
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

analytics.app;
