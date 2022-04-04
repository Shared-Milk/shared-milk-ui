import React from 'react';
import './NetworkError.scss';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
// import { useEffect } from 'react';

const NetworkError = ({ hasError, errorCode }) => {
  console.log('neeed milk errorCode>>>>>', errorCode)
  // const [respCode, setResp] = useState([]);
  // const [hasError, setError] = useState(false);

  // const location = useLocation();
  // console.log('location >>>', location)

  // let URL = location;

  // const makeRequest = () => {

  //   // fetch('https://fe-cors-proxy.herokuapp.com', {
  //   //   headers: {
  //   // "Target-URL": `${URL}`
  //   //   }
  //   // })
  //   fetch(`${URL}`)
  //     .then(response => {
  //       if (!response.ok) {
  //         // console.log(response);
  //         setResp(response.status)
  //         setError(true)
  //         throw new Error(`Error! status: ${response.status}`);
  //       } else {
  //         // console.log(response);
  //         setResp(response.status)
  //         setError(false)
  //         throw new Error(`Not an error! status: ${response.status}`);
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  // async function makeRequest() {
  //   try {
  //     const response = await fetch(`${URL}`);
  
  //     console.log('status code: ', response.status); // 👉️ 200
  
  //     if (!response.ok) {
  //       console.log(response);
  //       setResp(response.status)
  //       setError(true)
  //       throw new Error(`Error! status: ${response.status}`);
  //     } else {
  //       console.log(response);
  //       setResp(response.status)
  //       setError(false)
  //       throw new Error(`Not an error! status: ${response.status}`);
  //     }
  
  //     const result = await response.json()
  //     console.log(result)
  //     return result;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  
  // makeRequest();

  let errorMessage = (
    <section className='main-container error-container'>
      <h2 className='error-message'>{hasError ? `Error Code: ${errorCode}. Oops! Something went wrong. Please refresh or try again later.` : `Not an error ${errorCode}`}</h2>
      <button className='error-button' onClick={() => {window.location.href='/'}}>Go Home</button>
    </section>
  )

  return (
    errorMessage
  )
}

export default NetworkError;