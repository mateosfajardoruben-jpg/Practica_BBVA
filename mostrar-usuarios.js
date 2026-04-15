import { LitElement, html, css } from 'lit';
import { usersStore } from "../usersStore.js";

export class MostrarUsuarios extends LitElement {
  static properties = {
    openIndex: { type: Number }
  };

  constructor() {
    super();
    this.openIndex = -1;
  }

  static styles = css`
    :host { display: block; --bbva-navy: #072146; --bbva-core: #004481; --bbva-active-blue: #125499; }
    h3 { color: var(--bbva-navy); font-weight: 500; margin-bottom: 1.5rem; font-size: 1.4rem; }
    .empty-state { padding: 2rem; color: #666; background: white; border-radius: 2px; }
    
    .user-card { background: white; border-radius: 2px; margin-bottom: 0.5rem; box-shadow: 0 2px 5px rgba(0,0,0,0.05); overflow: hidden; }
    .accordion-header { padding: 1.2rem 1.5rem; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: background 0.2s; }
    .accordion-header:hover { background-color: #fcfcfc; }
    
    .user-info { display: flex; gap: 2rem; align-items: center; flex: 1; }
    .user-name { font-weight: 600; color: var(--bbva-navy); min-width: 150px; }
    
    .toggle-icon-container { width: 32px; height: 32px; position: relative; background: #f4f4f4; border-radius: 50%; transition: 0.3s ease; display: flex; align-items: center; justify-content: center; }
    .toggle-icon-container::before, .toggle-icon-container::after { content: ''; position: absolute; background-color: var(--bbva-active-blue); transition: 0.3s ease; }
    .toggle-icon-container::before { width: 14px; height: 2px; }
    .toggle-icon-container::after { width: 2px; height: 14px; }
    
    .user-card.is-open .toggle-icon-container { transform: rotate(45deg); background: var(--bbva-core); }
    .user-card.is-open .toggle-icon-container::before, .user-card.is-open .toggle-icon-container::after { background-color: white; }
    
    .details-panel { max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out, padding 0.3s ease; background-color: #fafafa; }
    .user-card.is-open .details-panel { max-height: 500px; padding: 1.5rem; border-top: 1px solid #eee; }
    
    .details-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
    .detail-item { display: flex; font-size: 0.9rem; }
    .detail-label { width: 100px; color: #888; }
    .detail-value { color: #333; font-weight: 400; }
  `;

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