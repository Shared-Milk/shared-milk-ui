import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {
   ApolloClient,
   InMemoryCache,
   ApolloProvider,
   HttpLink,
   from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import ScrollToTop from './ScrollToTop';

// Nav Bar Imports
import HomePage from '../HomePage/HomePage';
import NeedMilk from '../NeedMilk/NeedMilk';
import Donate from '../DonateMilk/DonateMilk';
import About from '../About/AboutPage/About';
import TeamPage from '../MeetTheTeam//TeamPage';
import Support from '../SupportPage/Support';
import Sidebar from '../MobileMenu/MobileMenu';

//Prompt Page Imports
import MilkRequestForm from '../MilkRequestForm/MilkRequestForm';
import ConfirmationMessage from '../ConfirmationMessages/ConfirmationMessage';
import DonorThankYou from '../ConfirmationMessages/DonorThankYou';
import DonorSorry from '../ConfirmationMessages/DonorSorry';
import Profile from '../MeetTheTeam/ProfilePage/Profile';
import NotFound from '../NotFound/NotFound';

const errorLink = onError(({ graphqlErrors }) => {
  if(graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
       console.log(`Graphql error: ${ message }`)
       return message;
    });
  }
});

const link = from([
   errorLink,
   new HttpLink({ uri: 'https://shared-milk-pi.herokuapp.com/graphql' })
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const App = () => {
   return (
      <ApolloProvider client={client}>
         <ScrollToTop /> 
         <main className='App'>
            <div className='desktop-hidden'>
               <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            </div>
            <div id='page-wrap'>
               <Header id='outer-container' />
               <Routes>
                  <Route path='/' element={<HomePage />}/>
                  <Route path='need-milk' element={<NeedMilk />}/>
                  <Route path='donate' element={<Donate />}/>
                  <Route path='about' element={<About />}/>
                  <Route path='our-team' element={<TeamPage />}/>
                  <Route path='support' element={<Support />}/>
                  <Route path='contact' element={<MilkRequestForm />}/>
                  <Route path='sent-confirmation' element={<ConfirmationMessage />}/>
                  <Route path='thank-you' element={<DonorThankYou />}/>
                  <Route path='sorry' element={<DonorSorry />}/>
                  <Route path='our-team/*' element={<Profile />}/>
                  <Route path='*' element={<NotFound />}/>
               </Routes>
               <Footer />
            </div>
         </main>
      </ApolloProvider>
   );
};

export default App;