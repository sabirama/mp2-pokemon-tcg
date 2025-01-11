import { Routes, Route } from "react-router-dom";
import { PropTypes } from "prop-types";

function AddRoutes({ mapRoutes }) {
  return (
    <Routes>
      {mapRoutes.map((route, key) => (
        <Route key={key} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
}

AddRoutes.propTypes = {
  mapRoutes: PropTypes.array.isRequired,
};

export default AddRoutes;
