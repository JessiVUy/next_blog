import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';

const Article = ({props})=>{



    return(
        <article className={styles.card}>
            <div>
            <h5 className={styles.h5}>{props.nombre}</h5>
            <span> Precio: {props.precio}</span>
            <p> Stock {props.stock}</p>
            </div>
            <div><Link href={`./detailsProduct/${props.id}`}><a><FaEdit/></a></Link></div>
        </article>
    )
}

export default Article;