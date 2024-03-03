import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage/AdminPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/AdminPage/LoginPage/LoginPage';


function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/admin' element={<AdminPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
