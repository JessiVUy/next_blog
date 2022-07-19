import FormEditProduct from "../../components/formEditProduct"
import styles from '../../styles/Home.module.css'

export default function DetailProduct(props){
    return(
        <div className={styles.contenedorFormEdit} >
            <h1>Detalles</h1>
            <FormEditProduct props={props}/>
        </div>
    )
}

export async function getServerSideProps(context){
    const{params}= context
    const {id}= params

    const apiResponse= await fetch(`http://localhost:3001/productos/${id}`)        
    if(apiResponse.ok){
        const props= await apiResponse.json()
        return({props})    
    }
                     
    
}