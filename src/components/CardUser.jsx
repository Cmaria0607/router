import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const CardUser = () => {

    const { id } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://192.168.169.17:8000/task/api/v1/tasks/${id}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [id])

    console.log(data)


    return (
        <>
            {data.length === 0 ? (
                <h1 className="mt-32">Cargando Datos</h1>
            ) : (
                <div >
                    <h3>{data.title}</h3>

                    
                </div>
                   
                
            
            )}
        </>
    )




}
export default CardUser