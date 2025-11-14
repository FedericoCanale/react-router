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

            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.title}</h2>

                    <img
                        src={product.image}
                        alt={product.title}
                        width="120"
                    />

                    <p><strong>Prezzo:</strong> {product.price} €</p>
                    <p><strong>Categoria:</strong> {product.category}</p>
                    <p><strong>Descrizione:</strong> {product.description}</p>

                    <hr />
                </div>
            ))}
        </div>
    );
}