import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import InitialPage from "../pages/InitialPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/pokedex" element={<HomePage />} />
      <Route path="/" element={<InitialPage />} />
    </Routes>
  );
};

export default RoutesMain;
