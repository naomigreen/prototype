import React from "react";
import "./styles.css";

function Products(props) {
  const { setCompany, defaultCompany } = props;

  return (
    <div id="products">
      <div>
        <img src={setCompany.logo || defaultCompany.logo} alt="" />
        <h1>Products</h1>
      </div>
    </div>
  );
}

export default Products;
