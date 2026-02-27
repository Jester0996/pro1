import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";

import "./style.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;