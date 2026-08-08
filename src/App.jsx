import { useState } from "react"
import GeneracionMenu from "./pages/GeneracionMenu/GeneracionMenu"
import AprendiendoNutricion from "./pages/AprendiendoNutricion/AprendiendoNutricion"
import CalculadoraNutricional from "./pages/CalculadoraNutricional/CalculadoraNutricional"
import SobreProyecto from "./pages/SobreProyecto/SobreProyecto"

function App(){

  const [paginaActiva, setPaginaActiva] = useState('generacionMenu')

  const renderPagina = () => {
      switch (paginaActiva) {
        case 'generacionMenu':
          return <GeneracionMenu paginaActiva={paginaActiva} onCambiarPagina={setPaginaActiva} />
        case 'aprendiendoNutricion':
          return <AprendiendoNutricion paginaActiva={paginaActiva} onCambiarPagina={setPaginaActiva} />
        case 'calculadoraNutricional':
          return <CalculadoraNutricional paginaActiva={paginaActiva} onCambiarPagina={setPaginaActiva} />
        case 'sobreProyecto':
          return <SobreProyecto paginaActiva={paginaActiva} onCambiarPagina={setPaginaActiva} />
        default:
          return <GeneracionMenu paginaActiva={paginaActiva} onCambiarPagina={setPaginaActiva} />
      }
    }

  return(
    <div className="app-contenedor">
      {renderPagina()}
    </div>
  )
}

export default App