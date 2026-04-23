import { LitElement, html, css } from 'lit';
import { usersStore } from "../usersStore.js";
import { mostrarUsuariosStyles } from './mostrar-usuarios.css.js';

export class MostrarUsuarios extends LitElement {
  static properties = {
    openIndex: { type: Number }
  };

  constructor() {
    super();
    this.openIndex = -1;
  }

  static styles = mostrarUsuariosStyles;

  _toggleAccordion(index) {
    this.openIndex = this.openIndex === index ? -1 : index;
  }

  render() {
    if (usersStore.length === 0) {
      return html`
        <h3>Mostrar Usuarios Agregados</h3>
        <div class="empty-state">No hay usuarios registrados actualmente.</div>
      `;
    }

    return html`
      <h3>Mostrar Usuarios Agregados</h3>
      ${usersStore.map((user, index) => html`
        <div class="user-card ${this.openIndex === index ? 'is-open' : ''}">
          <div class="accordion-header" @click=${() => this._toggleAccordion(index)}>
            <div class="user-info">
              <span class="user-name">${user.nombre}</span>
              <span style="color: #666; font-size: 0.9rem;">Teléfono: <strong style="color: var(--bbva-navy)">${user.telefono}</strong></span>
              <span style="color: #666; font-size: 0.8rem; opacity: 0.7;">Email: ${user.email}</span>
            </div>
            <div class="toggle-icon-container"></div>
          </div>
          <div class="details-panel">
            <div class="details-grid">
              <div class="detail-item"><span class="detail-label">Dirección:</span><span class="detail-value">${user.direccion}</span></div>
              <div class="detail-item"><span class="detail-label">Provincia:</span><span class="detail-value">${user.provincia}</span></div>
              <div class="detail-item"><span class="detail-label">Email:</span><span class="detail-value">${user.email}</span></div>
              <div class="detail-item"><span class="detail-label">Sexo:</span><span class="detail-value">${user.sexo}</span></div>
            </div>
          </div>
        </div>
      `)}
    `;
  }
}
customElements.define('mostrar-usuarios', MostrarUsuarios);