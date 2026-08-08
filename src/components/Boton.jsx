/*==================
Para usar el componente, importalo y usa estas propiedades. Por ejemplo:

<Boton
    paginaActiva={props.paginaActiva}    <- esta siempre (cambia el color de fondo, no modificar)
    texto = 'SoyUnBoton'                 <- esta es el texto del boton
    onClick = {soyUnaFuncion}            <- esta es la llamada a la función de tu boton
    type='submit'                        <- opcional, por defecto es 'button' (no recarga la página)
/>

*** El boton ocupa el 100% del ancho de su contenedor

=====================*/


import './Boton.css'
import { paginas } from '../data/shared' 

function Boton(props){

    const seccion = paginas.find((e) => e.id == props.paginaActiva)

    return (
        <button className='boton texto-m'
        style={{backgroundColor: seccion.color}}
        onClick={props.onClick}
        type={props.type || 'button'}>
            {props.texto}
        </button>
    )
}

export default Boton