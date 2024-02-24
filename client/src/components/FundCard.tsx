import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog"


import { FaEthereum } from "react-icons/fa";
import { SiBitcoinsv } from "react-icons/si";
import { TbCurrencySolana } from "react-icons/tb";

interface Chainnet {
  id: string;
  name: string;
  value: string;
  icon: React.ReactNode;
  selected?: boolean; // Add selected property
}

const initialChainnets: Chainnet[] = [
  { id: 'bitcoinsv', name: 'Bitcoin SV', value: '0.025', icon: <SiBitcoinsv size={25} /> },
  { id: 'ethereum', name: 'Ethereum', value: '0.0335', icon: <FaEthereum size={25} /> },
  { id: 'solana', name: 'Solana', value: '0.025', icon: <TbCurrencySolana size={25} /> },
];

interface FundCardProps {
  amount: string;
  setAmount: (value: string) => void;
}

export function FundCard({ amount, setAmount }: FundCardProps) {
  const [chainnets, setChainnets] = useState<Chainnet[]>(initialChainnets);

  const handleChainnetSelect = (selectedId: string) => {
    const updatedChainnets = chainnets.map((chainnet) => ({
      ...chainnet,
      selected: chainnet.id === selectedId,
    }));
    setChainnets(updatedChainnets);
  };

  const handleFundCampaign = () => {
    const selectedChainnet = chainnets.find((chainnet) => chainnet.selected);
    console.log('Selected Chainnet:', selectedChainnet);
    console.log('Amount:', amount);
    // Add your logic for handling the fund campaign here
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#8c6dfd] w-full hover:bg-[#6847db]"> Fund the campaign</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]  bg-black border border-[#4acd8d]">
        <DialogHeader>
          <DialogTitle className="text-[#4acd8d]"> Fund the campaign</DialogTitle>
          <DialogDescription className="text-gray-300">
          Back it because you believe in it. Support the project for no reward, just because it speaks to you.
          </DialogDescription>
        </DialogHeader>
          <input 
              type="number"
               placeholder="0.1"
              step="0.01"
              className="w-full text-white bg:black py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              />
        <ul className="flex items-center justify-around">
        {chainnets.map((chainnet) => (
          <li key={chainnet.id}>
            <input type="radio"
             id={`chainnet-${chainnet.id}`}
              name="chainnet"
               value={chainnet.id}
                className="hidden peer"
                onChange={() => handleChainnetSelect(chainnet.id)}
                 required />
            <label htmlFor={`chainnet-${chainnet.id}`} className="inline-flex items-center justify-between w-full p-3 text-gray-100 bg-black border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#4acd8d] peer-checked:text-[#4acd8d]">
              <div className="flex items-center gap-3">
                <p>{chainnet.icon}</p>
                <p>{chainnet.value}</p>
              </div>
            </label>
          </li>
        ))}
</ul>

        <DialogFooter>
          <DialogClose asChild>
          <Button 
                className="w-full bg-[#4acd8d] hover:bg-[#4acd8d]"
                onClick={handleFundCampaign}
              >Fund Campaign</Button>
          </DialogClose>
      
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
