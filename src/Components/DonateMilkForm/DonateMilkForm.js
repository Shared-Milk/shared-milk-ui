import './DonateMilkForm.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_DONOR } from '../../Graphql/Mutations.js';
import { GET_ALL_DONORS } from '../../Graphql/Queries';

const DonateMilkForm = () => {
  const [smoker, setSmoker] = useState();
  const [donorName, setDonorName] = useState();
  const [donorEmail, setDonorEmail] = useState();
  const [donorPhone, setDonorPhone] = useState();
  // const [donorCity, setDonorCity] = useState();
  // const [donorState, setDonorState] = useState();
  const [donorBio, setDonorBio] = useState();
  const [donorLocation, setDonorLocation] = useState();

  // const [user, setUser] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   bio: '', 
  //   location: '',
  //   donor_status: smoker
  // })

  const [createUser, { error }] = useMutation(CREATE_DONOR)

  const createNewDonor = () => {
    createUser({
      variables: {
        name: donorName,
        email: donorEmail,
        phone: donorPhone,
        bio: donorBio,
        location: donorLocation,
        donorStatus: 0
      },
      refetchQueries: [{ query: GET_ALL_DONORS }],
      options: {
        awaitRefetchQueries: true
      }
    })
    if (error) {
      console.log(error)
    }
  }

  const handleSmoker = (event) => {
    setSmoker(event.target.value)
    return smoker
  }

  const handleDonorName = (event) => {
    setDonorName(event.target.value)
    return donorName
  }

  const handleDonorEmail = (event) => {
    setDonorEmail(event.target.value)
    return donorEmail
  }

  const handleDonorPhone = (event) => {
    setDonorPhone(event.target.value)
    return donorPhone
  }

  // const handleDonorCity = (event) => {
  //   setDonorCity(event.target.value)
  //   return donorCity
  // }

  // const handleDonorState = (event) => {
  //   setDonorState(event.target.value)
  //   return donorState
  // }

  const handleDonorLocation = (event) => {
    setDonorLocation(event.target.value);
    return donorLocation
  }


  const handleDonorBio = (event) => {
    setDonorBio(event.target.value)
    return donorBio
  }

  const navigate = useNavigate();

  const handleDonorSubmit = (event) => {
    event.preventDefault();
    if (smoker === 'yes') {
      return navigate('/sorry')
    } else if (smoker === 'no') {
      createNewDonor();
      return navigate('/thank-you')
    }
  }

  return (
    <form className='donor-form'>
      <label htmlFor='Your Name'>Your Name</label>
      <input type='text' placeholder='First & Last Name' onChange={(event) => { handleDonorName(event) }}/>
      <label htmlFor='Email Address'>Email Address</label>
      <input type='email' placeholder='Email Address' onChange={(event) => { handleDonorEmail(event) }} />
      <label htmlFor='Phone Number'>Phone Number</label>
      <input type='tel' placeholder='Phone Number' onChange={(event) => { handleDonorPhone(event) }} />
      <label htmlFor='Location'>Location</label>
      <input type='text' placeholder='Location' onChange={(event) => { handleDonorLocation(event) }}/>
      <p className='form-question'>Have you used any tobacco products in the last 6 weeks?</p>
      <div className='form-group'>
        <label htmlFor='no'>NO</label>
        <input type='radio' name='smoker' value='no' id='no' onChange={(event) => { handleSmoker(event)}}/>
        <label htmlFor='yes'>YES</label>
        <input type='radio' name='smoker' value='yes' onChange={(event) => {handleSmoker(event)}}/>
      </div>
      <label htmlFor='message'>Message</label>
      <textarea type='text' placeholder='Tell us about yourself. Why are you donating? How much milk do you have available?'  onChange={(event) => { handleDonorBio(event) }}/>
      <button className='button' onClick={(event) => handleDonorSubmit(event)}>Submit</button>
    </form>
  )
};

export default DonateMilkForm;