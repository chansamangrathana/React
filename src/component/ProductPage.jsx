import React, { useEffect, useState } from 'react'
import CardProduct from './CardProductComponent'

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();        
        setProducts(data.products);
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    
    return (
        <CardProduct products={products} />
    )
}

export default ProductPage