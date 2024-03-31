import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import App from './App';
import './index.css';
import { StateContextProvider } from './context';
import {
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);



root.render(
  <ThirdwebProvider
    supportedWallets={[
      metamaskWallet({
        recommended: true,
      }),
      coinbaseWallet({
        recommended: false
      }),
      walletConnect(),
    ]}
    clientId='1db28cb0dd435c089a8b8e9630e04dcb8c67ee612ffd40ed2cc518da4fc5d517'

  >
    <StateContextProvider>
      <Router>

        <App />
      </Router>
    </StateContextProvider>
  </ThirdwebProvider>
);
