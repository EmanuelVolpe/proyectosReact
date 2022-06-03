import './App.css'
import Testimonio from './components/Testimonio'
import alumnos from './datosAlumnos'

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen los alumnos</h1>
        <Testimonio
          imagen={alumnos[0].imagen}
          nombre={alumnos[0].nombre}
          pais={alumnos[0].pais}
          cargo={alumnos[0].cargo}
          empresa={alumnos[0].empresa}
          testimonio={alumnos[0].testimonio}
        />
        <Testimonio
          imagen={alumnos[1].imagen}
          nombre={alumnos[1].nombre}
          pais={alumnos[1].pais}
          cargo={alumnos[1].cargo}
          empresa={alumnos[1].empresa}
          testimonio={alumnos[1].testimonio}
        />
        <Testimonio
          imagen={alumnos[2].imagen}
          nombre={alumnos[2].nombre}
          pais={alumnos[2].pais}
          cargo={alumnos[2].cargo}
          empresa={alumnos[2].empresa}
          testimonio={alumnos[2].testimonio}
        />
      </div>
    </div>
  )
}

export default App
