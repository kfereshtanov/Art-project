import { Link } from "react-router-dom"
import '../scss/nav.scss'

export function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/store">Store</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}
        