import './SupportLink.scss';

const SupportLink = () => {
  return (
    <section className='support-links'>
      <button className='support-button' onClick={() => window.open('https://www.lllusa.org/', '_blank')}>La Leche League, USA</button>
      <button className='support-button' onClick={() => window.open('https://www.medela.us', '_blank')}>Medela</button>
      <button className='support-button' onClick={() => window.open('https://www.nestcollaborative.com', '_blank')}>Nest Collaborative</button>
      <button className='support-button' onClick={() => window.open('https://wicbreastfeeding.fns.usda.gov/', '_blank')}>WIC Breastfeeding Support</button>
      <button className='support-button' onClick={() => window.open('https://www.postpartum.net/', '_blank')}>Postpartum Support International</button>
      <button className='support-button' onClick={() => window.open('https://www.mayoclinic.org/diseases-conditions/postpartum-depression/symptoms-causes/syc-20376617', '_blank')}>Mayo Clinic</button>
      <button className='support-button' onClick={() => window.open('https://www.womenshealth.gov/mental-health/mental-health-conditions/postpartum-depression', '_blank')}>Women’s Health</button>
      <button className='support-button' onClick={() => window.open('https://newmomhealth.com/', '_blank')}>4th Trimester Project</button>
      <button className='support-button' onClick={() => window.open('tel:18002738255', '_blank')}>National Suicide Prevention Hotline:  1-800-273-TALK (8255)</button>
    </section>
  )
};

export default SupportLink;      