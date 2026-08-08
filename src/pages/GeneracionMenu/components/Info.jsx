import { useState } from "react"
import Tarjeta from "../../../components/Tarjeta"
import icono from '../assets/foco.png'
import { consejos, recomendacionesPorEdad } from "../data"
import './Info.css'

function Info(props) {

    const recomendacion = recomendacionesPorEdad.find(
        (r) => props.edad >= r.edadMin && props.edad <= r.edadMax
    )

    const consejosDeEvitar = props.evitar && props.evitar.length > 0
        ? consejos.filter((c) => props.evitar.includes(c.categoria))
        : []

    const consejosGenerales = consejos.filter((c) => c.categoria === 'general')

    const consejosFiltrados = [...consejosGenerales, ...consejosDeEvitar]

    const [indice, setIndice] = useState(0)

    const siguiente = ()=> {
        setIndice(indice == consejosFiltrados.length - 1 ? 0 : indice + 1)
    }

    const anterior = ()=> {
        setIndice(indice == consejosFiltrados.length + 1 ? 0 : indice - 1)
    }

    return(
        <div>
            <Tarjeta
                paginaActiva={props.paginaActiva}
                titulo = 'INFORMACIÓN Y CONSEJOS'
            >
                <div className="extra">
                    <p class="info texto-m">{recomendacion.texto}</p>
                    <div class="consejos">
                        <div class="icono">
                            <img src={icono} alt="foco"/>
                        </div>
                        <div class="izq">
                            <button onClick={anterior}><i class="lni lnis-arrow-left-circle"></i></button>
                        </div>
                        <p class="tip texto-m">{consejosFiltrados[indice].texto}</p>
                        <div class="der">
                            <button onClick={siguiente}><i class="lni lnis-arrow-right-circle"></i></button>
                        </div>
                    </div>
                </div>
            </Tarjeta>
        </div>
    )
}

export default Info