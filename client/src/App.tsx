import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import CreateCampaign from '@/pages/CreateCampaign';
import CampaignDetails from '@/pages/CampaignDetails';
import Dashboard from '@/pages/Dashboard';
import Analysis from './pages/Analysis';
import NotFoundPage from './pages/NotFound';
import { Toaster } from "@/components/ui/toaster"

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="relative hidden mr-10 sm:flex">
        <Sidebar />
      </div>
      <Toaster />
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/payment" element={<NotFoundPage />} />
          <Route path="/withdraw" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
