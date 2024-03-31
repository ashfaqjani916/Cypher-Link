import React from 'react';
import { ConnectWallet } from '@thirdweb-dev/react'; // Import the ConnectWallet component

const CustomButton: React.FC = () => {
  return (
    <div>
      <ConnectWallet />
    </div>
  );
}

export default CustomButton;
