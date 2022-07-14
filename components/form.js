import styles from '../styles/Home.module.css'

const Form = ()=>{
    return(
        <form className={styles.form}>
            <input className={styles.input} type="text" placeholder="Nombre"></input>
            <input className={styles.input} type="tel" placeholder="Telefono"></input>
            <input className={styles.input} type="email" placeholder="Email"></input>
            <input className={styles.input} type="paswword" placeholder="Contraseña"></input>
            <button className={styles.button}>Guardar</button>
        </form>
    )
}

export default Form;