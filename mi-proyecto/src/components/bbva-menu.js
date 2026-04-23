import { LitElement, html} from 'lit';
import { bbvaMenuStyles } from './bbva-menu.css.js';

export class BbvaMenu extends LitElement {
  
  static properties = {
    activeView: { type: String }
  };

  constructor() {
    super();
    this.activeView = 'add';
  }

  static styles = bbvaMenuStyles;

  _notifyChange(view) {
    this.dispatchEvent(new CustomEvent('change-view', {
      detail: view, bubbles: true, composed: true
    }));
  }

  render() {
    return html`
      <aside class="sidebar">
        <button class="${this.activeView === 'add' ? 'active' : ''}" @click=${() => this._notifyChange('add')}>Agregar Usuario</button>
        <button class="${this.activeView === 'show' ? 'active' : ''}" @click=${() => this._notifyChange('show')}>Mostrar Usuarios Agregados</button>
        <button class="${this.activeView === 'delete' ? 'active' : ''}" @click=${() => this._notifyChange('delete')}>Borrar Usuario Agregado</button>
      </aside>
    `;
  }
}

customElements.define('bbva-menu', BbvaMenu);