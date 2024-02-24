import { IoHome } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { SiGoogleanalytics } from "react-icons/si";
import { IoMdLogOut } from "react-icons/io";
import { MdCampaign } from "react-icons/md";

export const navlinks = [
  {
    name: 'home',
    icon: <IoHome/>,
    link: '/',
  },
  {
    name: 'dashboard',
    icon:<MdDashboard/>,
    link:'/dashboard'
  },
  {
    name: 'campaign',
    icon: <MdCampaign/>,
    link: '/create-campaign',
  },
  {
    name: 'payment',
    icon: <MdOutlinePayment/>,
    link: '/',
    disabled: true,
  },
  {
    name:'analysis',
    icon: <SiGoogleanalytics/>,
    link:'/analysis'
  },
  {
    name: 'withdraw',
    icon: <BiMoneyWithdraw/>,
    link: '/',
    disabled: true,
  },
  {
    name: 'profile',
    imgUrl: <CgProfile/>,
    link: '/profile',
  },
  {
    name: 'logout',
    icon: <IoMdLogOut/>,
    link: '/',
    disabled: true,
  },
];
