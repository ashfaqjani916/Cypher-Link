import React , {useContext,createContext} from 'react';

import {useAddress, useContract, ConnectWallet} from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateProvider = ({children}) => {

    
}