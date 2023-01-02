import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./components/CartPage/CartPage";

import Header from "./components/header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import ShopPage from "./screens/ShopPage/ShopPage";

const App = () => {
  return (
    <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/shop" element={<ShopPage />} /> 
        <Route path="/cart" element={<CartPage />} /> 
        
      </Routes>
    </main>
  </Router>
  );
};

export default App;
