import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Header from "./component/pages/header/Header";
import Footer from "./component/pages/footer/Footer";
import MainPage from "./component/mainPage/MainPage";
import BascketPage from "./component/pages/bascket/BascketPage";
import OrderPage from "./component/pages/order/OrderPage";
import ErrorPage from "./component/pages/error/ErrorPage";
import MenuList from "./component/pages/menuList.Pizza/MenuList";
import AdminPages from "./component/pages/admin/AdminPages";




const App = () => {
  return (
      <>
          <BrowserRouter>
              <Header/>
           <Routes>
               <Route path="/" element={<MainPage/>}/>
               <Route path="/bascket" element={<BascketPage/>}/>
               <Route path="/order" element={<OrderPage/>}/>
               <Route path="*" element={<ErrorPage/>}/>
               <Route path="/menu" element={<MenuList/>}/>
               <Route path="/admin" element={<AdminPages/>}/>
           </Routes>
              <Footer/>
          </BrowserRouter>
          </>
  );
};

export default App;

