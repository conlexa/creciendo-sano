/*==================
Para usar el componente, importalo y usa estas propiedades. Por ejemplo:

<Hero
    paginaActiva={props.paginaActiva}    <- esta siempre (cambia el color de fondo, no modificar)
    titulo='Mi título'                   <- el título grande del hero
    descripcion='Mi descripción'         <- el texto debajo del título
    imagen={miImagenImportada}           <- importa tu imagen y pásala aquí
    alt='Descripción de la imagen'       <- texto alternativo de la imagen
/>

*** El logo "Creciendo sano" ya viene incluido, no hace falta agregarlo
*** El color de fondo se calcula automáticamente

=====================*/

import './Hero.css'
import { paginas } from '../data/shared' 

function Hero(props) {

    const seccion = paginas.find((e) => e.id == props.paginaActiva)

    return(
        <section className="hero">
                <div className="contenedor" style={{backgroundColor: seccion.color}}>
                    <div className='izq'>
                        <div className="contenedor-logo">
                            <div className='logo'></div>
                            <p className='logo-texto logotipo-m'>Creciendo sano</p>
                        </div>
                        <h1>{props.titulo}</h1>
                        <p className='texto-l descripcion'>{props.descripcion}</p>
                    </div>
                    <img src={props.imagen} alt={props.alt} />
                </div>
        </section>
    )
}

export default Hero