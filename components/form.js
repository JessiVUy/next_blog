import styles from '../styles/Home.module.css'
import registroServices from '../services/registro'
import { useState , useEffect} from 'react'

const Form = (props)=>{
    const[newRegistro , setNewRegistro] = useState({
      nombre: "",
      tel: "",
      email: "",
      contraseña: ""
    })

    
    const [mensaje, setMensaje]= useState([])

    useEffect(()=>{
        
        }
        ,[])

    const registroChange = (event)=>{
        setNewRegistro({...newRegistro,[event.target.name]: event.target.value})
        setMensaje("")
    }

    const addRegistro = (event)=>{
        event.preventDefault()
        const obj = {
            nombre: newRegistro.nombre,
            tel: newRegistro.tel,
            email: newRegistro.email,
            contraseña:newRegistro.contraseña
        }
        if(obj.nombre != "" & obj.contraseña != ""){
            registroServices.create(obj).then(response=>{
                props.newRegistro(response.data)
                setMensaje("Registro agregado")
            })

            setNewRegistro({
                nombre: "",
                tel: "",
                email: "",
                contraseña: ""
            })
            
        }else{
            setMensaje("Debe completar los datos")
        }
    }

    return(
        <>
            <form className={styles.form} onSubmit={addRegistro}>
                <input className={styles.input} type="text" placeholder="Nombre" name='nombre' onChange={registroChange} value={newRegistro.nombre}></input>
                <input className={styles.input} type="tel" placeholder="Telefono" name='tel' onChange={registroChange} value={newRegistro.tel}></input>
                <input className={styles.input} type="email" placeholder="Email" name='email' onChange={registroChange} value={newRegistro.email}></input>
                <input className={styles.input} type="password" placeholder="Contraseña" name='contraseña' onChange={registroChange} value={newRegistro.contraseña}></input>
                <button className={styles.button}>Guardar</button>
            </form>
            <div>{mensaje}</div>
        </>

    )
}

export default Form;