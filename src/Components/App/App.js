import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// Nav Bar Imports
import HomePage from '../HomePage/HomePage';
import NeedMilk from '../NeedMilk/NeedMilk';
import Donate from '../DonateMilk/DonateMilk';
import About from '../About/About';
import Support from '../SupportPage/Support';

//Prompt Page Imports
import MilkRequestForm from '../MilkRequestForm/MilkRequestForm';
import ConfirmationMessage from '../ConfirmationMessages/ConfirmationMessage';
import DonorThankYou from '../ConfirmationMessages/DonorThankYou';
import DonorSorry from '../ConfirmationMessages/DonorSorry';

const App = () => {
 return (
   <main className="App">
     <Header />
     <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='need-milk' element={<NeedMilk />}/>
        <Route path='donate' element={<Donate />}/>
        <Route path='about' element={<About />}/>
        <Route path='support' element={<Support />}/>
        <Route path='contact' element={<MilkRequestForm />}/>
        <Route path='sent-confirmation' element={<ConfirmationMessage />}/>
        <Route path='thank-you' element={<DonorThankYou />}/>
        <Route path='sorry' element={<DonorSorry />}/>
     </Routes>
     <Footer />
  </main>
 )
}

export default App;
