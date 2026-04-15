import { LitElement, html, css } from 'lit';
import { usersStore } from "../usersStore.js";

export class AgregarUsuario extends LitElement {
  
  
  static properties = {
    previewData: { type: Object }
  };

  constructor() {
    super();
    this.previewData = null;
  }

  static styles = css`
    :host {
      display: block;
    }

    .view-title { color: #072146; margin-bottom: 2rem; font-size: 1.5rem; }
    
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: start;
    }

    .col {
      background: white;
      padding: 2rem;
      border-radius: 2px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }

    h4 { color: #072146; margin-bottom: 1.5rem; border-bottom: 1px solid #f0f4f7; padding-bottom: 0.5rem; }

    .form-grid { display: flex; flex-direction: column; gap: 1.2rem; }

    label { display: flex; align-items: center; font-size: 0.9rem; color: #333; font-weight: 500; }
    .label-text { width: 100px; min-width: 100px; }

    input, select {
      flex: 1;
      padding: 0.6rem;
      border: 1px solid #dcdcdc;
      border-radius: 2px;
      outline: none;
    }

    .button-group {
      display: flex;
      gap: 1rem;
      margin-top: 2.5rem;
    }

    button {
      padding: 0.8rem 2.5rem;
      border-radius: 3px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      transition: background 0.2s;
    }

    button#enviar { background-color: #06428E; color: white; }
    button#enviar:hover { background-color: #004481; }

    button#borrar { background-color: #e9e9e9; color: #666; }
    button#borrar:hover { background-color: #dcdcdc; }

    .preview-row { display: flex; margin-bottom: 1rem; }
    .preview-label { width: 100px; color: #888; font-size: 0.9rem; }
    .preview-value { color: #072146; font-weight: 500; font-size: 0.9rem; }
    .placeholder-text { color: #999; font-style: italic; }
  `;

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