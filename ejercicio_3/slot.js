// EJERCICIO #3
class ContenedorComponent extends HTMLElement {
    constructor() {
        super();

        // Crear el Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Crear un contenedor y dos slots (encabezado y contenido)
        const contenedor = document.createElement('div');
        const headerSlot = document.createElement('slot');
        headerSlot.name = 'header';
        contenedor.appendChild(headerSlot);

        const contentSlot = document.createElement('slot');
        contentSlot.name = 'content';
        contenedor.appendChild(contentSlot);

        // Añadir el contenedor al Shadow DOM
        shadow.appendChild(contenedor);
    }
}

// Definir el componente personalizado
customElements.define('contenedor-component', ContenedorComponent);
