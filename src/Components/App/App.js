import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
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
// import { gql, useQuery } from '@apollo/client';

// Nav Bar Imports
import HomePage from '../HomePage/HomePage';
import NeedMilk from '../NeedMilk/NeedMilk';
import Donate from '../DonateMilk/DonateMilk';
import About from '../About/AboutPage/About';
import Support from '../SupportPage/Support';
import Sidebar from '../MobileMenu/MobileMenu';

//Prompt Page Imports
import MilkRequestForm from '../MilkRequestForm/MilkRequestForm';
import ConfirmationMessage from '../ConfirmationMessages/ConfirmationMessage';
import DonorThankYou from '../ConfirmationMessages/DonorThankYou';
import DonorSorry from '../ConfirmationMessages/DonorSorry';
import Profile from '../About/ProfilePage/Profile';
import NetworkError from '../NetworkError/NetworkError';

const errorLink = onError(({ graphqlErrors, networkError }) => {
   if(graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
         console.log(`Graphql error: ${ message }`)
         return message
      })
   }
})

const link = from([
   errorLink,
   new HttpLink({ uri: 'https://secret-forest-87730.herokuapp.com' })
])

const client = new ApolloClient({
   cache: new InMemoryCache(), 
   link: link 
})

const App = () => {
   const [respCode, setResp] = useState([]);
  const [hasError, setError] = useState(false);

  const location = useLocation();
  console.log('location >>>', location)

  let URL = location;

  async function makeRequest() {
   try {
     const response = await fetch(`${URL}`);
 
     console.log('status code: ', response.status); // 👉️ 200
 
     if (!response.ok) {
       console.log(response);
       setResp(response.status)
       setError(true)
       throw new Error(`Error! status: ${response.status}`);
     } else {
       console.log(response);
       setResp(response.status)
       setError(false)
       throw new Error(`Not an error! status: ${response.status}`);
     }
 
     const result = await response.json()
     console.log(result)
     return result;
   } catch (err) {
     console.log(err);
   }
 }

 makeRequest();

   return (
      <ApolloProvider client={client}>
         <main className='App'>
            <div className='desktop-hidden'>
               <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            </div>
            <div id='page-wrap'>
               <Header id='outer-container' />
               <Routes>
                  <Route path='/' element={<HomePage hasError={hasError} errorCode={respCode}/>}/>
                  <Route path='need-milk' element={<NeedMilk hasError={hasError} errorCode={respCode}/>}/>
                  <Route path='donate' element={<Donate />}/>
                  <Route path='about' element={<About />}/>
                  <Route path='support' element={<Support />}/>
                  <Route path='contact' element={<MilkRequestForm />}/>
                  <Route path='sent-confirmation' element={<ConfirmationMessage />}/>
                  <Route path='thank-you' element={<DonorThankYou />}/>
                  <Route path='sorry' element={<DonorSorry />}/>
                  <Route path='about/*' element={<Profile />}/>
                  <Route path='*' element={<NetworkError hasError={hasError} errorCode={respCode}/>}/>
                  {/* <Route path='/need-milk/*' element={<NetworkError />}/> */}
               </Routes>
               <Footer />
            </div>
         </main>
      </ApolloProvider>
   )
};

export default App;



