import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Axios from "axios";
import Alert from "./components/helper/alert";
import Header from "./components/headerFooter/header";
import Homepage from "./components/publicPage/homepage";
import User from "./components/user/user";
import Collection from "./components/publicPage/collection";
import AboutUs from "./components/publicPage/aboutUs";
import ScrollToTop from "./utils/scrollToTop";
import Product from "./components/publicPage/product";
import Footer from "./components/headerFooter/footer";
import Admin from "./components/admin/admin";
import Checkout from "./components/cart/checkout";
import ProductDetail from "./components/publicPage/productDetail";
import Error from "./components/helper/error";
import Loading from "./components/helper/loading";
import { Analytics } from "@vercel/analytics/react";

export const AppContext = React.createContext();

function App() {
  // To ensure that use cookies and sessions
  Axios.defaults.withCredentials = true;

  const collectionProduct = ["All", "Spring", "Summer", "Autumn", "Winter"];
  const categoryProduct = ["All", "Sofa", "Table", "Chair", "Storage"];

  //filter
  const [filterCollection, setFilterCollection] = useState(collectionProduct[0]);
  const [filterCategory, setFilterCategory] = useState(categoryProduct[0]);

  //alert
  const [openAlert, setOpenAlert] = useState(true);
  const [alert, setAlert] = useState({ type: "", message: "" });
  
  //loading
  const [openLoading, setOpenLoading] = useState(false);

  //items
  const [items, setItems] = useState([]);

  //collection
  const [site, setSite] = useState(collectionProduct[1]);
  const [springRecommend, setSpringRecommend] = useState([]);
  const [summerRecommend, setSummerRecommend] = useState([]);
  const [autumnRecommend, setAutumnRecommend] = useState([]);
  const [winterRecommend, setWinterRecommend] = useState([]);

  useEffect(() => {
    setOpenLoading(true);
    // Get all of items
    if (items.length === 0) {
      Axios.get("https://hifurdez.vercel.app/all-product")
          .then((response) => {
            setItems(response.data);
          })
          .catch(err => {
              setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
              setOpenAlert(true)
          });            
    }

    // Get recommend items colletion
    if (springRecommend.length === 0) {
      Axios.get("https://hifurdez.vercel.app/product-random-by-spring")
          .then((response) => {
            setSpringRecommend(response.data);
          })
          .catch(err => {
              setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
              setOpenAlert(true)
          });  
    }
    if (summerRecommend.length === 0) {
      Axios.get("https://hifurdez.vercel.app/product-random-by-summer")
          .then((response) => {
            setSummerRecommend(response.data);
          })
          .catch(err => {
              setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
              setOpenAlert(true)
          });  
    }
    if (autumnRecommend.length === 0) {
      Axios.get("https://hifurdez.vercel.app/product-random-by-autumn")
          .then((response) => {
            setAutumnRecommend(response.data);
          })
          .catch(err => {
              setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
              setOpenAlert(true)
          });  
    }
    if (winterRecommend.length === 0) {
      Axios.get("https://hifurdez.vercel.app/product-random-by-winter")
          .then((response) => {
            setWinterRecommend(response.data);
          })
          .catch(err => {
              setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
              setOpenAlert(true)
          });  
    }
    // setOpenLoading(true)
    // Axios.get("/api/auth")
    //     .then((response) => {
    //         setUser(response.data.user)
    //         setOpenLoading(false)
    //     })
    //     .catch(err => {
    //         setOpenLoading(false)
    //     })
    setOpenLoading(false);
  }, [])

  return (
    <AppContext.Provider>
      <div id="App">
        {openAlert && <Alert alert={alert} setOpenAlert={setOpenAlert} />}
        <ScrollToTop />
        <Analytics />
        <Header setSite={setSite} />
        {openLoading ? <Loading /> :
        <Routes>
          <Route
            index
            element={
              <Homepage
                site={site}
                setSite={setSite}
                collectionProduct={collectionProduct}
                setFilterCollection={setFilterCollection}
              />
            }
          />
          <Route path="user/history" element={<User tab={"history"} />} />
          <Route path="user/info" element={<User tab={"info"} />} />
          <Route path="user" element={<Navigate to="info" />} />
          <Route
            path={"collection-detail/" + site}
            element={
              <Collection 
                site={site} 
                springRecommend={springRecommend}
                summerRecommend={summerRecommend}
                autumnRecommend={autumnRecommend}
                winterRecommend={springRecommend}
              />}
          />
          <Route
            path="about-us"
            element={
              <AboutUs setAlert={setAlert} setOpenAlert={setOpenAlert} />
            }
          />
          <Route
            path="product"
            element={
              <Product
                collectionProduct={collectionProduct}
                categoryProduct={categoryProduct}
                filterCollection={filterCollection}
                setFilterCollection={setFilterCollection}
                filterCategory={filterCategory}
                setFilterCategory={setFilterCategory}
                items = {items}
              />
            }
          />
          <Route
            path="product-detail"
            element={
              <ProductDetail
                filterCollection={filterCollection}
                filterCategory={filterCategory}
                setFilterCategory={setFilterCategory}
              />
            }
          />
          <Route
            path="admin/manage-users"
            element={<Admin tab={"manage-users"} />}
          />
          <Route
            path="admin/manage-items"
            element={<Admin tab={"manage-items"} />}
          />
          <Route path="admin/supplier" element={<Admin tab={"supplier"} />} />
          <Route
            path="admin/order/sale"
            element={<Admin tab={"order-sale"} />}
          />
          <Route
            path="admin/order/purchase"
            element={<Admin tab={"order-purchase"} />}
          />
          <Route
            path="admin/third-party"
            element={<Admin tab={"third-party"} />}
          />
          <Route path="admin/warehouse" element={<Admin tab={"warehouse"} />} />
          <Route path="admin/report" element={<Admin tab={"report"} />} />
          <Route path="admin" element={<Navigate to="manage-users" />} />
          <Route
            path="checkout"
            element={
              <Checkout
                setFilterCollection={setFilterCollection}
                setFilterCategory={setFilterCategory}
                setAlert={setAlert}
                setOpenAlert={setOpenAlert}
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>}
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
