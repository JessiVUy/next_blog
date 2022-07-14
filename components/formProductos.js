import styles from '../styles/Home.module.css'
import Select from 'react-select';
import { useState } from 'react';
import axios from 'axios'

const FormProduc = (props)=>{

    const[produc, setProduct] = useState({
        nombre:"",
        categoria:"",
        precio:"",
        stock:"",
    })

    const option = [
        {value: 'tecnologia', label: 'tecnologia', name: 'categoria'},
        {value: 'Escolares', label: 'Escolares',  name: 'categoria'}
    ];

    const addProduct = (event)=>{
        console.log('addProduct', event)
        event.preventDefault()
        const obj = {
            nombre: produc.nombre,
            categoria:produc.categoria,
            precio: produc.precio,
            stock:produc.stock
        }
        console.log('obj',obj)
       axios.post('http://localhost:3001/productos', obj)
            .then(response=>{
                props.newProduct(response.data)
                //setProductos(productos.concat(response.data))
                setProduct(
                    {
                    nombre:"",
                    categoria:"",
                    precio:"",
                    stock:"",}
                )
                
            })
    }

    const handleChange = (event) => {
        console.log('event',event)
        setProduct({ ...produc, [event.target.name]: event.target.value });
        console.log('handleChange',produc)
    };

    const handleChangeCat = (event) => {
        console.log(event)
        setProduct({...produc,[event.name]:event.value})
    }
    

    return(
        <form className={styles.form} onSubmit={addProduct}>
            <h3>Agregar productos</h3>
            <input className={styles.input} type="text"  name="nombre" placeholder="Nombre" value={produc.nombre} onChange={handleChange} ></input>
            <input className={styles.input} type="number" name="precio" placeholder="Precio" value={produc.precio} onChange={handleChange}></input>
            <Select
                value={produc.categoria}
                onChange={handleChangeCat}
                options={option}
            />
            <input className={styles.input} type="number" name="stock" placeholder="Stock" value={produc.stock} onChange={handleChange} ></input>
            <button className={styles.button}>Agregar</button>
        </form>
    )
}

export default FormProduc;