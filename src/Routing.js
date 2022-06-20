import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddProductForm from "./components/AddProductForm/AddProductForm";
import Cart from "./components/Cart/Cart";
import EditProductForm from "./components/EditProductFForm/EditProductForm";
import LoginForm from "./components/LoginForm/LoginForm";
import NotFound from "./components/NotFound/NotFound";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductsList from "./components/ProductsList/ProductsList";
import RegisterForm from "./components/RegisterForm/RegisterFrom";
import { authContext } from "./contexts/authContext";

const Routing = () => {
  const [isAdmin] = useContext(authContext);
  // console.log(isAdmin);
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/add-product"
          element={isAdmin ? <AddProductForm /> : <Navigate replace to="*" />}
        />
        //admin only
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route
          path="/products/edit/:id"
          element={isAdmin ? <EditProductForm /> : <Navigate replace to="*" />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Routing;
