// import React, { createContext, useContext, useState, ReactNode } from 'react';
// import { useAddress, useContract, ConnectWallet, useContractWrite } from '@thirdweb-dev/react';
// import { ethers } from 'ethers';

// interface StateContextValues {
//   address: string;
//   contract: ethers.Contract;
//   createCampaign: (form: CampaignForm) => Promise<void>;
// }

// const StateContext = createContext<StateContextValues | null>(null);

// interface CampaignForm {
//   title: string;
//   description: string;
//   target: ethers.BigNumber;
//   deadline: Date;
//   image: string;
// }

// interface StateProviderProps {
//   children: ReactNode;
// }

// export const StateProvider: React.FC<StateProviderProps> = ({ children }: StateProviderProps) => {
//   const [connected, setConnected] = useState(false);

//   const { contract } = useContract<ethers.Contract>('0xB8Cd14CD7881187948E168a0923eb750d2c21B5e' as string);
//   const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');

//   const address = useAddress();

//   const connectWallet = async () => {
//     try {
//       await ConnectWallet();
//       setConnected(true);
//     } catch (error) {
//       console.error('Wallet connection error:', error);
//     }
//   };

//   const publishCampaign = async (form: CampaignForm) => {
//     try {
//       const data = await createCampaign([
//         address,
//         form.title,
//         form.description,
//         form.target,
//         new Date(form.deadline).getTime(),
//         form.image,
//       ]);
//       console.log('Contract call successful', data);
//     } catch (error) {
//       console.error('Contract call failure', error);
//     }
//   };

//   return (
//     <StateContext.Provider value={{ address :string, contract, createCampaign: publishCampaign }}>
//       {connected ? children : <button onClick={connectWallet}>Connect Wallet</button>}
//     </StateContext.Provider>
//   );
// };

// export const useStateContext = () => useContext(StateContext);
