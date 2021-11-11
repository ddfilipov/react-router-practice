import { NavHashLink as Link } from "react-router-hash-link";

const Header = () => {
    return (
        <>
            <h1>React Router</h1>
            <ul className="nav">
                <li>
                    <Link to="/" activeClassName="activeLinkNav">Home</Link>
                </li>
                <li>
                    <Link to="/about" activeClassName="activeLinkNav">About</Link>
                </li>
                <li>
                    <Link to="/profile" activeClassName="activeLinkNav">Profile</Link>
                </li>
            </ul>
        </>
    );
};

export default Header;
