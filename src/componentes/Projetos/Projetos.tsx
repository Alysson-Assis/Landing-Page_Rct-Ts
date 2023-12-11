import projeto from "../../images/ProjetoLanding.jpg"
import styles from "./Projetos.module.css"

const Projetos = () => {
    return (
        <div className={styles.Projetos}>
            <img src={projeto} className={styles.userProjetos}alt="exemplo de projeto" />
        </div>
        
    );
}

export default Projetos;