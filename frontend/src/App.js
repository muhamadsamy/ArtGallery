import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NotFound from "./pages/NotFoundPage.js";
import Login from "./pages/Login.js";
import Register from "./pages/Regiser.js";
import NavigationBar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import ProductDetails from "./components/productDetails.js";
import CartPage from './pages/CartPage.js';
import { CartProvider } from "./context/CartContext.js";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage/>} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
