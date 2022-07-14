

const Table = ({props, filter})=>{
    console.log('tabla',props)
    return(
       <>
        <table>
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
                    <tr>
                        <td>{e.nombre}</td>
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