/* eslint-disable react/prop-types */
import React from 'react'

const EmpleadoRow = ({ fullName, title, department }) => {
  return (
    <div className="empleado-row">
      <div>{fullName}</div>
      <div>{title}</div>
      <div>{department}</div>
    </div>
  )
}

export default EmpleadoRow
