// EJERCICIO #3
class ContenedorComponent extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const contenedor = document.createElement('div');
        const headerSlot = document.createElement('slot');
        headerSlot.name = 'header';
        contenedor.appendChild(headerSlot);

        const formSlot = document.createElement('slot');
        contentSlot.name = 'form';
        contenedor.appendChild(formSlot);

        const contentSlot = document.createElement('slot');
        contentSlot.name = 'content';
        contenedor.appendChild(contentSlot);

        shadow.appendChild(contenedor);
    }
}


customElements.define('contenedor-component', ContenedorComponent);

// Componente de Formulario
class MyForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <form class="mt-3">
                <div class="mb-3">
                    <label for="username" class="form-label">Nombre de usuario:</label>
                    <slot name="username-input">
                        <input type="text" class="form-control" id="username" name="username" placeholder="Ingresa tu nombre de usuario" required>
                    </slot>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña:</label>
                    <slot name="password-input">
                        <input type="password" class="form-control" id="password" name="password" placeholder="Ingresa tu contraseña" required>
                    </slot>
                </div>
                <div class="mb-3 form-check">
                    <slot name="remember-me-checkbox">
                        <input type="checkbox" class="form-check-input" id="rememberMe">
                        <label class="form-check-label" for="rememberMe">Recuérdame</label>
                    </slot>
                </div>
                <slot name="submit-button">
                    <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                </slot>
            </form>
        `;
    }
}
customElements.define('my-form', MyForm);
