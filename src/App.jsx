import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProducItem from "./pages/ProducItem";
import Error from "./pages/Error";
import GlobalStyles from "./styles/Global";
import Categories from "./components/Categories";
import { useDispatch } from "react-redux";
import { products } from "../data";
import { addProducts } from "./redux/poductSlice";

const theme = {
  colors: {
    primary: ["#70908B", "#07484A"],
    secondary: ["#CAF3E5", "#E0EFF6", "#EEEBFF", "#FFF4E7", "#FDFBF8"],
  },
  mobile: "450px",
  tablet: "768px",
};

const App = () => {
  const dispatch = useDispatch();
  const data = products;
  dispatch(addProducts(data));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProducItem />} />
            <Route path="categories" element={<Categories />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </>
    </ThemeProvider>
  );
};

export default App;
