import "./App.css";
import "./NavFooter.css";
import "./Carrito.css";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/CartContext";

const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />}/>
        <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
