import './SupportLink.scss';
import { Link } from 'react-router-dom';

const SupportLink = () => {
  return (
    <section className='support-links'>
      <Link exact to='https://www.lllusa.org/' target='_blank' className='circle-button'>La Leche League, International</Link>
      <Link exact to='https://www.medela.us' target='_blank' className='circle-button'>Medela</Link>
      <Link exact to='https://www.nestcollaborative.com' target='_blank' className='circle-button'>Nest Collaborative</Link>
      <Link exact to='https://wicbreastfeeding.fns.usda.gov/' target='_blank' className='circle-button'>WIC Breastfeeding Support</Link>
      <Link exact to='https://www.postpartum.net/' target='_blank' className='circle-button'>Postpartum Support International</Link>
      <Link exact to='https://www.mayoclinic.org/diseases-conditions/postpartum-depression/symptoms-causes/syc-20376617' target='_blank' className='circle-button'>Mayo Clinic</Link>
      <Link exact to='https://www.womenshealth.gov/mental-health/mental-health-conditions/postpartum-depression' target='_blank' className='circle-button'>Women’s Health</Link>
      <Link exact to='https://newmomhealth.com/' target='_blank' className='circle-button'>4th Trimester Project</Link>
      <Link exact to='tel:18002738255' className='circle-button'>National Suicide Prevention Hotline:  1-800-273-TALK (8255)</Link>
    </section>
  )
};

export default SupportLink;      