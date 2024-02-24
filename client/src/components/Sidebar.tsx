// import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { SiPolymerproject } from 'react-icons/si';
import { navlinks } from '@/constants';
import { useState } from 'react';



const Sidebar = () => {
  const navigate=useNavigate();
  const [isactive,setIsactive]=useState('home');
  
  return (
    <div className="flex flex-col justify-between items-center sticky top-2 h-[90vh]">
      <Link to="/">
        <SiPolymerproject onClick={()=>{
          navigate('/')
          setIsactive('home')}} className="w-[52px] h-[52px] bg-[#2c2f32] text-[#15F5BA] p-2 rounded-xl" />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[60px] py-4 mt-12">
        <div className="flex flex-col items-center justify-center gap-8">
          {navlinks.map((link) => (
            <div id={link.name} key={link.name}>
              <Link
              to={link.link}
              onClick={() => setIsactive(link.name)}
              className={` text-2xl hover:text-[#15F5BA] text-white ${isactive === link.name ? 'text-[#15F5BA] rounded-lg bg-[#2c2f32]' : ''}`}
            >
              {link.icon}
            </Link>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Sidebar;
