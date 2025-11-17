import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SingleProduct() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setProduct(res.data);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
                navigate("/prodotti");
            });
    }, [id, navigate]);

    if (isLoading) {
        return (
            <div className="single-product-page">
                <h1 className="single-product-title">Prodotto in caricamento</h1>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="single-product-page">
                <h1 className="single-product-title">
                    Prodotto non trovato
                </h1>
            </div>
        );
    }

    return (
        <div className="single-product-page">
            <div className="single-product-box">
                <h1 className="single-product-title">{product.title}</h1>

                <img
                    src={product.image}
                    alt={product.title}
                    className="single-product-image"
                />

                <p className="single-product-price">
                    <strong>Prezzo:</strong> {product.price} €
                </p>

                <p className="single-product-category">
                    <strong>Categoria:</strong> {product.category}
                </p>

                <p className="single-product-description">
                    {product.description}
                </p>
            </div>
        </div>
    );
}