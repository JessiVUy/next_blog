import axios from "axios";
import { useState, useEffect } from "react";
import Nav from '../../components/nav';
import Table from "../../components/table";
import registroServices from '../../services/registro'
import { FaSearch } from 'react-icons/fa';
import styles from '../../styles/Home.module.css'
import Form from '../../components/form'

const Registros = ()=>{

    const [registros, setRegistros] = useState([])
    const [buscar, setBusar] = useState([])

    useEffect(()=>{
        registroServices.getAll().then(
            response=>{
            setRegistros(response.data)
            console.log('registros',registros)
            }
        )
    },[])

    const buscarx = (event)=>{
        console.log(event.target.value)
        setBusar(event.target.value)
    }

    const newRegistro = (props) => {
        console.log('index registro', props)
        setRegistros(registros.concat(props))
    }

   

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
                    <Table props={registros} filter={buscar}/>
                </div>
                <div>
                    <h3>Agregar registro</h3>
                    <Form newRegistro={newRegistro}/>
                </div>
            </div>
        </>
    )
}

export default Registros;