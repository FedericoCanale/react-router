import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                setProduct(res.data);
            });
    }, [id]);

    if (!product) {
        return (
            <div>
                <h1>Prodotto in caricamento</h1>

            </div>
        );
    }

    return (
        <div>
            <h1>{product.title}</h1>

            <img
                src={product.image}
                alt={product.title}
                width="200"
            />

            <p><strong>Prezzo:</strong> {product.price} €</p>
            <p><strong>Categoria:</strong> {product.category}</p>
            <p><strong>Descrizione:</strong> {product.description}</p>
        </div>
    );
}