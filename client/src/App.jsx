import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
