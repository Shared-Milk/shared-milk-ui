import SupportLink from '../SupportLink/SupportLink';

const Support = () => {
  return (
    <article data-testid='page-wrapper' className='main-container support'>
      <h2 data-testid='page-title'>Support Resources</h2>
      <p>If you’re having trouble breastfeeding, you are not alone.</p>
      <p>Help is available for parents and parents-to-be. We’re here for you and have provided some links to our recommended resources below.</p>
      <SupportLink />
    </article>
  )
};

export default Support;