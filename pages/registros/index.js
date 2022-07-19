import axios from "axios";
import { useState, useEffect } from "react";
import Nav from '../../components/nav';
import Table from "../../components/table";
import registroServices from '../../services/registro'
import { FaSearch } from 'react-icons/fa';
import styles from '../../styles/Home.module.css'
import Form from '../../components/form'
import { ListBoxComponent } from '@syncfusion/ej2-react-dropdowns'





const Registros = ()=>{

    const [registros, setRegistros] = useState([])
    const [buscar, setBusar] = useState([])
    const [datos, setDatos]= useState([])

    useEffect(()=>{
        registroServices.getAll().then(
            response=>{
            setRegistros(response.data)
            }
        )
    },[])

    const buscarx = (event)=>{
        setBusar(event.target.value)
    }

    const newRegistro = (props) => {
        setRegistros(registros.concat(props))
    }

   const data = registros.map(registro => (
        {text: registro.nombre, id: registro.id})
   )
   console.log(data)

    return(
        <>
            <Nav/>
            <h1 className={styles.h1}>REGISTRO</h1>
            <div className={styles.contenedorForm}>
                <div className={styles.contenedorBuscador}>
                    <div className={styles.buscador}>
                        <input className={styles.input} onChange={buscarx} placeholder="Buscar"></input>
                        <FaSearch className={styles.icon}></FaSearch>
                    </div>
                    <Table key="table-1" props={registros} filter={buscar}/>
                </div>
                <div>
                    <h3>Agregar registro</h3>
                    <Form newRegistro={newRegistro}/>
                </div>
            </div>
            <div className="listbox-control">
                <ListBoxComponent key="list-1" dataSource={data}/>
            </div>
        </>
    )
}

export default Registros;