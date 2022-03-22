import { NavLink } from 'react-router-dom';
import './Home.css';
const HomePage = () =>
{       
  return(
    <div className='home-container'>
      <div className="left">
        <h1>Grow Your business with</h1>
        <h1><span>Shivam Pandey</span></h1>
        <h3>We are team of talented devloper making websites</h3>
        <NavLink to="/service"><button>Get Started</button></NavLink>
      </div>
      <div className="right">
        <img src="https://vocalslocal.com/static/media/group-working.129f1ea7.gif" alt="Group working" />
      </div>
    </div>
  );
}
export default HomePage;