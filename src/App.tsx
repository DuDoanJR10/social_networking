import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

const DefaultLayout = Loadable({
  loader: () => import('./layouts/DefaultLayout'),
  loading,
});

const LoginPage = Loadable({
  loader: () => import('./pages/Auth/views/Login'),
  loading,
});

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<DefaultLayout />} />
          <Route path="*" element={<h1>Page 404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
