/* eslint-disable react/prop-types */
import React from 'react'
import EmpleadoAvatar from './EmpleadoAvatar';
import EmpleadoRow from './EmpleadoRow';
// eslint-disable-next-line react/prop-types
const EmpleadoList = ({ empleados }) => {
  return (
    <div className="empleado-list">
    {empleados.map((empleado) => (
      <div key={empleado.id} className="empleado-list-item">
        <EmpleadoAvatar pic={empleado.pic} />
        <EmpleadoRow
          fullName={empleado.fullName}
          title={empleado.title}
          department={empleado.department}
        />
      </div>
    ))}
  </div>
  )
}

export default EmpleadoList
