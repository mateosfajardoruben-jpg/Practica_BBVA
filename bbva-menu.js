import { LitElement, html, css } from 'lit';

export class BbvaMenu extends LitElement {
  
  static properties = {
    activeView: { type: String }
  };

  constructor() {
    super();
    this.activeView = 'add';
  }

  static styles = css`
    :host { display: block; width: 260px; background-color: var(--bbva-aside-dark, #072146); height: 100%; }
    .sidebar { height: 100%; display: flex; flex-direction: column; padding-top: 10px; }
    button {
      width: 100%; padding: 1.2rem 1.5rem; background: transparent; border: none;
      color: white; text-align: left; cursor: pointer; font-size: 0.95rem;
      border-left: 6px solid transparent; transition: background 0.2s ease;
    }
    button:hover { background-color: rgba(255, 255, 255, 0.05); }
    button.active {
      background-color: var(--bbva-active-blue, #125499);
      border-left: 6px solid var(--bbva-accent-cyan, #0076d1);
      font-weight: 500;
    }
  `;

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