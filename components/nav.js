import Link from "next/link";
import { render } from "react-dom";
import styles from '../styles/Home.module.css'



const Nav = ()=>{
    return(
        <nav className={styles.nav}>
            <Link className="link" href='./'><a>HOME</a></Link>
            <Link className="link" href='../registros'><a>REGISTROS</a></Link>
            <Link className="link" href='../ventas'><a>VENTAS</a></Link>
            <Link className="link" href='../productos'><a>PRODUCTOS</a></Link>
        </nav>
    )
}

export default Nav;