import React, { useEffect, useState } from 'react'
import './products.scss'
import Product from '../product/Product'
import newRequest from '../../utils/newRequest';

const Products = ({ cat, filters, sort }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    // console.log(cat)
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await newRequest.get(
                    cat
                        ? `/product?category=${cat}`
                        : "/product"
                );
                setProducts(res.data);
            } catch (err) { }
        };
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, cat, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

    return (
        <div className="products">
            {cat
                ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
                : products
                    .slice(0, 8)
                    .map((item) => <Product item={item} key={item.id} />)}
        </div>
    )
}

export default Products