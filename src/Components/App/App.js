import React from 'react';
import './App.scss';
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Routes, Route } from 'react-router-dom';

const App = () => {
 return (
   <div className="App">
     <Header />
     <Routes>
       <Route path='/' element={<HomePage />}/>
     </Routes>
     <Footer />
  </div>
 )
}

export default App;
