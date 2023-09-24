import { Routes, Route } from "react-router-dom";

const routing = (routes) => {
  return (
    <>
      <Routes>
        {routes.map((item, index) => {
          return <Route key={index} path={item.path} element={item.element} />;
        })}
      </Routes>
    </>
  );
};

export default routing;
