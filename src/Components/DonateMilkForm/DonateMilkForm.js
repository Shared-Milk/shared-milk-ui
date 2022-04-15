import './DonateMilkForm.scss';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_DONOR } from '../../Graphql/Mutations.js';
import { GET_ALL_DONORS } from '../../Graphql/Queries';
import { useForm } from 'react-hook-form';


const DonateMilkForm = () => {
  const [createUser] = useMutation(CREATE_DONOR);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const isEmpty = Object.keys(errors).length === 0;
  
  const onSubmit = async (data) => {
    let smoker = parseInt(data.smoker)
    if (isEmpty && smoker) {
      return navigate('/sorry');
    } else if (isEmpty && !smoker) {
      let result;
      try {
        result = await createNewDonor(data);
      } catch(error) {
        const errorMsg = 'Wahhhhhh! We had trouble with your submission. Please try again later.';
        return navigate('/thank-you', { state: errorMsg })
      }
      return navigate('/thank-you', { state: result })
    } 
  };

  const createNewDonor = async (data) => {
    await createUser({
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
    return 'Thank you for offering to donate milk. An eager parent will be in contact with you soon!'
  }
  
  return (
    <form className='donor-form animate__animated animate__fadeInRight' data-testid='donor-form' onSubmit={ handleSubmit(onSubmit) }>
      <label htmlFor='Your Name'>Your Name</label>
      <input type='text'
        {...register('donorName', {
          required: `* Is the baby-brain that bad?`,
            pattern: {
              value: /^[A-Z a-z -]+$/,
              message: `* We are not defined by numbers, only letters`
            }
        })}
        placeholder='First & Last Name' />
      <p className='error' data-testid='donor-name-error'>{ errors.donorName?.message }</p>
      <label htmlFor='Email Address'>Email Address</label>
      <input type='email'
        {...register('donorEmail', {
          required: `* Oh, fer cryin' out loud. We don't do snail mail. Just enter your email.`,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: `* Are you sure this is your email? It doesn't match an email format.`
            }
        })}
          placeholder='Email Address' />
      <p className='error' data-testid='donor-email-error'>{ errors.donorEmail?.message }</p>
      <label htmlFor='Phone Number'>Phone Number</label>
      <input type='tel'
        {...register('donorPhone', {
          required: `* Can I have yo number??`,
            pattern: {
              value: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
              message: `* That's one smelly diaper! Enter a valid US phone number`
            }
        })}
          onKeyPress={ (e) => !/[0-9]/.test(e.key) && e.preventDefault() }
          placeholder='Phone Number' />
      <p className='error' data-testid='donor-phone-error'>{ errors.donorPhone?.message }</p>
      <label htmlFor='Location'>Location</label>
      <input type='text'
        {...register('donorLocation', {
          required: `* Ope! We can't find you. Peekaboo!`,
            pattern: {
              value: /^[A-Za-z]+,[ ]?[A-Za-z]{2,}$/,
              message: `* Is the wee one trying to type again? You might need to teach some formatting.`
            }
        })}
          placeholder='Location (i.e. Denver, CO)' />
      <p className='error' data-testid='donor-location-error'>{ errors.donorLocation?.message }</p>
      <p className='form-question' data-testid='smoker-question'>Have you used any tobacco products in the last 6 weeks?</p>
      <div className='form-group'>
        <label htmlFor='no'>NO</label>
        <input type='radio'
          value='0' 
          data-testid='donor-smoker-no'
          id='no'
          {...register('smoker', {
            required: `* Did you go out for a smoke?`
          })} />
        <label htmlFor='yes'>YES</label>
        <input type='radio'
          value='1'
          data-testid='donor-smoker-yes'
          id='yes'
          {...register('smoker', {
            required: `* Did you go out for a smoke?`
          })} />
      </div>
      <p className='error' data-testid='donor-smoker-error'>{ errors.smoker?.message }</p>
      <label htmlFor='message'>Message</label>
      <textarea type='text'
        data-testid='donor-bio-input'
        {...register('donorBio', {
          required: `* Seriously though, tell us about yourself. Don't be sketchy`
        })}
        placeholder='Tell us about yourself. Why are you donating? How much milk do you have available?' />
      <p className='error' data-testid='donor-bio-error'>{ errors.donorBio?.message }</p>
      <button className='button' data-testid='donate-submit-button' type='submit'>Submit</button>
    </form>
  )
};

export default DonateMilkForm;
