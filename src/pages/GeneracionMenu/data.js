export const edades = [3, 4, 5, 6, 7, 8, 9, 10, 11]

export const restriccionesAlimentarias = [
  { id: 'lacteos', label: 'Lácteos' },
  { id: 'gluten', label: 'Gluten' },
  { id: 'huevo', label: 'Huevo' },
  { id: 'frutos secos', label: 'Frutos secos' },
  { id: 'pescado', label: 'Pescado y mariscos' },
];

export const diasSemana = [
  { dia: 'LUNES', razon: 'menestras', descripcion: 'Menestras y recarga de energía' },
  { dia: 'MARTES', razon: 'hierro', descripcion: 'Gran aporte de hierro' },
  { dia: 'MIÉRCOLES', razon: 'proteina', descripcion: 'Proteína para el crecimiento' },
  { dia: 'JUEVES', razon: 'economia', descripcion: 'Nutrición familiar y economía' },
  { dia: 'VIERNES', razon: 'omega3', descripcion: 'Omega 3 para el cerebro' },
  { dia: 'SÁBADO', razon: 'familiar', descripcion: 'Proteína balanceada en familia' },
  { dia: 'DOMINGO', razon: 'facil', descripcion: 'Menú de fácil preparación' },
];

export const menus = [
    { id: 1, razon: 'menestras', menu: 'Lentejas con arroz', precio: 6, tag: 'Fuente de hierro', consejo: 'Acompáñalo con vitamina C', ingredientesSensibles: [], edadRecomendada: [3, 11] },
    { id: 2, razon: 'menestras', menu: 'Frejoles con seco de pollo', precio: 8, tag: 'Alto en fibra', consejo: 'Ideal para acostumbrarlo a las menestras', ingredientesSensibles: [], edadRecomendada: [5, 11] },
    { id: 3, razon: 'menestras', menu: 'Pallares con arroz y huevo frito', precio: 7, tag: 'Rico en proteína vegetal', consejo: 'Corta el huevo en trozos pequeños', ingredientesSensibles: ['huevo'], edadRecomendada: [3, 11] },
    { id: 4, razon: 'hierro', menu: 'Sangrecita con arroz', precio: 5, tag: 'Fuente de hierro', consejo: 'Acompáñalo con vitamina C', ingredientesSensibles: [], edadRecomendada: [6, 11] },
    { id: 5, razon: 'hierro', menu: 'Hígado a la jardinera', precio: 7, tag: 'Fuente de hierro', consejo: 'Sírvelo con verduras salteadas', ingredientesSensibles: [], edadRecomendada: [5, 11] },
    { id: 6, razon: 'hierro', menu: 'Bistec de res con arroz', precio: 9, tag: 'Fuente de hierro', consejo: 'Corta la carne en trozos pequeños', ingredientesSensibles: [], edadRecomendada: [3, 11] },
    { id: 7, razon: 'proteina', menu: 'Pollo a la plancha con arroz', precio: 8, tag: 'Alto en proteína', consejo: 'Retira bien la piel antes de servir', ingredientesSensibles: [], edadRecomendada: [3, 11] },
    { id: 8, razon: 'proteina', menu: 'Pescado al horno con arroz', precio: 9, tag: 'Alto en proteína', consejo: 'Revisa bien que no tenga espinas', ingredientesSensibles: ['pescado'], edadRecomendada: [4, 11] },
    { id: 9, razon: 'proteina', menu: 'Tortilla de huevo con arroz', precio: 5, tag: 'Alto en proteína', consejo: 'Agrega verduras picadas finas', ingredientesSensibles: ['huevo'], edadRecomendada: [3, 11] },
    { id: 10, razon: 'economia', menu: 'Arroz con huevo frito', precio: 4, tag: 'Opción económica', consejo: 'Suma una porción de fruta aparte', ingredientesSensibles: ['huevo'], edadRecomendada: [3, 11] },
    { id: 11, razon: 'economia', menu: 'Tallarines con salsa de tomate', precio: 5, tag: 'Opción económica', consejo: 'Agrega verduras ralladas a la salsa', ingredientesSensibles: ['gluten'], edadRecomendada: [3, 11] },
    { id: 12, razon: 'economia', menu: 'Arroz con menestra y plátano', precio: 5, tag: 'Opción económica', consejo: 'El plátano aporta energía extra', ingredientesSensibles: [], edadRecomendada: [3, 11] },
    { id: 13, razon: 'omega3', menu: 'Jurel al horno con arroz', precio: 8, tag: 'Fuente de omega 3', consejo: 'Revisa bien que no tenga espinas', ingredientesSensibles: ['pescado'], edadRecomendada: [4, 11] },
    { id: 14, razon: 'omega3', menu: 'Caballa guisada con arroz', precio: 7, tag: 'Fuente de omega 3', consejo: 'Sírvelo con una ensalada fresca', ingredientesSensibles: ['pescado'], edadRecomendada: [4, 11] },
    { id: 15, razon: 'omega3', menu: 'Ensalada de palta con pan', precio: 6, tag: 'Fuente de omega 3', consejo: 'Buena opción si no le gusta el pescado', ingredientesSensibles: ['gluten'], edadRecomendada: [3, 11] },
    { id: 16, razon: 'familiar', menu: 'Lomo saltado con arroz', precio: 10, tag: 'Plato tradicional', consejo: 'Sirve una porción pequeña para el peque', ingredientesSensibles: [], edadRecomendada: [6, 11] },
    { id: 17, razon: 'familiar', menu: 'Ají de gallina con arroz', precio: 9, tag: 'Plato tradicional', consejo: 'Modera el picante para niños pequeños', ingredientesSensibles: ['lacteos', 'frutos secos'], edadRecomendada: [6, 11] },
    { id: 18, razon: 'familiar', menu: 'Arroz con pollo', precio: 8, tag: 'Plato tradicional', consejo: 'Ideal para compartir en familia', ingredientesSensibles: [], edadRecomendada: [3, 11] },
    { id: 19, razon: 'facil', menu: 'Puré de papa con pollo desmenuzado', precio: 7, tag: 'Fácil de preparar', consejo: 'Lista en menos de 20 minutos', ingredientesSensibles: [], edadRecomendada: [3, 11] },
    { id: 20, razon: 'facil', menu: 'Huevo revuelto con pan', precio: 4, tag: 'Fácil de preparar', consejo: 'Lista en menos de 10 minutos', ingredientesSensibles: ['huevo', 'gluten'], edadRecomendada: [3, 11] },
    { id: 21, razon: 'facil', menu: 'Sopa de verduras con fideos', precio: 5, tag: 'Fácil de preparar', consejo: 'Ideal para días con poco tiempo', ingredientesSensibles: ['gluten'], edadRecomendada: [3, 11] },
]


