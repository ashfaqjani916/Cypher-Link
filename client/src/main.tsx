import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import App from './App';
import './index.css';
import { MetaMaskProvider } from "@metamask/sdk-react";
// Remove the unused import statement
//  import {StateProvider} from './context';

type ChainIdProps = {
  desiredChainId: ChainId;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const chainIdProps: ChainIdProps = {
  desiredChainId: ChainId.Mumbai,
};

root.render(
  <ThirdwebProvider {...chainIdProps}>
    <Router>
    <MetaMaskProvider
            debug={false}
            sdkOptions={{
                dappMetadata: {
                    name: "Example React Dapp",
                    url: window.location.href,
                },
                // Other options
            }}
        >
            <App />
        </MetaMaskProvider>
    </Router>
  </ThirdwebProvider>
);
