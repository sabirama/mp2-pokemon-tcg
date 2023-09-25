import Header from "./components/001header/Header";
import routing from "./components/methods/routing";
import mainroutes from "./components/00pages/mainrouter";
import "./App.css";
import Footer from "./components/002footer/Footer";

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
