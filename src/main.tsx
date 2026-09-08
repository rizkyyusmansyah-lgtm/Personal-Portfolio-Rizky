import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/globals.css';

// Apply theme before paint to prevent flash
const savedTheme = localStorage.getItem('portfolio-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = savedTheme || (prefersDark ? 'dark' : 'dark'); // default: dark
if (theme === 'dark') {
  document.documentElement.classList.add('dark');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
