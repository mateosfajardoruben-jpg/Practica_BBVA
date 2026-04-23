import { LitElement, html} from 'lit';
import { usersStore } from "../usersStore.js";
import { agregarUsuarioStyles } from './agregar-usuario.css.js';

export class AgregarUsuario extends LitElement {
  
  
  static properties = {
    previewData: { type: Object }
  };

  constructor() {
    super();
    this.previewData = null;
  }

  static styles = agregarUsuarioStyles;

  _handleEnviar() {
    const data = {
      nombre: this.renderRoot.querySelector('#nombre').value.trim(),
      direccion: this.renderRoot.querySelector('#direccion').value.trim(),
      provincia: this.renderRoot.querySelector('#provincia').value,
      email: this.renderRoot.querySelector('#email').value.trim(),
      telefono: this.renderRoot.querySelector('#telefono').value.trim(),
      sexo: this.renderRoot.querySelector('#sexo').value
    };

    if (!data.nombre || !data.email) {
      alert("El nombre y el email son campos obligatorios.");
      return;
    }

    const duplicado = usersStore.some(user => user.email.toLowerCase() === data.email.toLowerCase());
    
    if (duplicado) {
      alert("Este usuario ya ha sido registrado previamente.");
      return;
    }

    usersStore.push(data);
    this.previewData = { ...data };
    this._limpiarFormulario();
  }

  _handleBorrar() {
    this._limpiarFormulario();
    this.previewData = null;
  }

  _limpiarFormulario() {
    this.renderRoot.querySelectorAll('input, select').forEach(el => el.value = '');
  }

  render() {
    return html`
      <h3 class="view-title">Agregar Usuario</h3>

      <div class="container">
        <div class="col">
          <h4>Formulario</h4>
          <div class="form-grid">
            <label><span class="label-text">Nombre:</span> <input type="text" id="nombre"></label>
            <label><span class="label-text">Dirección:</span> <input type="text" id="direccion"></label>
            <label><span class="label-text">Provincia:</span> 
              <select id="provincia">
                <option value="">Seleccione</option>
                <option>Buenos Aires</option>
                <option>Madrid</option>
                <option>Granada</option>
              </select>
            </label>
            <label><span class="label-text">Email:</span> <input type="email" id="email"></label>
            <label><span class="label-text">Teléfono:</span> <input type="tel" id="telefono"></label>
            <label><span class="label-text">Sexo:</span> 
              <select id="sexo">
                <option value="">Seleccione</option>
                <option>Masculino</option>
                <option>Femenino</option>
              </select>
            </label>
          </div>

          <div class="button-group">
            <button id="enviar" @click=${this._handleEnviar}>Enviar</button>
            <button id="borrar" @click=${this._handleBorrar}>Borrar Datos</button>
          </div>
        </div>

        <div class="col">
          <h4>Datos del usuario</h4>
          <div id="preview">
            ${this.previewData 
              ? html`
                  <div class="preview-row"><span class="preview-label">Nombre:</span> <span class="preview-value">${this.previewData.nombre}</span></div>
                  <div class="preview-row"><span class="preview-label">Dirección:</span> <span class="preview-value">${this.previewData.direccion}</span></div>
                  <div class="preview-row"><span class="preview-label">Provincia:</span> <span class="preview-value">${this.previewData.provincia}</span></div>
                  <div class="preview-row"><span class="preview-label">Email:</span> <span class="preview-value">${this.previewData.email}</span></div>
                  <div class="preview-row"><span class="preview-label">Teléfono:</span> <span class="preview-value">${this.previewData.telefono}</span></div>
                  <div class="preview-row"><span class="preview-label">Sexo:</span> <span class="preview-value">${this.previewData.sexo}</span></div>
                `
              : html`<p class="placeholder-text">Esperando datos...</p>`
            }
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('agregar-usuario', AgregarUsuario);