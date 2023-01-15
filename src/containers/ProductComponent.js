import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((prod, index) => {
    return (
      <div className="four column wide" key={index}>
        <Link to={`/product/${prod.id}`}>
          <div className="ui link cards">
            <div className="image">
              <img src={prod.image} alt={prod.title}></img>
            </div>
            <div className="content">
              <div className="header">{prod.title}</div>
              <div className="meta price">${prod.price}</div>
              <div className="meta ">${prod.category}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  // const { id, title } = products[0];
  //   console.log(title, "hello");
  return <>{renderList}</>;
}

export default ProductComponent;
