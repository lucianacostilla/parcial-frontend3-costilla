import React from 'react'

const Card = ({nombre, apellido}) => {
  return (
    <div className='card'>
      <h2>Hola {nombre} {apellido}!</h2>
      <h3>Gracias por suscribirte y por confiar en nosotros. Pronto estará listo Exotify!</h3>
    </div>
  )
}

export default Card

