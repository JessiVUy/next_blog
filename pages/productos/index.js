import Nav from '../../components/nav'
import styles from '../../styles/Home.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Article from '../../components/article'
import FormProduc from '../../components/formProductos'
import producServices from '../../services/product'

export default function Productos () {

    const[productos,setProductos] = useState([])

    useEffect(()=>{
        producServices.getAll().then(
            response=>{
                setProductos(response.data)
            }
        )
    },[])

    const newProduct= (props)=>{
        setProductos(productos.concat(props))
    }

    return(
        <>
            <Nav></Nav>
            <h1 className={styles.h1}>PRODUCTOS</h1>
            <FormProduc newProduct={newProduct}/>
            <section className={styles.grid}>
                {
                    productos.map(product=>(
                        <Article key={product.id} props={product}></Article>
                    ))
                }
            </section>
        </>
    )
}