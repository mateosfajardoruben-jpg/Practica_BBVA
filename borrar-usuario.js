import { LitElement, html, css } from 'lit';
import { usersStore } from "../usersStore.js";

export class BorrarUsuario extends LitElement {
  static properties = {
    triggerUpdate: { state: true }
  };

  constructor() {
    super();
    this.triggerUpdate = 0;
  }

  static styles = css`
    :host { display: block; --bbva-navy: #072146; }
    h3 { color: var(--bbva-navy); font-weight: 500; margin-bottom: 1.5rem; font-size: 1.4rem; }
    .empty-state { padding: 2rem; color: #666; background: white; border-radius: 2px; }
    .user-list { display: flex; flex-direction: column; gap: 0.5rem; }
    .user-item { display: flex; justify-content: space-between; align-items: center; background: white; padding: 1rem 1.5rem; border-radius: 2px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
    .user-info { display: flex; flex-direction: column; gap: 0.3rem; }
    .name { font-weight: 600; color: var(--bbva-navy); }
    .email { color: #666; font-size: 0.85rem; }
    button { background-color: #e5f0f6; color: #004481; border: none; padding: 0.6rem 1rem; border-radius: 3px; cursor: pointer; font-weight: 500; transition: background 0.2s; }
    button:hover { background-color: #d1e5f0; color: #072146; }
  `;

  _borrarUsuario(index) {
    if (confirm('¿Estás seguro de que deseas borrar a este usuario?')) {
      usersStore.splice(index, 1);
      this.triggerUpdate++; 
    }
  }

  render() {
    if (usersStore.length === 0) {
      return html`
        <h3>Borrar Usuario</h3>
        <div class="empty-state">No hay usuarios para borrar.</div>
      `;
    }

    return html`
      <h3>Borrar Usuario</h3>
      <div class="user-list">
        ${usersStore.map((user, index) => html`
          <div class="user-item">
            <div class="user-info">
              <span class="name">${user.nombre}</span>
              <span class="email">${user.email}</span>
            </div>
            <button @click=${() => this._borrarUsuario(index)}>Eliminar</button>
          </div>
        `)}
      </div>
    `;
  }
}
customElements.define('borrar-usuario', BorrarUsuario);