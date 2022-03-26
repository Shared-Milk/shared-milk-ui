import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePage from '../HomePage/HomePage';
import NeedMilk from '../NeedMilk/NeedMilk';
import { Routes, Route } from 'react-router-dom';

const App = () => {
 return (
   <div className="App">
     <Header />
     <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/need-milk' element={<NeedMilk />}/>
     </Routes>
     <Footer />
  </div>
 )
}

export default App;
