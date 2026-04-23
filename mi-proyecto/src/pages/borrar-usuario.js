import { LitElement, html} from 'lit';
import { usersStore } from "../usersStore.js";
import { borrarUsuarioStyles } from './borrar-usuario.css.js';

export class BorrarUsuario extends LitElement {
  static properties = {
    triggerUpdate: { state: true }
  };

  constructor() {
    super();
    this.triggerUpdate = 0;
  }

  static styles = borrarUsuarioStyles;

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