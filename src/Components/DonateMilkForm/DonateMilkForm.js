import './DonateMilkForm.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_DONOR } from '../../Graphql/Mutations.js';
import { useForm } from 'react-hook-form';


const DonateMilkForm = () => {
  // const [smoker, setSmoker] = useState();
  // const [donorName, setDonorName] = useState();
  // const [donorEmail, setDonorEmail] = useState();
  // const [donorPhone, setDonorPhone] = useState();
  // const [donorCity, setDonorCity] = useState();
  // const [donorState, setDonorState] = useState();
  // const [donorBio, setDonorBio] = useState();
  // const [donorLocation, setDonorLocation] = useState();

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const isEmpty = Object.keys(errors).length === 0;
  
  const onSubmit = (data) => {
    let smoker = parseInt(data.smoker)
    if (isEmpty && smoker) {
      return navigate('/sorry')
    } else if (isEmpty && !smoker) {
      createNewDonor(data);
      return navigate('/thank-you')
    }
  };

  // const [user, setUser] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   bio: '', 
  //   location: '',
  //   donor_status: smoker
  // })

  const [createUser, { error }] = useMutation(CREATE_DONOR);

  const createNewDonor = (data) => {
    createUser({
      variables: {
        name: data.donorName,
        email: data.donorEmail,
        phone: data.donorPhone,
        bio: data.donorBio,
        location: data.donorLocation,
        donorStatus: 0
      }
    })
    if (error) {
      console.log(error)
    }
  }

  // const handleSmoker = (event) => {
  //   let value = parseInt(event.target.value)
  //   setSmoker(value)
  //   return smoker
  // }

  // const handleChange = (event) => {
  //   setUser({ [event.target.name]: event.target.value });
  //   return user
  // }

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

  // const handleDonorLocation = (event) => {
  //   setDonorLocation(event.target.value);
  //   return donorLocation
  // }


  // const handleDonorBio = (event) => {
  //   setDonorBio(event.target.value)
  //   return donorBio
  // }


  // const handleDonorSubmit = (event) => {
  //   event.preventDefault();
  //   if (smoker === 'yes') {
  //     return navigate('/sorry')
  //   } else if (smoker === 'no') {
  //     createNewDonor();
  //     return navigate('/thank-you')
  //   }
  // }

  return (
    <form className='donor-form' onSubmit={ handleSubmit(onSubmit) }>
      <label htmlFor='Your Name'>Your Name</label>
      <input {...register('donorName', { required: 'This field required' })} type='text' placeholder='First & Last Name' />
      <p>{ errors.donorName?.message }</p>
      <label htmlFor='Email Address'>Email Address</label>
      <input {...register('donorEmail', { required: 'This field required' })} type='email' placeholder='Email Address' />
      <p>{ errors.donorEmail?.message }</p>
      <label htmlFor='Phone Number'>Phone Number</label>
      <input {...register('donorPhone', { required: 'This field required' })} type='tel' placeholder='Phone Number' />
      <p>{ errors.donorPhone?.message }</p>
      <label htmlFor='Location'>Location</label>
      <input {...register('donorLocation', { required: 'This field is required' })} type='text' placeholder='Location'/>
      <p className='form-question'>Have you used any tobacco products in the last 6 weeks?</p>
      <div className='form-group'>
        <label htmlFor='no'>NO</label>
        <input {...register('smoker', { required: 'This field is required' })} type='radio' name='smoker' value='0' />
        <label htmlFor='yes'>YES</label>
        <input {...register('smoker', { required: 'This field is required' })} type='radio' name='smoker' value='1' />
      </div>
      <p>{ errors.smoker?.message }</p>
      <label htmlFor='message'>Message</label>
      <textarea {...register('donorBio', { required: 'This field required' })} type='text' placeholder='Tell us about yourself. Why are you donating? How much milk do you have available?' />
      <p>{ errors.donorBio?.message }</p>
      <button className='button' type='submit'>Submit</button>
    </form>
  )
};

export default DonateMilkForm;