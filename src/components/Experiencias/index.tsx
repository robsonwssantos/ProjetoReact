import styles from "./index.module.css";

interface ProjectExperiencias{
    cargo: string;
    descricao: string;
    ano: string;
  }
  
  export function ProjectExperiencias(props: ProjectExperiencias) {
    return (
        <div className={styles.experiencias}>
                <div className={styles.aux}>
                    <h3>{props.cargo}</h3>
                    <h3>{props.ano}</h3>
                </div>
            <h4>{props.descricao}</h4>
        </div>
    );
  }
  
