import Tarjeta from "../../../components/Tarjeta"
import './MenuGenerado.css'

function MenuGenerado(props) {
    let total = 0
    props.menuSemana.forEach((dia) => {
        if (dia.plato) total = total + dia.plato.precio
    })

    if (total > props.presupuesto) {
        return (
            <Tarjeta paginaActiva={props.paginaActiva} titulo='MENÚ SEMANAL'>
                <p className="texto-m">No hay opciones disponibles para el presupuesto asignado.</p>
            </Tarjeta>
        )
    }

    return(
        <Tarjeta paginaActiva={props.paginaActiva} titulo='MENÚ SEMANAL'>
            <div className="menu-oculto">
                {props.menuSemana.map((dia, index) => (
                    <div className="tarjeta-menu" key={dia.dia}>
                        <div>
                            <h3 className="dia">{dia.dia}</h3>
                            <h4 className="razon">{dia.razonDescripcion}</h4>
                        </div>
                        {dia.plato ? (
                            <>
                                <div className="info-plato">
                                    <div>
                                        <div className="icono-plato"></div>
                                        <p className="nombre-plato texto-m">{dia.plato.menu}</p>
                                    </div>
                                    <div>
                                        <p className="precio-plato texto-m">S/{dia.plato.precio}</p>
                                        <button className="btn-cambiar texto-m" type="button" onClick={() => props.onCambiarPlato(index)}>
                                            Cambiar <i className="lni lnis-refresh-circle-1-clockwise"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="contenedor-pines">
                                    <h4 className="pin-componente">{dia.plato.tag}</h4>
                                    <h4 className="pin-consejo">{dia.plato.consejo}</h4>
                                </div>
                            </>
                        ) : (
                            <p className="texto-m">No hay opciones disponibles con los filtros elegidos.</p>
                        )}
                    </div>
                ))}
                <h3 className="menu-total">Total: S/{total} (basado en menús de 4 porciones)</h3>
            </div>
        </Tarjeta>
    )
}

export default MenuGenerado