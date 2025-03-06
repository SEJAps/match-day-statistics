# Heatmap Component with React + TypeScript + Canvas

Un componente básico de mapa de calor implementado con React, TypeScript y Canvas API sin dependencias externas.

![Ejemplo de Mapa de Calor](https://via.placeholder.com/600x400?text=Heatmap+Preview) <!-- Puedes reemplazar esto con una captura real -->

## Características Principales

- Generación de datos aleatorios
- Visualización mediante Canvas nativo
- Gradiente de color personalizable
- Tamaño dinámico de puntos según intensidad
- Opacidad variable basada en la intensidad
- Tipado fuerte con TypeScript

## Instalación y Uso

### Prerrequisitos

- Node.js (v14+)
- npm/yarn

### Pasos de Instalación

1. Clona el repositorio o copia el componente
2. Instala las dependencias:

```bash
npm install react typescript @types/react
Importa el componente en tu aplicación:

tsx
Copy
import Heatmap from './components/Heatmap';
Úsalo en tu aplicación:

tsx
Copy
function App() {
  return (
    <div className="App">
      <h1>Mi Mapa de Calor</h1>
      <Heatmap />
    </div>
  );
}
Personalización
El componente acepta las siguientes propiedades (opcionalmente):

tsx
Copy
interface HeatmapProps {
  width?: number;
  height?: number;
  dataPoints?: DataPoint[];
  colors?: string[];
}
Ejemplo de personalización:
tsx
Copy
<Heatmap
  width={800}
  height={600}
  colors={['#00ff00', '#ffff00', '#ff0000']}
/>
Parámetros ajustables
Dimensiones del Canvas:

tsx
Copy
const width = 600;  // Ancho del mapa
const height = 400; // Alto del mapa
Generación de Datos:

tsx
Copy
const generateData = (): DataPoint[] => {
  // Número de puntos
  const points = 100;
  // Rango de intensidad (0 a 1)
  const intensity = Math.random();
};
Configuración de Colores:

tsx
Copy
const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 50);
gradient.addColorStop(0, 'rgba(255, 0, 0, 1)');  // Color central
gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');  // Color exterior
Radio de los Puntos:

tsx
Copy
const radius = point.intensity * 30; // Ajusta el multiplicador para cambiar el tamaño
Opacidad:

tsx
Copy
ctx.globalAlpha = Math.max(0.1, point.intensity); // Rango entre 0.1 y 1
Mejoras Futuras (Roadmap)
Implementar escala de colores múltiples

Añadir suavizado entre puntos

Incluir interactividad (hover, clic)

Agregar zoom y desplazamiento

Crear leyenda de colores

Optimizar rendimiento para grandes datasets

Añadir controles de configuración en tiempo real

Cómo Funciona
El componente utiliza:

Canvas API para renderizado de alto rendimiento

Gradientes radiales para el efecto de calor

Algoritmo básico de superposición de puntos

TypeScript para validación de tipos

Hooks de React para gestión del ciclo de vida

Licencia
MIT License - Libre para uso y modificación

Copy

Este README incluye:
1. Descripción general del proyecto
2. Instrucciones de instalación y uso
3. Opciones de personalización
4. Roadmap de mejoras
5. Explicación técnica básica
6. Información de licencia

Guarda este archivo como `README.md` en la raíz de tu proyecto. Puedes personalizar las secciones según tus necesidades específicas y agregar capturas reales del componente en acción cuando lo implementes. ¿Necesitas ayuda con alguna otra parte del proyecto?
```
