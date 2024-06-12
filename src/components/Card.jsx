import { Link } from "react-router-dom"
import { useEffect, useState } from "react";


const Card = () => {


    const [data, setData] = useState([])

    useEffect(() =>{
      fetch('http://192.168.169.17:8000/task/api/v1/tasks/')
      .then (response => response.json())
      .then (json =>  setData(json))
      .catch (error => console.log(error) )
    }, [] )
 console.log(data)
  
  return (
    <>

    
<div>
    <table className='table  table-striped table-hover text-center font-mono font-semibold text-2xl'>
        <tr>

        <td>Tareas</td>
        <td>Detalles</td>
         </tr>

        {data?.map((user) => (
        <tr key={user.id}>
        <td className='text-xl hover:text-black  '>
        {user.title}
        </td>
        <td className="text-center border-[1px] border-gray-800">
         <Link to={`/Card/${user.id}`}> Detalles</Link>
        </td>

       </tr>
        ))}

    </table>

    </div>

{/*     {data?.map((user) => (<li key={user.id}>{user.title}{user.description} </li> ))}
 */}
    </>
    

  )


   
}

export default Card

