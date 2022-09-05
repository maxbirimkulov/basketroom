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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {findUser} from "./redux/user";

function App() {
  const dispatch = useDispatch();
  // useEffect(() =>{
  //   const user = JSON.parse(localStorage.getItem('user')) || {favourites:[], cart:[]};
  //   dispatch(findUser({user: JSON.parse(localStorage.getItem('user'))}));
  // },[]);

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
          <Route path='/catalog/:page/:category' element={<Catalog/>}/>
          <Route path='/search' element={<SearchResult/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/add' element={<ClothesAdd/>}/>
        </Route>
      </Routes>
      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
    </div>
  );
}

export default App;
