import { LitElement, html,} from 'lit';
import { bbvaHeaderStyles } from './bbva-header.css.js';

export class BbvaHeader extends LitElement {
// 1. Mantenemos los estilos como antes pero importados desde un archivo separado
 static styles = bbvaHeaderStyles;

  render() {
    return html`
      <header class="bbva-header">
        <div class="logo-container">
          <div class="bbv-text">BBV</div>
          <div class="inverted-v-container"><div class="inverted-v">V</div></div>
        </div>
        <div class="header-right">
           <span class="material-symbols-outlined">search</span>
           <span class="material-symbols-outlined">notifications</span>
           <span class="material-symbols-outlined">account_circle</span>
        </div>
      </header>
    `;
  }
}

customElements.define('bbva-header', BbvaHeader);