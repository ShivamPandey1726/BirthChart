import { NavLink } from 'react-router-dom';
import './About.css';
const AboutPage = () =>
{       
  return(
    <div>
      <div className='home-container'>
      <div className="left">
        <h1>Welcome to About Page</h1>
        <h1><span>Shivam Pandey</span></h1>
        <h3>We are team of talented devloper making websites</h3>
        <NavLink to="/contact"><button>Contact Here</button></NavLink>
      </div>
      <div className="right">
        <img src="https://vocalslocal.com/static/media/company-discussion.3253db19.gif" alt="Group working" />
      </div>
    </div>
    </div>
  );
}
export default AboutPage;