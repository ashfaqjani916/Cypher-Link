import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import App from './App';
import './index.css';
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
      <App />
    </Router>
  </ThirdwebProvider>
);
