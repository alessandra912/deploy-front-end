import { Link } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <header className="header-conteiner">
            <div className="logo">Gerenciamento de Usuários</div>
            <nav>
                <link to="/">Home</link>
                <link to="/cadastro">Cadastrar</link>
                <link to="/listar">Listar Usuários</link>
            </nav>
        </header>
    );
}

export default Header;