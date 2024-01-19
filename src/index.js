import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from'react-router-dom';
import routes from './Components/Routes';

const router = createBrowserRouter(routes);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

