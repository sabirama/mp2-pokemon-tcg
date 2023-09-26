import Header from "./components/001header/Header";
import routing from "./components/methods/routing";
import mainroutes from "./components/00pages/mainrouter";
import Footer from "./components/002footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />

      {routing(mainroutes)}

      <Footer />
    </>
  );
};

export default App;
