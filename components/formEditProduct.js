import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Select from 'react-select'
import producServices from '../services/product'


const FormEditProduct = ({props})=>{
    const[produc, setProduct] = useState({
        nombre:props.nombre,
        categoria:props.categoria,
        precio:props.precio,
        stock:props.stock
    })

    

    const option = [
        {value: 'tecnologia', label: 'tecnologia', name: 'categoria'},
        {value: 'Escolares', label: 'Escolares',  name: 'categoria'}
    ];

    const handleChange = (event) => {
        setProduct({ ...produc, [event.target.name]: event.target.value });
    };

    const handleChangeCat = (event) => {
        setProduct({...produc,[event.name]:event.value})
    }

    const updProduc = (event)=>{
        event.preventDefault()
        producServices.update(props.id, produc)
        .then(response =>{
            if(response.status == 200){
                return(
                    window.alert("Cambios realizados")
                )
                setMsj(true)
            }else{
                window.alert("No se pudo realizar los cambios")
            }
        })
    }

    return(
        <form onSubmit={updProduc} className={styles.formEdit} >
            <label>Nombre
                <input className={styles.input} type="text" name='nombre' value={produc.nombre} onChange={handleChange}></input>
            </label>
            <label>Precio $
                <input className={styles.input} type="number" name= 'precio' value={produc.precio} onChange={handleChange}></input>
            </label>
            <label>Stock
                <input className={styles.input} type="number" name='stock' value={produc.stock} onChange={handleChange}></input>
            </label>
            <div>
                <label>Categoria: {produc.categoria}</label>
                <Select
                    value={produc.categoria}
                    onChange={handleChangeCat}
                    options={option}
                />
            </div>
            <div className={styles.contenedorButton}><button className={styles.button}>Guardar Cambios</button></div>
           
        </form>
    )
}

export default FormEditProduct