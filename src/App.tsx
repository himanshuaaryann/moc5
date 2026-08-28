import { HashRouter, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/Home";
import Vegetables from "./pages/Vegetables";
import Fruits from "./pages/Fruits";
import Pulses from "./pages/Pulses";
import Grains from "./pages/Grains";
import Powders from "./pages/Powders";
import FarmPlots from "./pages/FarmPlots";
import About from "./pages/About";
import OurFarm from "./pages/OurFarm";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import ProtectedRoute from "./pages/admin/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

export default function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <HashRouter>
            <ScrollToTop />
            <PageTransition />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vegetables" element={<Vegetables />} />
              <Route path="/fruits" element={<Fruits />} />
              <Route path="/pulses" element={<Pulses />} />
              <Route path="/grains" element={<Grains />} />
              <Route path="/powders" element={<Powders />} />
              <Route path="/farm-plots" element={<FarmPlots />} />
              <Route path="/about" element={<About />} />
              <Route path="/our-farm" element={<OurFarm />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </HashRouter>
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}
