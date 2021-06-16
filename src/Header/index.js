import "./style.css";

const Header = ({ title }) => (
    <header>
        <h1 className="body__header">{title}</h1>
    </header>
);

export default Header;