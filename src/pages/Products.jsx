import React, { useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import { ProductsStyled } from "../styles/Products.styled";
import { ProductsList } from "../styles/ProductsList.styled";
import { ButtonStyled } from "../styles/Button.styled";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.categories.category);
  const [selectedCategory, setSelectedCategory] = useState(categories);
  const [selectedMenu, setSelectedMenu] = useState("none");
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const options = [
    { value: "all", label: "All" },
    { value: "electronics", label: "Electronics" },
    { value: "fragrances", label: "Fragrances" },
    { value: "skincare", label: "SkinCare" },
    { value: "groceries", label: "Groceries" },
    { value: "home-decoration", label: "Home-Decoration" },
    { value: "men's clothing", label: "Men-Clothing" },
    { value: "women's clothing", label: "Women-Clothing" },

    { value: "jewelery", label: "Jewellery" },
  ];

  const options1 = [
    { value: "ascending", label: "Price: Low To High" },
    { value: "descending", label: "Price: High To Low" },
  ];
  const options2 = [
    { value: 5, label: "5" },
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 25, label: "25" },
  ];

  const onChangeHandler = (e) => {
    setCurrentPage(1);
    setSelectedCategory(e.value);
  };
  const onChangeHandlerMenu = (e) => {

    setSelectedMenu(e.value);
  };

  const onChangeHandlerPage = (e) => {
    setPerPage(e.value);
  };
  const transformedProducts = () => {
    let ab = products;

    if (selectedCategory !== null) {
      if (selectedCategory === "all") {
        ab = products;
      } else {
        ab = ab.filter((item) => item.category === selectedCategory);
      }
    }

    if (selectedMenu === "ascending") {
      if (ab.length > 0) {
        ab = ab.slice().sort((a, b) => a.price - b.price);
      }
    }
    if (selectedMenu === "descending") {
      if (ab.length > 0) {
        ab = ab.slice().sort((a, b) => b.price - a.price);
      }
    }

    return ab;
  };

  const changeToInr = (price) => {
    price = price.toLocaleString("en-IN", {
      maximumFractionDigits: 0,
      style: "currency",
      currency: "INR",
    });
    return price;
  };

  const totalPages = Math.ceil(transformedProducts().length / perPage);
  const currentProducts = transformedProducts().slice(startIndex, endIndex);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

 

  return (
    <div className="products-page">
      <ProductsStyled>
        <Select
          defaultValue={selectedCategory}
          options={options}
          onChange={onChangeHandler}
          placeholder="Choose Category"
          className="category-filter"
        />

        <Select
          defaultValue={selectedMenu}
          options={options1}
          onChange={onChangeHandlerMenu}
          placeholder="Sort By:"
          className="category-filter"
        />

        <Select
          defaultValue={perPage}
          options={options2}
          onChange={onChangeHandlerPage}
          placeholder="Per Page"
          className="category-filter"
        />
      </ProductsStyled>

      <ProductsList>
        {currentProducts.map((item) => (
          <div className="product" key={item.id}>
            <div className="image-holder">
              <img src={item.image} />
            </div>
            <div className="banner">
              <p>{item.title}</p>
              <h3>{changeToInr(item.price * 83)}</h3>
            </div>
            <ButtonStyled
              type="button"
              onClick={() => navigate(`/products/${item.id}`)}
            >
              Explore
            </ButtonStyled>
          </div>
        ))}
      </ProductsList>

      {currentProducts.length !== 0 && (
        <div className="pagination  ">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className=" pages">
            <strong>{currentPage}</strong> of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className=""
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
