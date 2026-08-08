import Hero from "../../components/Hero"
import imagen from './assets/hero.png'
import Nav from "../../components/Nav"
import imagenNav from './assets/icono-nav.png'
import Footer from "../../components/Footer"
import Tarjeta from "../../components/Tarjeta"
import Acordeon from "./components/Acordeon"
import { preguntasFrecuentes, somos } from './data.js'
import './SobreProyecto.css'

function SobreProyecto(props){
    return (
        <>
            <Hero
                titulo='Conoce la historia detrás de Creciendo Sano'
                descripcion='Por qué existe este proyecto y quiénes lo hicieron posible'
                alt='foco'
                imagen={imagen}
                paginaActiva={props.paginaActiva}
            />

            <Nav paginaActiva={props.paginaActiva} onCambiarPagina={props.onCambiarPagina} imagenNav={imagenNav}/>

            <div className="sobre-proyecto-contenido">
                <div id="quienes-somos" className="seccion-bloque">
                    <Tarjeta paginaActiva={props.paginaActiva} titulo="¿QUIÉNES SOMOS?">
                        <p className="texto texto-m">
                            {somos[0].texto}
                        </p>
                    </Tarjeta>
                </div>

                <div id="preguntas-frecuentes" className="seccion-bloque">
                    <h2 className="subtitulo-seccion">PREGUNTAS FRECUENTES</h2>
                    <Acordeon items={preguntasFrecuentes} />
                </div>

                <div id="contacto" className="seccion-bloque contacto-bloque">
                    <h2 className="subtitulo-seccion">CONTACTO</h2>
                    <p className="email-contacto texto-m">info@creciendosano.dev</p>
                </div>
            </div>

            <Footer paginaActiva={props.paginaActiva} onCambiarPagina={props.onCambiarPagina}/>
        </>
    )
}

export default SobreProyecto