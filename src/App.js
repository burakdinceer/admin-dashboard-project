import { Route, Routes } from "react-router-dom";

import Home from "./pages/homePage/Home";
import Product from "./pages/productPage/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
