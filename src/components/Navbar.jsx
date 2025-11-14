import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">


                <div className="nav-links">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/chi-siamo">Chi siamo</Link>
                    <Link className="nav-link" to="/prodotti">Prodotti</Link>
                </div>
            </div>
        </nav>
    );
}