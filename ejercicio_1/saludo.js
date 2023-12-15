// EJERCICIO #1
class SaludoComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'closed' });

        const saludo = document.createElement('p');
        saludo.textContent = '¡Hola, Mundo!';
        shadow.appendChild(saludo);
    }
}

customElements.define('saludo-component', SaludoComponent);






