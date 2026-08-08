import './Nav.css'
import { paginas } from "../data/shared"

function Nav(props){
    return (
        <nav className="nav">
            <div className='contenedor'>
                {paginas.map((p)=> (
                    <button
                    style={{backgroundColor: p.color}}
                    key={p.id}
                    className={`nav-link texto-m ${props.paginaActiva === p.id ? 'nav-link--activo' : ''}`}
                    onClick={() => props.onCambiarPagina(p.id)}
                    >
                    {props.paginaActiva === p.id ? <div className='imagenNav' style={{maskImage: `url(${props.imagenNav})`}}></div>: null}
                    {p.nombre}
                    </button>
                ))}
            </div>
            
        </nav>
    )
}

export default Nav