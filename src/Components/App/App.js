import React from 'react';
import './App.scss';
import HomePage from '../HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
 return (
   <main className="App">
     <Routes>
       <Route path='/' element={<HomePage />} />
     </Routes>
  </main>
 )
}

export default App;
