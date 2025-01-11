import AboutRoutes from '../../../lib/routes/SubRoutesAbout';
import SubRoutesGuide from '../../../lib/routes/SubRoutesGuide';
import AddLinks from '../../../lib/scripts/AddLinks';
import AddRoutes from '../../../lib/scripts/AddRoutes';

function About() {
  return (
    <>
      <nav className='internal-links-container'>
        <AddLinks mapLinks={AboutRoutes} baseUrl="/about/" />
        <AddLinks mapLinks={SubRoutesGuide} baseUrl="/about/guide/" />
      </nav>
      <AddRoutes mapRoutes={AboutRoutes} />
    </>
  );
}

export default About;
