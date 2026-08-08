import { useState } from "react"
import './Acordeon.css'

function Acordeon({ items }) {
    const [abierto, setAbierto] = useState(null)

    const alternar = (id) => {
        setAbierto(abierto === id ? null : id)
    }

    return (
        <div className="lista-faqs">
            {items.map((item) => (
                <div key={item.id} className="item-faq">
                    <button
                        type="button"
                        className="boton-faq texto-m"
                        onClick={() => alternar(item.id)}
                    >
                        {item.pregunta}
                    </button>

                    {abierto === item.id && (
                        <div className="respuesta-faq">
                            <p className="texto texto-m">{item.respuesta}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Acordeon