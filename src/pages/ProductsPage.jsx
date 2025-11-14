import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data);
            });
    }, []);

    return (
        <div className="products-page">
            <h1 className="products-title">Prodotti</h1>

            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h2 className="product-name">{product.title}</h2>

                        <img
                            src={product.image}
                            alt={product.title}
                            className="product-image"
                        />

                        <p className="product-price">
                            <strong>Prezzo:</strong> {product.price} €
                        </p>
                        <p className="product-category">
                            <strong>Categoria:</strong> {product.category}
                        </p>
                        <p className="product-description">{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}