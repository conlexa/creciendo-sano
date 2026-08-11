import { useState } from "react"
import Tarjeta from "../../../components/Tarjeta"
import icono from '../assets/foco.png'
import { consejos, recomendacionesPorEdad } from "../data"
import './Info.css'

function Info(props) {

    const recomendacionPorEdad = recomendacionesPorEdad.find(
        (recomendacion) => props.edad >= recomendacion.edadMin && props.edad <= recomendacion.edadMax
    )

    const consejosDeEvitar = props.evitar && props.evitar.length > 0
        ? consejos.filter((consejo) => props.evitar.includes(consejo.categoria))
        : []

    const consejosGenerales = consejos.filter((consejo) => consejo.categoria == 'general')

    const consejosFiltrados = [...consejosGenerales, ...consejosDeEvitar]

    const [indice, setIndice] = useState(0)

    const siguiente = ()=> {
        setIndice(indice == consejosFiltrados.length - 1 ? 0 : indice + 1)
    }

    const anterior = ()=> {
        setIndice(indice == 0 ? consejosFiltrados.length - 1 : indice - 1)
    }

    return(
        <div>
            <Tarjeta
                paginaActiva={props.paginaActiva}
                titulo = 'INFORMACIÓN Y CONSEJOS'
            >
                <div className="extra">
                    <p className="info texto-m">{recomendacionPorEdad.texto}</p>
                    <div className="consejos">
                        <div className="icono">
                            <img src={icono} alt="foco"/>
                        </div>
                        <div className="izq">
                            <button onClick={anterior}><i className="lni lnis-arrow-left-circle"></i></button>
                        </div>
                        <p className="tip texto-m">{consejosFiltrados[indice].texto}</p>
                        <div className="der">
                            <button onClick={siguiente}><i className="lni lnis-arrow-right-circle"></i></button>
                        </div>
                    </div>
                </div>
            </Tarjeta>
        </div>
    )
}

export default Info