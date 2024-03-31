import { CryptoTable } from '@/components/CryptoTable'
import { ProjectCard } from '@/components/ProjectCard'
import { SiPolymerproject } from 'react-icons/si';

import { useStateContext } from '@/context';
import { useEffect } from 'react';

export default function Home() {
  const { getCampaigns } = useStateContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCampaigns?.();
        console.log(data);
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
        <ProjectCard
          title="Renewable Energy Innovation"
          description="Support the development of a groundbreaking renewable energy solution that aims to revolutionize the way we harness and utilize clean energy."
          imageSrc="https://e1.pxfuel.com/desktop-wallpaper/409/772/desktop-wallpaper-laptop-backgrounds-aesthetic-green-mint-green-aesthetic-top-mint-green-aesthetic-2784x2304-for-your-mobile-tablet-explore-38-aesthetic-green-pc-aesthetic-green-pc-clean-aesthetic-laptop.jpg"
          target={2000}
          currentFunding={1200}
        />
        <ProjectCard
          title="Renewable Energy Innovation"
          description="Support the development of a groundbreaking renewable energy solution that aims to revolutionize the way we harness and utilize clean energy."
          imageSrc="https://e1.pxfuel.com/desktop-wallpaper/189/656/desktop-wallpaper-beautiful-landscape-aesthetic-landscape-purple.jpg"
          target={2000}
          currentFunding={1200}
        />

      </div>
      <CryptoTable />
    </div>
  )
}
