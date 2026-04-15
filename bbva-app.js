import { LitElement, html, css } from 'lit';

import './bbva-header.js';
import './bbva-menu.js';
import './agregar-usuario.js';
import './mostrar-usuarios.js';
import './borrar-usuario.js';

export class BbvaApp extends LitElement {
  // 1. Reemplazamos @state() por static properties
  static properties = {
    currentView: { state: true }
  };

  constructor() {
    super();
    this.currentView = 'add';
  }

  static styles = css`
    :host { display: block; height: 100vh; }
    .app-container { display: flex; flex-direction: column; height: 100%; }
    .app-body { display: flex; flex: 1; overflow: hidden; }
    .content-area {
      flex: 1;
      background-color: var(--bbva-bg-main, #f4f6fb);
      overflow-y: auto;
      padding: 2.5rem;
    }
  `;

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

// 2. Reemplazamos @customElement por la definición estándar al final
customElements.define('bbva-app', BbvaApp);