import { LitElement, html} from 'lit';
import { bbvaAppStyles } from './bbva-app.css.js';

import './bbva-header.js';
import './bbva-menu.js';
import '../pages/agregar-usuario.js';
import '../pages/mostrar-usuarios.js';
import '../pages/borrar-usuario.js';

export class BbvaApp extends LitElement {
  // 1. Reemplazamos @state() por static properties
  static properties = {
    currentView: { state: true }
  };
  // 2. Mantenemos los estilos como antes pero importados desde un archivo separado
  static styles = bbvaAppStyles;

  constructor() {
    super();
    this.currentView = 'add';
  }

  _handleViewChange(e) {
    this.currentView = e.detail;
  }

  render() {
    return html`
      <div class="app-container">
        <bbva-header></bbva-header>
        <div class="app-body">
          <bbva-menu .activeView=${this.currentView} @change-view=${this._handleViewChange}></bbva-menu>
          
          <main class="content-area">
            ${this.currentView === 'add' ? html`<agregar-usuario></agregar-usuario>` : ''}
            ${this.currentView === 'show' ? html`<mostrar-usuarios></mostrar-usuarios>` : ''}
            ${this.currentView === 'delete' ? html`<borrar-usuario></borrar-usuario>` : ''}
          </main>
        </div>
      </div>
    `;
  }
}

// 3. Reemplazamos @customElement por la definición estándar al final
customElements.define('bbva-app', BbvaApp);