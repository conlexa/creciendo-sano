import { useState } from 'react';
import './CalculadoraNutricional.css';
import { ALIMENTOS_DB } from './data';
import Hero from '../../components/Hero';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Tarjeta from '../../components/Tarjeta';
import Boton from '../../components/Boton';
import imagen from './assets/hero.png';
import imagenNav from './assets/icono-nav.png';

export default function CalculadoraNutricional(props) {
  const [busqueda, setBusqueda] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(false);

 
  const normalizarTexto = (str) => {
    return str
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const handleBuscar = (e) => {
    e.preventDefault();
    const query = normalizarTexto(busqueda);
    
    // Busca coincidencia en la base de datos
    const claveEncontrada = Object.keys(ALIMENTOS_DB).find(
      (key) => key === query || normalizarTexto(ALIMENTOS_DB[key].nombre).includes(query)
    );

    if (claveEncontrada) {
      setResultado(ALIMENTOS_DB[claveEncontrada]);
      setError(false);
    } else {
      setResultado(null);
      setError(true);
    }
  };

  return (
    <>
      <Hero
        titulo='Descubre qué hay en cada alimento'
        descripcion='Busca un alimento y conoce su valor nutricional'
        alt='alt'
        imagen={imagen}
        paginaActiva={props.paginaActiva}
      />
      <Nav paginaActiva={props.paginaActiva} onCambiarPagina={props.onCambiarPagina} imagenNav={imagenNav} />

      <div className="contenedor">
      <Tarjeta paginaActiva={props.paginaActiva} titulo='BUSCADOR DE ALIMENTOS'>
        <form onSubmit={handleBuscar} className="search-form">
          <label className="input-label texto-s">Escribe el alimento a examinar:</label>
          <input
            type="text"
            className="search-input texto-m"
            placeholder="Ej. zanahoria, manzana, huevo, pollo, palta..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <Boton paginaActiva={props.paginaActiva} texto='Calcular valor nutricional' type='submit' />
        </form>

        {error && (
          <p className="error-msg texto-s">
            Alimento no encontrado. Prueba con: <strong>zanahoria, platano, manzana, espinaca, huevo, pollo, leche, palta, arroz o brocoli</strong>.
          </p>
        )}

        {resultado ? (
          <div className="results-container">
            <h2 className="food-title">{resultado.nombre}</h2>

            <div className="nutritional-grid">
              <div className="nutrition-col">
                <h3>Energía y macronutrientes</h3>
                <ul>
                  {resultado.macro.map((item, idx) => (
                    <li key={idx} className="texto-s"><strong>{item.label}:</strong> {item.val}</li>
                  ))}
                </ul>
              </div>

              <div className="nutrition-col">
                <h3>Minerales</h3>
                <ul>
                  {resultado.minerales.map((item, idx) => (
                    <li key={idx} className="texto-s"><strong>{item.label}:</strong> {item.val}</li>
                  ))}
                </ul>
              </div>

              <div className="nutrition-col">
                <h3>Vitaminas</h3>
                <ul>
                  {resultado.vitaminas.map((item, idx) => (
                    <li key={idx} className="texto-s"><strong>{item.label}:</strong> {item.val}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          !error && (
            <p className="info-text texto-s">
              Muchos padres no revisan la información nutricional porque no está a la mano.
              Saber qué aporta cada alimento, como el hierro de una espinaca o el calcio de un yogur,
              te ayuda a decidir mejor qué ponerle a tu hijo en el plato.
            </p>
          )
        )}
      </Tarjeta>
      </div>

      <Footer paginaActiva={props.paginaActiva} onCambiarPagina={props.onCambiarPagina} />
    </>
  );
}