import './DonateMilkForm.scss';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_DONOR } from '../../Graphql/Mutations.js';
import { GET_ALL_DONORS } from '../../Graphql/Queries';
import { useForm } from 'react-hook-form';

const DonateMilkForm = () => {
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

  return (
    <form className='donor-form' onSubmit={ handleSubmit(onSubmit) }>
      <label htmlFor='Your Name'>Your Name</label>
      <input {...register('donorName', { required: `* Is the baby-brain that bad?` })} type='text' placeholder='First & Last Name' />
      <p className='error'>{ errors.donorName?.message }</p>
      <label htmlFor='Email Address'>Email Address</label>
      <input {...register('donorEmail', { required: `* Oh, fer cryin' out loud. We don't do snail mail. Just enter your email.` })} type='email' placeholder='Email Address' />
      <p className='error'>{ errors.donorEmail?.message }</p>
      <label htmlFor='Phone Number'>Phone Number</label>
      <input {...register('donorPhone', { required: `* Can I have yo number??` })} type='tel' onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} placeholder='Phone Number' />
      <p className='error'>{ errors.donorPhone?.message }</p>
      <label htmlFor='Location'>Location</label>
      <input {...register('donorLocation', { required: `Ope! We can't find you. Peekaboo!` })} type='text' placeholder='Location' />
      <p className='form-question'>Have you used any tobacco products in the last 6 weeks?</p>
      <div className='form-group'>
        <label for='no' htmlFor='no'>NO</label>
          <input id='no' {...register('smoker', { required: `* Did you go out for a smoke?` })} type='radio' name='smoker' value='0' />
        <label for='yes' htmlFor='yes'>YES</label>
         <input id='yes' {...register('smoker', { required: `* Did you go out for a smoke?` })} type='radio' name='smoker' value='1' />
         
      </div>
      <p className='error'>{ errors.smoker?.message }</p>
      <label htmlFor='message'>Message</label>
      <textarea {...register('donorBio', { required: `* Seriously though, tell us about yourself. Don't be sketchy` })} type='text' placeholder='Tell us about yourself. Why are you donating? How much milk do you have available?' />
      <p className='error'>{ errors.donorBio?.message }</p>
      <button className='button' type='submit'>Submit</button>
    </form>
  )
};

export default DonateMilkForm;