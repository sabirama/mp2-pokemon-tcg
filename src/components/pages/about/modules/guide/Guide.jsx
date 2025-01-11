import SubRoutesGuide from '../../../../../lib/routes/SubRoutesGuide';
import AddRoutes from '../../../../../lib/scripts/AddRoutes';

function Guide() {
  return (
    <main>
      <AddRoutes mapRoutes={SubRoutesGuide} />
    </main>
  );
}

export default Guide;
