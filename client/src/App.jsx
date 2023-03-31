import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<SignUp />} />
        <Route path='/' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
