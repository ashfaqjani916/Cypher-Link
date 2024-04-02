import { useContext, createContext } from 'react';
import { CampaignData } from '@/constants';

import { useAddress, useSigner } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';

interface Campaign {
  owner: string;
  title: string;
  description: string;
  target: number;
  deadline: number;
  amountCollected: number;
  image: string;
  donators: string[];
  donations: number[];
}


interface CampaignCreate {
  title: string;
  description: string;
  target: number;
  deadline: number | undefined;
  image: string;
}

interface CrowdFundingContextType {
  campaigns: Campaign[];
  publishCampaign: (form: CampaignCreate) => Promise<void>;
  donateToCampaign: (id: number) => Promise<void>;
  getDonators: (id: number) => Promise<{ donators: string[], donations: number[] }>;
  getCampaigns: () => Promise<Campaign[]>;
  getUserCampaigns: () => Promise<Campaign[]>
  donate: (pId: number, amount: string) => Promise<any>
  getDonations: (pId: number) => Promise<{ donator: any; donation: string; }[]>
}

const StateContext = createContext<Partial<CrowdFundingContextType>>({});


export const StateContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {


  const address = useAddress();
  const signer = useSigner();

  const publishCampaign = async (form: CampaignCreate) => {
    if (signer) {
      const sdk = ThirdwebSDK.fromSigner(signer, "sepolia");
      const contract = await sdk.getContract('0xB8Cd14CD7881187948E168a0923eb750d2c21B5e');
      sdk.getSigner()
      try {
        const data = await contract.call(
          'createCampaign',
          [
            signer?.getAddress(),
            form.title,
            form.description,
            form.target,
            form.deadline,
            form.image,
          ]
        );
        console.log("contract call success", data)
      } catch (error) {
        console.log("contract call failure", error)
      }
    }

  }




  const getCampaigns = async () => {
    try {
      const sdk = new ThirdwebSDK("sepolia");
      const contract = await sdk.getContract('0xB8Cd14CD7881187948E168a0923eb750d2c21B5e');
      const campaigns = await contract.call('getCampaigns');

      const parsedCampaings = campaigns.map((campaign: CampaignData, i: number) => ({
        owner: campaign.owner,
        title: campaign.title,
        description: campaign.description,
        target: ethers.utils.formatEther(campaign.target.toString()),
        deadline: new Date(campaign.deadline).getTime(),
        amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
        image: campaign.image,
        pId: i
      }));

      return parsedCampaings;
    } catch (error) {
      console.error("Error fetching campaigns:", error);
      return [];
    }
  }


  const getUserCampaigns = async () => {
    const sdk = new ThirdwebSDK("sepolia");
    const allCampaigns = await getCampaigns();
    sdk.getSigner()
    const filteredCampaigns = allCampaigns.filter((campaign: CampaignData) => campaign.owner === address);
    return filteredCampaigns;
  }

  const donate = async (pId: number, amount: string) => {
    const sdk = new ThirdwebSDK("sepolia");
    const contract = await sdk.getContract('0xf59A1f8251864e1c5a6bD64020e3569be27e6AA9');
    const data = await contract.call('donateToCampaign', [pId], { value: ethers.utils.parseEther(amount) });

    return data;
  }

  const getDonations = async (pId: number) => {
    const sdk = new ThirdwebSDK("sepolia");
    const contract = await sdk.getContract('0xf59A1f8251864e1c5a6bD64020e3569be27e6AA9');
    const donations = await contract.call('getDonators', [pId]);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString())
      })
    }

    return parsedDonations;
  }


  return (
    <StateContext.Provider
      value={{
        publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
