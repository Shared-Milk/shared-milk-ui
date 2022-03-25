import './MilkRequestForm.scss';

const MilkRequestForm = () => {
  return (
    <form>
      <label for='First Name'>First Name</label>
      <input type='text' placeholder='First Name' />
      <label for='Last Name'>Last Name</label>
      <input type='text' placeholder='Last Name' />
      <label for='Email Address'>Email Address</label>
      <input type='email' placeholder='Email Address' />
      <label for='Phone Number'>Phone Number</label>
      <input type='tel' placeholder='Phone Number' />
      <textarea placeholder='How much milk do you need? When do you need it? Tell your donor more about yourself.' />
      <button type='submit'>Submit</button>
    </form>
  )
};

export default MilkRequestForm;