import EmpleadoList from './components/EmpleadoList';
import empleado from './assets/empleado.png'

import './App.css'

function App() {
  let empleados = [
    { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: empleado },
    { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: empleado },
    { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: empleado },
    { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: empleado },
    { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic:empleado },
    { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: empleado },
    { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: empleado },
    { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: empleado },
    { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: empleado},
  ]
  

  return (
    <>
       <div className="container mt-5">
      <h1 className="text-center mb-4">Lista de Empleados</h1>
      <EmpleadoList empleados={empleados} />
    </div>
    </>
  )
}

export default App
