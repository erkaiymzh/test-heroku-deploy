import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import "./App.css";
import ProductsContextProvider from "./contexts/productsContext";
import AuthContextProvider from "./contexts/authContext";
import CartContextProvider from "./contexts/cartContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Header />
            <Routing />
            <Footer />
          </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
