import React, { useEffect,useState } from 'react';
import CountBox from '@/components/CountBox';
import { ProjectCard } from '@/components/ProjectCard';

interface Donator {
  donator: string;
  donation: number;
}





function Dashboard() {
  const [donators, setDonators] = useState<Donator[]>([]);

  useEffect(() => {
    const updateDonators = () => {
      const newDonators = [];
      for (let i = 0; i < 8; i++) {
        const donator = {
          donator: `0x${Math.random().toString(16).substr(2, 8)}`,
          donation: parseFloat((Math.random()).toFixed(2)),
        };
        newDonators.push(donator);
      }
      setDonators(newDonators);
    };

    // Initial update
    updateDonators();

    // Set up interval for periodic updates
    const intervalId = setInterval(() => {
      updateDonators();
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); 
  return (
    <div className="flex flex-col items-start justify-between gap-5 text-white lg:flex-row">
      {/* User Details and Counts */}
      <div className="">
        <div className="flex items-center gap-4 my-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
            <img src={'/metamask-icon.webp'} alt="user" className="object-contain w-8 h-8" />
          </div>
          <div>
            <h4 className="font-epilogue font-semibold text-[14px] break-all">0x72857e5a7c0096f0729041d6DDAc288813e8Dc9c</h4>
            <p className="mt-1 font-epilogue font-normal text-[12px] text-[#808191]">10 Campaigns</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-10 mb-4">
          <CountBox title='Campaigns' value={10} />
          <CountBox title='Total Earned' value={3.75} />
          <CountBox title='Total Donated' value={2.54} />
        </div>

        <h1 className='mb-2 text-2xl font-bold text-white'>My Campaigns</h1>

        <div className='flex flex-wrap items-center justify-start gap-5 mb-5'>
          <ProjectCard
            title="Renewable Energy Innovation"
            description="Support the development of a groundbreaking renewable energy solution that aims to revolutionize the way we harness and utilize clean energy."
            imageSrc="https://images8.alphacoders.com/132/1323371.png"
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
      </div>

      {/* Recent Transactions and Donations */}
      <div className="p-4">
      <div className="mb-4 w-80 lg:w-96">
    <h1 className="mb-2 text-2xl font-bold text-[#1dc071]">Recent Transactions</h1>
    {donators.length > 0 ? (
      <div>
        {donators.map((item, index) => (
          <div
            key={`${item.donator}-${index}`}
            className="flex items-center justify-between gap-4 border-b border-[#2c2f32] py-2"
          >
            <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">
              {index + 1}. {item.donator} 
            </p>
            <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll">
              {item.donation} Eth
            </p>
          </div>
        ))}
      </div>
    ) : (
      <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
        No transactions yet.
      </p>
    )}
  </div>
  <div>
    <h1 className="mb-2 text-2xl font-bold text-[#1dc071]">Recent Donations</h1>
    {donators.length > 0 ? (
      <div>
        {donators.map((item, index) => (
          <div
            key={`${item.donator}-${index}`}
            className="flex items-center justify-between gap-4 border-b border-[#2c2f32] py-2"
          >
            <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">
              {index + 1}. {item.donator}
            </p>
            <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll">
              {item.donation} Eth
            </p>
          </div>
        ))}
      </div>
    ) : (
      <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
        No donations yet.
      </p>
    )}
  </div>
</div>

    </div>
  );
}

export default Dashboard;
