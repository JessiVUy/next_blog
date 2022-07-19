import styles from '../styles/Home.module.css'

const Table = ({props, filter})=>{
    return(
       <>
        <table key="table-2" className={styles.table}>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {props.filter(e => e.nombre.includes(filter))
                .map(e=>(
                    <tr key={e.id} className={styles.tr}>
                        <td className={styles.td}>{e.nombre}</td>
                        <td>{e.tel}</td>
                        <td>{e.email}</td>
                    </tr> 
                ))}
            </tbody>
   </table>
       </> 
    )

}

export default Table;