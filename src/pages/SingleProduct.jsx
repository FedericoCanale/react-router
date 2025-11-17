import { useParams } from "react-router-dom";

export default function SingleProduct() {
    const { id } = useParams();

    return (
        <div>
            <h1>Pagina prodotto singolo</h1>
            <p>ID: {id}</p>
        </div>
    );
}