import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                setProducts(res.data);
            });
    }, []);

    return (
        <div>
            <h1>Prodotti</h1>

            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.title} - {product.price}€
                    </li>
                ))}
            </ul>
        </div>
    );
}