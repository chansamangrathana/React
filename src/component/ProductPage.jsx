import React, { useEffect, useState } from "react";
import CardProductComponent from "./CardProductComponent";
let url = "https://fakestoreapi.com/products";
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full p-3">
      <CardProductComponent products={products} />
    </div>
  );
};

export default ProductPage;