import './SupportLink.scss';

const SupportLink = () => {
  return (
    <section data-testid='support-links' className='support-links animate__animated animate__fadeInUpBig'>
      <button data-testid='lll-link' className='support-button' onClick={ () => window.open('https://www.lllusa.org/', '_blank') }>La Leche League, USA</button>
      <button data-testid='medela-link'className='support-button' onClick={ () => window.open('https://www.medela.us', '_blank') }>Medela</button>
      <button data-testid='nest-link' className='support-button' onClick={ () => window.open('https://www.nestcollaborative.com', '_blank') }>Nest Collaborative</button>
      <button data-testid='wic-link' className='support-button' onClick={ () => window.open('https://wicbreastfeeding.fns.usda.gov/', '_blank') }>WIC Breastfeeding Support</button>
      <button data-testid='postpartum-link' className='support-button' onClick={ () => window.open('https://www.postpartum.net/', '_blank') }>Postpartum Support International</button>
      <button data-testid='mayo-link' className='support-button' onClick={ () => window.open('https://www.mayoclinic.org/diseases-conditions/postpartum-depression/symptoms-causes/syc-20376617', '_blank') }>Mayo Clinic</button>
      <button data-testid='lll-link' className='support-button' onClick={ () => window.open('https://www.womenshealth.gov/mental-health/mental-health-conditions/postpartum-depression', '_blank') }>Women’s Health</button>
      <button data-testid='new-mom-link' className='support-button' onClick={ () => window.open('https://newmomhealth.com/', '_blank') }>4th Trimester Project</button>
      <button data-testid='suicide-hotline-number' className='support-button' onClick={ () => window.open('tel:18002738255', '_blank') }>National Suicide Prevention Hotline:  1-800-273-TALK (8255)</button>
    </section>
  );
};

export default SupportLink;
