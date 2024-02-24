import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';

import App from './App';
import './index.css';

ReactDOM.render(
  <ThirdwebProvider> 
    <Router>
      <App />
    </Router>
  </ThirdwebProvider>,
  document.getElementById('root')
);
