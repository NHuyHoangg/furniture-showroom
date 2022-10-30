import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Axios from "axios";
import Header from "./components/headerFooter/header";
import Homepage from "./components/publicPage/homepage";
import User from "./components/user/user";
import Collection from "./components/publicPage/collection";
import AboutUs from "./components/publicPage/aboutUs";
import ScrollToTop from "./utils/scrollToTop";
import Product from "./components/publicPage/product";
import Footer from "./components/headerFooter/footer";
import Admin from "./components/admin/admin";
import Checkout from "./components/cart/checkout"
import ProductDetail from "./components/publicPage/productDetail";
export const AppContext = React.createContext();

function App() {
  // To ensure that use cookies and sessions
  Axios.defaults.withCredentials = true;

  const [site, setSite] = useState("spring");
  const [user, setUser] = useState({});

  return (
    <AppContext.Provider>
      <div id="App">
        <ScrollToTop/>
        <Header setUser={setUser}/>
        <Routes>
          <Route index element={<Homepage site={site} setSite={setSite} />} />
          <Route path="user/history" element={<User tab={"history"} />} />
          <Route path="user/info" element={<User tab={"info"} />} />
          <Route path="user" element={<Navigate to="info" />} />
          <Route
            path={"collection-detail/" + site}
            element={<Collection site={site} />}
          />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="product" element={<Product />} />
          <Route path="product-detail" element={<ProductDetail />}/>
          <Route path="admin/manage-users" element={<Admin tab={"manage-users"} />} />
          <Route path="admin/manage-items" element={<Admin tab={"manage-items"} />} />
          <Route path="admin/manage-history" element={<Admin tab={"manage-history"} />} />
          <Route path="admin" element={<Navigate to="manage-users" />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
      
    </AppContext.Provider>
  );
}

export default App;