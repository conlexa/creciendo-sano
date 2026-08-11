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
    const [menuFueGenerado, setMenuFueGenerado] = useState(false)
    const [menuSemana, setMenuSemana] = useState([])
    const [datosPerfil, setDatosPerfil] = useState(null)

    // Crea un array de opciones de menús para un día que encajan con la razon, la edad recomendada y la ausencia de ingredientes seleccionados
    const generarPlatosValidosDia = (razon, edad, evitar) => {
        return menus.filter((menu) =>
            menu.razon == razon &&
            edad >= menu.edadRecomendada[0] &&
            edad <= menu.edadRecomendada[1] &&
            !menu.ingredientesSensibles.some((ingredienteSensible) => evitar.includes(ingredienteSensible))
        )
    }

    // Crea un array del menú semanal escogido con un presupuesto diario y con los platos más caros que encajen en ese presupuesto. Los guarda en MenuSemana y guarda los requerimientos en Datos Perfil
    const generarMenuSemanal = (datos) => {
        setDatosPerfil(datos)

        const presupuestoDiario = datos.presupuesto / 7

        const semana = diasSemana.map((diaSemana) => {
            const opcionesPlatoDia = generarPlatosValidosDia(diaSemana.razon, datos.edad, datos.evitar)

            let elegido = null
            if (opcionesPlatoDia.length > 0) {
                const opcionesOrdenadas = opcionesPlatoDia.sort((a, b) => b.precio - a.precio)
                elegido = opcionesOrdenadas.find((o) => o.precio <= presupuestoDiario)
                if (!elegido) {
                    elegido = opcionesOrdenadas[opcionesOrdenadas.length - 1]
                }
            }

            return { dia: diaSemana.dia, razonDescripcion: diaSemana.descripcion, razon: diaSemana.razon, plato: elegido }
        })

        setMenuSemana(semana)
        setMenuFueGenerado(true)
    }

    // Genera un array con otras opciones de plato para el día escogido y sin considerar el actual
    const obtenerOpcionesDeReemplazo = (indexDia) => {
        const dia = menuSemana[indexDia]
        const opciones = generarPlatosValidosDia(dia.razon, datosPerfil.edad, datosPerfil.evitar)
        return opciones.filter((opcion) => opcion.id != dia.plato.id)
    }

    // Calcula el presupuesto semanal disponible
    const calcularPresupuestoDisponible = (indexDia) => {
        let presupuestoOtrosDias = 0
        menuSemana.forEach((diaActual, index) => {
            if (index != indexDia && diaActual.plato) {
                presupuestoOtrosDias += diaActual.plato.precio
            }
        })
        return datosPerfil.presupuesto - presupuestoOtrosDias
    }

    // Crea un nuevo array del menú semanal con otra opción de plato para el día escogido (la más barata) y calculando que no se pase del presupuesto semanal
    const cambiarPlatoDelDia = (indexDia) => {
        const dia = menuSemana[indexDia]
        const opciones = obtenerOpcionesDeReemplazo(indexDia)
        const presupuestoDisponible = calcularPresupuestoDisponible(indexDia)

        const opcionesOrdenadas = opciones.sort((a, b) => a.precio - b.precio)
        const nuevoPlato = opcionesOrdenadas.find((opcion) => opcion.precio <= presupuestoDisponible)

        if (!nuevoPlato) return

        const nuevoMenuSemana = [...menuSemana]
        nuevoMenuSemana[indexDia] = { ...dia, plato: nuevoPlato }
        setMenuSemana(nuevoMenuSemana)
    }

    // Devuelve un true o false dependiendo de si hay más opciones de plato disponibles para ese día y sin salirse del presupuesto
    const puedeCambiar = (indexDia) => {
        const opciones = obtenerOpcionesDeReemplazo(indexDia)
        const presupuestoDisponible = calcularPresupuestoDisponible(indexDia)

        return opciones.some((opcion) => opcion.precio <= presupuestoDisponible)
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
            <Nav
                paginaActiva={props.paginaActiva}
                onCambiarPagina={props.onCambiarPagina}
                imagenNav={imagenNav}
            />
            <div className="contenedor contenedor-secciones">
                <div className="contenedor-secciones-izquierda">
                    <section className="contenedor-perfil">
                        <Perfil
                            paginaActiva={props.paginaActiva}
                            onGenerarMenu={generarMenuSemanal}
                        />
                    </section>
                    {menuFueGenerado && (
                        <section className="contenedor-info">
                            <Info
                                paginaActiva={props.paginaActiva}
                                evitar={datosPerfil.evitar}
                                edad={datosPerfil.edad}
                            />
                        </section>
                    )}
                </div>
                <section className="contenedor-menu">
                    {menuFueGenerado
                        ? <MenuGenerado
                            paginaActiva={props.paginaActiva}
                            menuSemana={menuSemana}
                            onCambiarPlato={cambiarPlatoDelDia}
                            presupuesto={datosPerfil.presupuesto}
                            puedeCambiar={puedeCambiar}
                        />
                        : <Menu
                            paginaActiva={props.paginaActiva}
                        />
                    }
                </section>
            </div>
            <Footer
                paginaActiva={props.paginaActiva}
                onCambiarPagina={props.onCambiarPagina}
            />
        </>
    )
}

export default GeneracionMenu