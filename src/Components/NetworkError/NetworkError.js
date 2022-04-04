import React from 'react';
import './NetworkError.scss';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
// import { useEffect } from 'react';

const NetworkError = () => {
  const [respCode, setResp] = useState([]);
  const [hasError, setError] = useState(false);

  const location = useLocation();
  console.log('location >>>', location)

  let URL = location;

  const makeRequest = () => {
    fetch(`${URL}`)
      .then(response => {
        if (!response.ok) {
          // console.log(response);
          setResp(response.status)
          setError(true)
          throw new Error(`Error! status: ${response.status}`);
        } else {
          // console.log(response);
          setResp(response.status)
          setError(false)
          throw new Error(`Not an error! status: ${response.status}`);
        }
      })
        .catch(err => {
          console.log(err)
        })
  }

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
  
  makeRequest();

  // const findError = () => {
  //   return fetch(Promise).then(response => {
  //     return checkForError(response)
  //     // return response
  //     // setData([...response])
  //   })
  // }

  // const checkForError = (response) => {
  //   let errorMessage;
  //   if ((!response.ok && response.status >= 400) && response.status < 500) {
  //     return errorMessage = (`${response.status} Error. Sorry, the page you're looking for doesn't seem to exist.`)
  //   } else if (!response.ok && response.status >= 500) {
  //     return errorMessage = (`${response.status} Error. Something went wrong. Please try again!`)
  //   } else if (!response.ok) {
  //     // Possibly refactor to account for 422 errors
  //     return errorMessage = (`${response.status} Error. Something went wrong! Please refresh your page or clear your cache. If that doesn't work please try again later!`)
  //   } else {
  //     // return response
  //     return errorMessage = `${response.status}`
  //   }
  //   console.log(errorMessage)
  // }

  let errorMessage = (
    <section className='main-container error-container'>
      <h2 className='error-message'>{hasError ? `Error Code: ${respCode}. Oops! Something went wrong. Please refresh or try again later.` : `Not an error ${respCode}`}</h2>
      <button className='error-button' onClick={() => {window.location.href='/'}}>Go Home</button>
    </section>
  )

  return (
    errorMessage
  )
}

export default NetworkError;