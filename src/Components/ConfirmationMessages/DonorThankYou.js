import { useLocation } from 'react-router-dom';

const DonorThankYou = () => {
  const { state } = useLocation();

  return (
    <article className="main-container error-container">
      <h2 className='error-message'>{ state }</h2>
      <button className='error-button' onClick={() => {window.location.href='/'}}>Go Back Home</button>
    </article>
  ) 

};

export default DonorThankYou;