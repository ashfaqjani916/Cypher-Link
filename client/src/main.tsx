import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import App from './App';
import './index.css';
import { MetaMaskProvider } from "@metamask/sdk-react";
import { StateContextProvider } from './context';
// Remove the unused import statement
//  import {StateProvider} from './context';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);



root.render(
  <ThirdwebProvider
    clientId='1db28cb0dd435c089a8b8e9630e04dcb8c67ee612ffd40ed2cc518da4fc5d517'
  >
    <StateContextProvider>
      <Router>
        <MetaMaskProvider
          debug={false}
          sdkOptions={{
            dappMetadata: {
              name: "Example React Dapp",
              url: window.location.href,
            },
          }}
        >
          <App />
        </MetaMaskProvider>
      </Router>
    </StateContextProvider>
  </ThirdwebProvider>
);
