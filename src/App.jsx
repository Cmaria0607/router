import { Routes, Route } from "react-router-dom"
import Card from './components/Card'
import CardUser from './components/CardUser'



function App () {

  return (

    
    <>
    
    
    <Routes>
      <Route path= "/Card" element={<Card/>} /> 
      <Route path= "/Card/:id" element={<CardUser/>} /> 

      
    </Routes>

    </>
  )



}

export default App



































