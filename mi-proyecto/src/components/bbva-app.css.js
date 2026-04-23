import {css} from 'lit';
export const bbvaAppStyles = css`
:host { display: block; height: 100vh; }
.app-container { display: flex; flex-direction: column; height: 100%; }
.app-body { display: flex; flex: 1; overflow: hidden;}
 .content-area {
      flex: 1;
      background-color: var(--bbva-bg-main, #f4f6fb);
      overflow-y: auto;
      padding: 2.5rem;
    }
`