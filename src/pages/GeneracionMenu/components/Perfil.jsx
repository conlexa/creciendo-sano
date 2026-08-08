import { useState } from "react"
import Boton from "../../../components/Boton"
import Tarjeta from "../../../components/Tarjeta"
import { edades, filtrosComunes } from "../data"
import './Perfil.css'

function Perfil(props) {
    const [edad, setEdad] = useState(null)
    const [presupuesto, setPresupuesto] = useState(50)
    const [evitar, setEvitar] = useState([])

    const toggleEvitar = (id) => {
        if (evitar.includes(id)) {
            setEvitar(evitar.filter((e) => e !== id))
        } else {
            setEvitar([...evitar, id])
        }
    }

    const enviarFormulario = (e) => {
        e.preventDefault()

        if (!edad) {
            alert('Por favor, selecciona la edad')
            return
        }

        props.onGenerarMenu({
            edad: Number(edad),
            presupuesto: Number(presupuesto),
            evitar,
        })
    }

    return(
        <div>
            <Tarjeta paginaActiva={props.paginaActiva} titulo='PERFIL Y PRESUPUESTO'>
                <form className="formulario-menu" onSubmit={enviarFormulario}>
                    <label className="texto-m">Edad:</label>
                    <div className="edad-selector">
                        {edades.map((e)=>(
                            <label key={e.edad} className="edad-opcion">
                                <input
                                    type="radio"
                                    name="edad"
                                    value={e.edad}
                                    onChange={(ev) => setEdad(ev.target.value)}
                                />
                                <span className="edad-circulo texto-m">{e.edad}</span>
                            </label>
                        ))}
                    </div>

                    <label className="texto-m">Presupuesto semanal:</label>
                    <div className="tarjeta-barra">
                        <input
                            type="range"
                            className="slider"
                            min="0"
                            max="100"
                            step='10'
                            value={presupuesto}
                            onChange={(e)=> setPresupuesto(e.target.value)}
                        />
                        <h2>S/.{presupuesto}</h2>
                    </div>

                    <label className="texto-m">Evitar / no le gusta:</label>
                    <div className="checks-evitar">
                        {filtrosComunes.map((f) => (
                            <label key={f.id} className="check-opcion texto-s">
                                <input className="check-input"
                                    type="checkbox"
                                    checked={evitar.includes(f.id)}
                                    onChange={() => toggleEvitar(f.id)}
                                />
                                {f.label}
                            </label>
                        ))}
                    </div>

                    <Boton paginaActiva={props.paginaActiva} texto='Generar menú semanal' type='submit' />
                </form>
            </Tarjeta>
        </div>
    )
}

export default Perfil