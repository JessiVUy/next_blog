const List = ({props})=>{
    return(
        <ul>
            {props.map(p =>(
                <li key={p.id} >{p.nombre} {p.tel} {p.email}</li>
            ))}
        </ul>
    )
}

export default List;