export const consejos = [
    { id: 1, categoria: 'general', texto: 'Ofrece porciones pequeñas y deja que el niño pida más si aún tiene hambre.' },
    { id: 2, categoria: 'general', texto: 'Introduce alimentos nuevos de a pocos, combinados con otros que ya le gusten.' },
    { id: 3, categoria: 'general', texto: 'Evita distraer con pantallas durante las comidas para que reconozca cuándo está satisfecho.' },
    { id: 4, categoria: 'general', texto: 'Mantén horarios de comida regulares para ayudar a su digestión.' },
    { id: 5, categoria: 'lacteos', texto: 'Si evitas lácteos, refuerza el calcio con menestras, brócoli o bebidas vegetales fortificadas.' },
    { id: 6, categoria: 'lacteos', texto: 'Las bebidas de avena o almendra fortificadas son una buena alternativa a la leche de vaca.' },
    { id: 7, categoria: 'gluten', texto: 'Reemplaza el trigo por arroz, quinua o papa como fuente de carbohidratos.' },
    { id: 8, categoria: 'gluten', texto: 'Revisa etiquetas de salsas y embutidos, ya que muchas contienen trazas de gluten.' },
    { id: 9, categoria: 'huevo', texto: 'Sustituye el huevo por más porciones de menestras o carnes magras para mantener la proteína.' },
    { id: 10, categoria: 'huevo', texto: 'El plátano o la compota de manzana pueden reemplazar al huevo en preparaciones horneadas.' },
    { id: 11, categoria: 'frutos secos', texto: 'Evita también aceites o galletas que puedan contener trazas de frutos secos.' },
    { id: 12, categoria: 'frutos secos', texto: 'Las semillas de girasol o zapallo son una alternativa sin frutos secos para snacks.' },
    { id: 13, categoria: 'pescado', texto: 'Si evitas pescado, obtén omega 3 de la palta, aceite de oliva o linaza molida.' },
    { id: 14, categoria: 'pescado', texto: 'El huevo y las carnes rojas también aportan buena proteína como alternativa al pescado.' },
]

export const recomendacionesPorEdad = [
    {
        edadMin: 3,
        edadMax: 5,
        texto: 'Los niños de 3 a 5 años están formando sus hábitos alimenticios. Es clave ofrecerles variedad de frutas y verduras, y evitar el exceso de azúcares y frituras.'
    },
    {
        edadMin: 6,
        edadMax: 8,
        texto: 'Los niños de 6 a 8 años necesitan más energía por su mayor actividad física. Prioriza carbohidratos integrales, proteínas magras y suficiente calcio para sus huesos en crecimiento.'
    },
    {
        edadMin: 9,
        edadMax: 11,
        texto: 'Los niños de 9 a 11 años están cerca de la pubertad y requieren mayor aporte de hierro y proteína para sostener su crecimiento acelerado.'
    },
];

