import { useState } from 'react';
import './CalculadoraNutricional.css';
import { ALIMENTOS_DB } from './data';
import Hero from '../../components/Hero';
import Nav from '../../components/Nav';
import imagen from './assets/hero.png'
import imagenNav from './assets/icono-nav.png'
import Footer from '../../components/Footer';


function CalculadoraNutricional(props) {
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
            titulo = 'Descubre qué hay en cada alimento'
            descripcion = 'Busca cualquier alimento y conoce su aporte real en segundos'
            alt = 'Calculadora de nutrición infantil'
            imagen = {imagen}
            paginaActiva= {props.paginaActiva}
        />

        <Nav paginaActiva={props.paginaActiva} onCambiarPagina={props.onCambiarPagina} imagenNav={imagenNav}/>

        <div className="calculator-container contenedor">
          <h3 className="card-header">BUSCADOR DE ALIMENTOS</h3>
          
          <form onSubmit={handleBuscar} className="search-form">
            <label className="input-label texto-m">Escribe el alimento a examinar:</label>
            <input
              type="text"
              className="search-input texto-m"
              placeholder="Ej. zanahoria, manzana, huevo, pollo, palta..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <button type="submit" className="submit-btn texto-m">
              Calcular valor nutricional
            </button>
          </form>

          {error && (
            <p className="error-msg texto-m">
              Alimento no encontrado. Prueba con: <strong>zanahoria, platano, manzana, espinaca, huevo, pollo, leche, palta, arroz o brocoli</strong>.
            </p>
          )}

          {resultado ? (
            <div className="results-container">
              <h2 className="food-title">{resultado.nombre}</h2>
              
              <div className="nutritional-grid">
                <div className="nutrition-col">
                  <h3>Energía y macronutrientes</h3>
                  <ul className='texto-m'>
                    {resultado.macro.map((item, idx) => (
                      <li key={idx}><strong>{item.label}:</strong> {item.val}</li>
                    ))}
                  </ul>
                </div>

                <div className="nutrition-col">
                  <h3>Minerales</h3>
                  <ul className='texto-m'>
                    {resultado.minerales.map((item, idx) => (
                      <li key={idx}><strong>{item.label}:</strong> {item.val}</li>
                    ))}
                  </ul>
                </div>

                <div className="nutrition-col">
                  <h3>Vitaminas</h3>
                  <ul className='texto-m'>
                    {resultado.vitaminas.map((item, idx) => (
                      <li key={idx}><strong>{item.label}:</strong> {item.val}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            !error && (
              <p className="info-text texto-m">
                Muchos padres no revisan la información nutricional porque no está a la mano. 
                Saber qué aporta cada alimento, como el hierro de una espinaca o el calcio de un yogur, 
                te ayuda a decidir mejor qué ponerle a tu hijo en el plato.
              </p>
            )
          )}
        </div>
        <Footer paginaActiva={props.paginaActiva} onCambiarPagina={props.onCambiarPagina}/>
        </>

  );
}

export default CalculadoraNutricional