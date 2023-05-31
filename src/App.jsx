import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [error, setError] = useState('')

  const handleOnChangeNombre = (e) => {setNombre(e.target.value)}
  const handleOnChangeApellido = (e) => {setApellido(e.target.value)}
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!/^\S/.test(nombre)) {
      setError('Verificar que no haya espacios antes del nombre.')
    }
    if (nombre.length < 3 || apellido.length < 6){
      setError('El nombre debe tener al menos 3 caracteres y el apellido 6.')
    }
    else {
      setError(null)
    }
  }
return (
<>
    <div className='form'>
   <h1> Cargando datos. </h1>
   <form onSubmit={handleSubmit}>
    <label htmlFor="nombre"> Escribe tu nombre: </label>
    <input type="text" id="nombre" placeholder='Por ejemplo: Luciana' onChange={handleOnChangeNombre} />
    <label htmlFor="apellido"> Escribe tu apellido: </label>
    <input type="text" id="apellido" placeholder='Por ejemplo: Costilla' onChange={handleOnChangeApellido} />
   <button className='btn'> Enviar </button>
   </form>
   {error === null ? <Card nombre={nombre} apellido={apellido} /> : <p className='err'>{error}</p>}
   </div>
    </>
  )
}

export default App