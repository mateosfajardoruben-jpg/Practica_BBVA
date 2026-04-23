import {css} from 'lit';

export const agregarUsuarioStyles = css`
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