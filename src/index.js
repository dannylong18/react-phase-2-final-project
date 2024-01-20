import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes} from'react-router-dom';
import routes from './Components/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router>
  <Routes>
    {routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={route.Element}
        caseSensitive={false}
      />
    ))}
  </Routes>
</Router>);