import axios from "axios";
import { useState, useEffect } from "react";
import Nav from '../../components/nav';
import Table from "../../components/table";
import registroServices from '../../services/registro'
import { FaSearch } from 'react-icons/fa';
import styles from '../../styles/Home.module.css'

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

    return(
        <>
            <Nav></Nav>
            <h1>REGISTRO</h1>
            <div className={styles.buscador}>
                <label>
                    <input onChange={buscarx} placeholder="Buscar"></input>
                </label>
                <FaSearch></FaSearch>
            </div>
            <Table props={registros} filter={buscar}/>
        </>
    )
}

export default Registros;