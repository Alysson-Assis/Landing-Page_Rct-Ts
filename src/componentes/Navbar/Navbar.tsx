import logo from "../../images/Octopus.jpg"
import styles from "./Navbar.module.css"

const Navbar = () => {


    return (
        <div>
            <img src={logo} className={styles.logoPage} alt="HydraOctopus_logo" />
            <h1>HydraOctopus</h1>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Objetivo</a></li>
                <li><a href="">Projetos</a></li>
                <li><a href="">Membros</a></li>
                <li><a href="">Contatos</a></li>
            </ul>
        </div>
    );
}

export default Navbar;