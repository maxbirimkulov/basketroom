import './scss/style.scss'
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import Order from "./pages/Order/Order";
import Basket from "./pages/Basket/Basket";
import Catalog from "./pages/Catalog/Catalog";
import Product from "./pages/Product/Product";
import SearchResult from "./pages/SearchResult/SearchResult";
import ClothesAdd from "./pages/AddClothes/AddClothes";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getOneProduct, getProducts} from "./redux/clothes";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/catalog/:page' element={<Catalog/>}/>
          <Route path='/search' element={<SearchResult/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/add' element={<ClothesAdd/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
