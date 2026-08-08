import { paginas, datos, ayuda } from "../data/shared"
import './Footer.css'

function Footer(props){

    const seccion = paginas.find((e) => e.id == props.paginaActiva)

    const irASeccionAyuda = (idSeccion) => {
        props.onCambiarPagina('sobreProyecto')
        setTimeout(() => {
            document.getElementById(idSeccion)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
    }

    return (
        <footer className="footer">
            <div className="contenedor" style={{backgroundColor: seccion.color}}>
                <div className="contenedor-info">
                    <div className="contenedor-proyecto">
                        <div className="contenedor-logo">
                            <div className="logo"></div>
                            <p className="logo-texto logotipo-s">Creciendo sano</p>
                        </div>
                        <p className=" descripcion texto-s-multi">Menús infantiles saludables, ajustados al presupuesto y la realidad de cada familia peruana</p>
                    </div>
                    <div className="contenedor-navegacion">
                        <h5 style={{color: seccion.colorClaro}}>NAVEGACIÓN</h5>
                        {paginas.map((e)=> (
                            <button
                            key={e.id}
                            className="enlace texto-s"
                            onClick={()=> props.onCambiarPagina(e.id)}>
                                {e.nombre}
                            </button>
                        ))}
                    </div>
                    <div className="contenedor-datos">
                        <h5 style={{color: seccion.colorClaro}}>FUENTE DE DATOS</h5>
                        {datos.map((e)=> (
                            <a
                            key={e.id}
                            href={e.href}
                            target='_blank'
                            rel= 'noopener noreferrer'
                            className="enlace texto-s">
                            {e.nombre}</a>
                        ))}
                    </div>
                    <div className="contenedor-ayuda">
                        <h5 style={{color: seccion.colorClaro}}>AYUDA</h5>
                        {ayuda.map((e)=> (
                            <button
                            key={e.id}
                            className="enlace texto-s"
                            onClick={()=> irASeccionAyuda(e.id)}>
                                {e.nombre}
                            </button>
                        ))}
                    </div>
                </div>
                <hr style={{border: `1px solid ${seccion.colorClaro}`}}/>
                <p style={{color: seccion.colorClaro}} className="advertencia texto-xs">© 2026 Creciendo Sano. Proyecto académico, no reemplaza la evaluación de un profesional de la salud.</p>
            </div>
            
        </footer>
    )
}

export default Footer