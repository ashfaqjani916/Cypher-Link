import { CryptoTable } from '@/components/CryptoTable'
import { ProjectCard } from '@/components/ProjectCard'
import { SiPolymerproject } from 'react-icons/si';

import { useStateContext } from '@/context';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { ToastDemo } from '@/components/ToastDemo';


interface Campaign {
  title: string;
  description: string;
  target: number;
  deadline: number | undefined;
  image: string;
}

export default function Home() {
  const { getCampaigns } = useStateContext();
  const [loading, setLoading] = useState(false);
  const [campaignData, setCampaignData] = useState<Campaign[]>([]); // Change 'any' to the actual type of campaign data

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await getCampaigns?.();
        if (data) {
          setCampaignData(data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchData();
  }, [getCampaigns]);

  return (
    <div className='flex flex-col gap-4'>
      <div className="relative h-[200px]">
        <img className="object-cover w-full h-full rounded-xl" src={"https://wallpapers.com/images/featured/mint-green-ehrs68ag3p3iw2tx.jpg"} alt="" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl"></div>
        <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <p className="flex items-center justify-center gap-3 text-xl font-bold text-white"><span className='bg-gray-900 text-[#4acd8d] p-2 rounded-lg'><SiPolymerproject size={25} /></span> Cypher Link</p>
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-start gap-5'>
        {!loading ? (
          campaignData.map((campaign, index) => (
            <ProjectCard
              key={index}
              title={campaign.title}
              description={campaign.description}
              imageSrc={campaign.image}
              target={2000}
              currentFunding={100}
            />
          ))
        ) : (
          <div className='flex items-center justify-center w-full h-80'>
            <ReactLoading type={'bars'} color={'white'} height={60} width={60} />
          </div>
        )}

      </div>
      <ToastDemo />
      <CryptoTable />
    </div>
  )
}
