import imagenConsejo1 from './assets/nino-comiendo.png'
import imagenConsejo2 from './assets/nino-vegetales.png'
import imagenConsejo3 from './assets/nino-plato-grande.png'
import imagenConsejo4 from './assets/nino-confundido.png'

export const consejosNutricion = [
    {
        id: 1,
        titulo: '¿No quiere comer las menestras?',
        texto: 'Es más común de lo que crees y no significa que estés haciendo algo mal. Prueba mezclarlas con algo que ya come, como el arroz. Si las rechaza al inicio, no te preocupes: a veces toma varios intentos antes de que un niño acepte un sabor nuevo. Sigue ofreciéndolas sin forzarlo. Un poco de limón o tomate en el plato también ayuda a aprovechar mejor su hierro.',
        imagen: imagenConsejo1,
        alt: 'Niño comiendo un plato de menestras'
    },
    {
        id: 2,
        titulo: '¿No quiere comer verduras?',
        texto: 'Puedes comenzar con porciones pequeñas y acompañarlas con un alimento que ya le guste. Cambiar la forma de presentarlas también ayuda: cocidas, picadas o mezcladas en una preparación familiar. No es necesario obligarlo a terminar; lo importante es seguir ofreciendo variedad con paciencia para que se acostumbre poco a poco.',
        imagen: imagenConsejo2,
        alt: 'Niño probando alimentos durante una comida'
    },
    {
        id: 3,
        titulo: '¿Sientes que está comiendo muy poco?',
        texto: 'El apetito de los niños puede variar de un día a otro. Sirve una porción pequeña y permite que pida un poco más si todavía tiene hambre. Mantener horarios de comida y evitar picar constantemente puede ayudar a que llegue con apetito. Observa su alimentación a lo largo de varios días y no solo en una comida.',
        imagen: imagenConsejo3,
        alt: 'Niño sentado frente a su plato de comida'
    },
    {
        id: 4,
        titulo: '¿Solo quiere comer lo mismo?',
        texto: 'Es normal que algunos niños tengan alimentos favoritos. Una opción sencilla es colocar en el plato algo que ya acepta junto con una pequeña porción de un alimento diferente. Deja que lo conozca, lo toque y lo pruebe a su ritmo. La exposición repetida y sin presión puede hacer que poco a poco acepte nuevos sabores.',
        imagen: imagenConsejo4,
        alt: 'Niño aprendiendo a probar alimentos nuevos'
    }
]
