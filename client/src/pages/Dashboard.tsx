import CountBox from '@/components/CountBox';
import { ProjectCard } from '@/components/UserProjectCard';
import { useStateContext } from '@/context';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';




interface Campaign {
  title: string;
  description: string;
  target: number;
  deadline: number | undefined;
  image: string;
}

interface Donator {
  donator: string;
  donation: number;
}

function Dashboard() {
  const [donators, setDonators] = useState<Donator[]>([]);
  const { getUserCampaigns } = useStateContext();
  const [loading, setLoading] = useState(false);
  const [campaignData, setCampaignData] = useState<Campaign[]>([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await getUserCampaigns?.();
        if (data) {
          setCampaignData(data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchData();
  }, [getUserCampaigns]);

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
    updateDonators();
    const intervalId = setInterval(() => {
      updateDonators();
    }, 1000);
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
            <p className="mt-1 font-epilogue font-normal text-[12px] text-[#808191]">{campaignData.length} Campaigns</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-10 mb-4">
          <CountBox title='Campaigns' value={campaignData.length} />
          <CountBox title='Total Earned' value={3.75} />
          <CountBox title='Total Donated' value={2.54} />
        </div>

        <h1 className='mb-2 text-2xl font-bold text-white'>My Campaigns</h1>

        <div className='flex flex-wrap items-center justify-start gap-5 mb-5'>
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
