import { Route, Routes } from "react-router-dom";

import Home from "./pages/homePage/Home";
import Login from "./pages/loginPage/Login";
import Product from "./pages/productPage/Product";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
