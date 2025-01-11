import { useState } from 'react';
import Header from './components/commons/header/Header';
import Footer from './components/commons/footer/Footer';
import MainRoutes from './lib/routes/MainRoutes';
import AddRoutes from './lib/scripts/AddRoutes'
import ToTop from './lib/scripts/ToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [theme, setTheme] = useState('');

  return (
    <div className={theme}>
      <Header theme={theme} setTheme={setTheme} />
      {<AddRoutes mapRoutes={MainRoutes} />}
      <Footer />
      <ToTop />
    </div>
  );
}

export default App;
