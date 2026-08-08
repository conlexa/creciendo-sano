import { useState } from "react"
import Hero from "../../components/Hero"
import imagen from './assets/hero.png'
import Nav from "../../components/Nav"
import imagenNav from './assets/icono-nav.png'
import Footer from "../../components/Footer"
import Perfil from "./components/Perfil"
import Menu from "./components/Menu"
import MenuGenerado from "./components/MenuGenerado"
import Info from "./components/Info"
import { menus, diasSemana } from "./data"
import './GeneracionMenu.css'

function GeneracionMenu(props){
    const [menuGenerado, setMenuGenerado] = useState(false)
    const [menuSemana, setMenuSemana] = useState([])
    const [datosPerfil, setDatosPerfil] = useState(null)

    const platosValidos = (razon, edad, evitar) => {
        return menus.filter((m) =>
            m.razon == razon &&
            edad >= m.edadRecomendada[0] &&
            edad <= m.edadRecomendada[1] &&
            !m.alergenos.some((e) => evitar.includes(e))
        )
    }

    const generarMenu = (datos) => {
        setDatosPerfil(datos)

        const semana = diasSemana.map((e) => {
            const opciones = platosValidos(e.razon, datos.edad, datos.evitar)
            const elegido = opciones.length > 0
                ? opciones.sort((a, b) => a.precio - b.precio)[0]
                : null
            return { dia: e.dia, razonDescripcion: e.descripcion, razon: e.razon, plato: elegido }
        })

        setMenuSemana(semana)
        setMenuGenerado(true)
    }

    const cambiarPlatoDelDia = (indexDia) => {
        const dia = menuSemana[indexDia]
        const opciones = platosValidos(dia.razon, datosPerfil.edad, datosPerfil.evitar)
        const opcionesSinRepetir = opciones.filter((e) => e.id !== dia.plato?.id)

        const nuevo = opcionesSinRepetir.length > 0
            ? opcionesSinRepetir[Math.floor(Math.random() * opcionesSinRepetir.length)]
            : dia.plato

        const nuevaSemana = [...menuSemana]
        nuevaSemana[indexDia] = { ...dia, plato: nuevo }
        setMenuSemana(nuevaSemana)
    }

    return(
        <>
            <Hero
                titulo='Arma el almuerzo de tu peque en segundos'
                descripcion='Con consejos prácticos y ajustados a tu presupuesto'
                alt='alt'
                imagen={imagen}
                paginaActiva={props.paginaActiva}
            />
            <Nav paginaActiva={props.paginaActiva} onCambiarPagina={props.onCambiarPagina} imagenNav={imagenNav} />
            <div className="contenedor contenedor-secciones">
                <div className="contenedor-secciones-izquierda">
                    <section className="contenedor-perfil">
                        <Perfil paginaActiva={props.paginaActiva} onGenerarMenu={generarMenu} />
                    </section>
                    {menuGenerado && (
                        <section className="contenedor-info">
                            <Info paginaActiva={props.paginaActiva} evitar={datosPerfil?.evitar} edad={datosPerfil?.edad} />
                        </section>
                    )}
                </div>
                <section className="contenedor-menu">
                    {menuGenerado
                        ? <MenuGenerado paginaActiva={props.paginaActiva} menuSemana={menuSemana} onCambiarPlato={cambiarPlatoDelDia} presupuesto={datosPerfil?.presupuesto} />
                        : <Menu paginaActiva={props.paginaActiva}/>
                    }
                </section>
            </div>
            <Footer paginaActiva={props.paginaActiva} onCambiarPagina={props.onCambiarPagina}/>
        </>
    )
}

export default GeneracionMenu