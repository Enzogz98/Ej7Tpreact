/* eslint-disable react/prop-types */
import React from 'react'

const EmpleadoAvatar = ({ pic }) => {
  return (
    <div className="empleado-avatar">
    <img src={pic} alt="Avatar" className="img-fluid" />
  </div>
  )
}

export default EmpleadoAvatar
