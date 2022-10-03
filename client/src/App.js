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
export const AppContext = React.createContext();

function App() {
  // To ensure that use cookies and sessions
  Axios.defaults.withCredentials = true;

  const [site, setSite] = useState("spring");

  return (
    <AppContext.Provider>
      <div id="App">
        <ScrollToTop/>
        <Header />

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
          </Routes>
        <Footer />
      </div>
      
    </AppContext.Provider>
  );
}

export default App;