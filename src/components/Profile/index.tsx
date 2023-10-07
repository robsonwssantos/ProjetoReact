/* eslint-disable @next/next/no-img-element */
import styles from './index.module.css';

export function Profile(){
    return( <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/robsonwssantos.png" alt="Foto de Robson Schneider" />
        <h1 className={styles.name}>Robson Schneider</h1>
    </div>
    )
}