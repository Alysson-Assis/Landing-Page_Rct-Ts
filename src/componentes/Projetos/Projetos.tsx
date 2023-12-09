import projeto from "../../images/ProjetoLanding.jpg"
import styles from "./Projetos.module.css"

const Projetos = () => {
    return (
        <img src={projeto} className={styles.Projetos}alt="exemplo de projeto" />
    );
}

export default Projetos;