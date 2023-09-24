import Header from "./components/001header/Header";
import routing from "./components/methods/routing";
import mainroutes from "./components/00pages/mainrouter";

const App = () => {
  return (
    <>
      <Header />

      {routing(mainroutes)}
    </>
  );
};

export default App;
