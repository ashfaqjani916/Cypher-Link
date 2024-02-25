import MyChart from '@/components/charts/LineChart'
import BarChart from '@/components/charts/BarChart'
import PieChart from '@/components/charts/PieChart'
// import RadarChart from '@/components/charts/RadarChart'
import MultiChart from '@/components/charts/MultiLineChart'

function Analysis() {
  return (
    <div className='flex flex-col items-center justify-center gap-10'>
        <div className='flex flex-wrap items-center justify-center gap-10'>
      <div className='flex flex-col items-center justify-center gap-3 p-5 text-white border border-white rounded-xl'>
        <h1 className='text-2xl text-center text-[#4acd8d]'>Last 7 Days Funding</h1>
           <MyChart/>
        <p></p>
      </div>
      <div className='flex flex-col items-center justify-center gap-3 p-5 text-white border border-white rounded-xl'>
        <h1 className='text-2xl text-center text-[#4acd8d]'> Monthly Statistics</h1>
           <BarChart/>
        <p></p>
      </div>
      <div className='flex flex-col items-center justify-center gap-3 p-5 text-white border border-white rounded-xl'>
        <h1 className='text-2xl text-center text-[#4acd8d]'> Crypto Statistics</h1>
           <PieChart/>
        <p></p>
      </div>
      <div className='flex-col items-center justify-center p-5 border border-white te xt-white hiddengap-3 lg:flex rounded-xl'>
        <h1 className='text-2xl text-center text-[#4acd8d]'>Last 7 Days Funding</h1>
           <MultiChart/>
        <p></p>
      </div>
    </div>
    <div className='flex items-center justify-around'>
   
   
    </div>
    </div>
  
  )
}

export default Analysis
