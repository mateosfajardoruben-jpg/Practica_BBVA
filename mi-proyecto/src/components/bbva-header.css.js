import {css} from 'lit';

export const bbvaHeaderStyles = css`
    .bbva-header {
      height: 80px; 
      background-color: #06428E; 
      color: white; 
      display: flex;
      align-items: center; 
      padding: 0 2.5rem; 
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .logo-container { 
      display: flex; 
      align-items: baseline; 
      font-family: sans-serif; 
      -webkit-font-smoothing: antialiased; 
    }

    .bbv-text { 
      font-size: 40px; 
      font-weight: 500; 
      letter-spacing: -1.5px; 
      line-height: 1; 
      display: flex; 
      transform: scaleX(1.15); 
      margin-right: 2px; 
    }

    .inverted-v-container { 
      display: inline-flex; 
      align-items: baseline; 
      transform: translateY(-3px); 
    }

    .inverted-v { 
      font-size: 40px; 
      font-weight: 500;
      display: inline-block; 
      transform: rotate(180deg) scaleX(1.15); 
      line-height: 1; 
    }

    .header-right { 
      margin-left: auto; 
      display: flex; 
      gap: 1.5rem; 
      color: #d2e4f3; 
      align-items: center; 
    }

    .material-symbols-outlined { 
      font-family: 'Material Symbols Outlined'; 
      font-size: 24px; 
      cursor: pointer; 
    }
  `;