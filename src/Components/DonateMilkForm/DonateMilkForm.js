import './DonateMilkForm.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_DONOR } from '../../Graphql/Mutations';

const DonateMilkForm = () => {
  const [smoker, setSmoker] = useState();
  // const [donorName, setDonorName] = useState();
  // const [donorEmail, setDonorEmail] = useState();
  // const [donorPhone, setDonorPhone] = useState();
  // const [donorCity, setDonorCity] = useState();
  // const [donorState, setDonorState] = useState();
  // const [donorBio, setDonorBio] = useState();
  // const [donorLocation, setDonorLocation] = useState();

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '', 
    location: '',
  })

  const [createUser, { error }] = useMutation(CREATE_DONOR, 
    {   
      variables: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      bio: user.bio,
      location: user.location
    }});

  const createNewDonor = () => {
    console.log('here', user)
    createUser({
      variables: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        bio: user.bio,
        location: user.location
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

  const handleChange = (event) => {
    setUser({ [event.target.name]: event.target.value });
    return user
  }

  // const handleDonorName = (event) => {
  //   setDonorName(event.target.value)
  //   return donorName
  // }

  // const handleDonorEmail = (event) => {
  //   setDonorEmail(event.target.value)
  //   return donorEmail
  // }

  // const handleDonorPhone = (event) => {
  //   setDonorPhone(event.target.value)
  //   return donorPhone
  // }

  // const handleDonorCity = (event) => {
  //   setDonorCity(event.target.value)
  //   return donorCity
  // }

  // const handleDonorState = (event) => {
  //   setDonorState(event.target.value)
  //   return donorState
  // }

  // const handleDonorLocation = (event) => {
  //   setDonorLocation(event.target.value);
  //   return donorLocation
  // }

  // const handleDonorBio = (event) => {
  //   setDonorBio(event.target.value)
  //   return donorBio
  // }

  const navigate = useNavigate();

  const handleDonorSubmit = () => {
    console.log('herereee non smoker')
    if (smoker === 'yes') {
      console.log('smoker here')
      return navigate('/sorry')
    } else if (smoker === 'no') {
      createNewDonor();
      return navigate('/thank-you')
    }
  }

  return (
    <form className='donor-form'>
      <label htmlFor='Your Name'>Your Name</label>
      <input type='text' name='name' placeholder='First & Last Name' onChange={ (event) => { handleChange(event) } }/>
      <label htmlFor='Email Address'>Email Address</label>
      <input type='email' name='email' placeholder='Email Address' onChange={ (event) => { handleChange(event) } } />
      <label htmlFor='Phone Number'>Phone Number</label>
      <input type='tel' name='phone' placeholder='Phone Number' onChange={ (event) => { handleChange(event) } } />
      {/* <label htmlFor='City'>City</label> */}
      {/* <input type='text' name='' placeholder='City' onChange={ (event) => { handleDonorCity(event) } }/>
      <label htmlFor='State'>State</label>
      <input type='text' name='' placeholder='State' onChange={ (event) => { handleDonorState(event) } }/> */}
      <label htmlFor='City and State'>Location</label>
      <input type='text' name='location' placeholder='City, State (i.e. Denver, CO)' onChange={ (event) => { handleChange(event) } } />
      <p className='form-question'>Have you used any tobacco products in the last 6 weeks?</p>
      <div className='form-group'>
        <label htmlFor='yes'>YES</label>
        <input type='radio' name='smoker' value='yes' onChange={ (event) => { handleSmoker(event) } }/>
        <label htmlFor='no'>NO</label>
        <input type='radio' name='smoker' value='no' id='no' onChange={ (event) => { handleSmoker(event) } }/>
      </div>
      <label htmlFor='message'>Message</label>
      <textarea placeholder='Tell us about yourself. Why are you donating? How much milk do you have available?' onChange={ (event) => { handleChange(event) } }/>
      <button className='button' onClick={ (event) => {
        event.preventDefault()
        console.log('hereeeee 133')
        handleDonorSubmit()
      } }>Submit</button>
    </form>
  )
};

export default DonateMilkForm;