import {css} from 'lit';
export const bbvaMenuStyles = css`
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