import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import App2 from './App2';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <React.StrictMode>
    <App2 />
  // </React.StrictMode>
);