// Componente emisor
class EmisorComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container mt-4">
                <!-- El componente emisor-component debe tener un botón. -->
                <button id="boton-emisor" class="btn btn-danger">Haz clic</button>
            </div>
        `;

        const botonEmisor = this.querySelector('#boton-emisor');

        botonEmisor.addEventListener('click', () => {
            const customEvent = new CustomEvent('mensajeEnviado', {
                detail: { mensaje: '¡Hola desde el emisor!' }
            });
            document.dispatchEvent(customEvent);
        });
    }
}
customElements.define('emisor-component', EmisorComponent);

// Componente receptor
class ReceptorComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container mt-4">
                <div id="info-container" class="alert alert-info">Esperando mensaje...</div>
            </div>
        `;

        document.addEventListener('mensajeEnviado', (event) => {
            const infoContainer = this.querySelector('#info-container');
            infoContainer.textContent = event.detail.mensaje;
        });
    }
}
customElements.define('receptor-component', ReceptorComponent);
