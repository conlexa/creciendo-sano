import Hero from "../../components/Hero"
import imagen from './assets/hero.png'
import Nav from "../../components/Nav"
import imagenNav from './assets/icono-nav.png'
import Footer from "../../components/Footer"
import ConsejoNutricion from './components/ConsejoNutricion'
import { consejosNutricion } from './data'
import './AprendiendoNutricion.css'


function AprendiendoNutricion(props){
    return (
        <>
        <Hero
            titulo = 'Entiende lo que come tu peque, y por qué importa'
            descripcion = 'Explicaciones simples y sin tecnicismos'
            alt = 'Libro abierto sobre nutrición infantil'
            imagen = {imagen}
            paginaActiva= {props.paginaActiva}
        />

        <Nav paginaActiva={props.paginaActiva} onCambiarPagina={props.onCambiarPagina} imagenNav={imagenNav}/>

        <main className="contenedor aprendiendo-contenido">
            <section className="aprendiendo-grid">
                {consejosNutricion.map((consejo) => (
                    <ConsejoNutricion
                        key={consejo.id}
                        paginaActiva={props.paginaActiva}
                        titulo={consejo.titulo}
                        texto={consejo.texto}
                        imagen={consejo.imagen}
                        alt={consejo.alt}
                    />
                ))}
            </section>
        </main>

        <Footer paginaActiva={props.paginaActiva} onCambiarPagina={props.onCambiarPagina}/>
        </>
    )
}

export default AprendiendoNutricion
