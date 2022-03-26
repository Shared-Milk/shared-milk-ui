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
import {onError} from '@apollo/client/link/error'

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

const errorLink = onError(({graphqlErrors, networkError}) => {
   if(graphqlErrors) {
      graphqlErrors.map(({message, location, path}) => {
         return console.log(`Graphql error: ${message}`)
      })
   }
})

const link = from([
   errorLink,
   new HttpLink({ uri: 'https://d62af07c-6e04-49ca-a5bd-846d40736f3e.mock.pstmn.io/graphql' })
])

const client = new ApolloClient({
   cache: new InMemoryCache(), 
   link: link 
})

const App = () => {
   return (
      <ApolloProvider client={client}>   
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
      </ApolloProvider>
   )
}

export default App;
