import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SiPolymerproject } from 'react-icons/si';

const NotFoundPage: React.FC = () => {
  const navigate= useNavigate();
  const goBack = () => {
    navigate('/');
  };

  return (
    <section className="">
      <div className="container flex items-center h-[75vh] px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="w-[52px] h-[52px] bg-[#2c2f32] text-[#15F5BA] p-2 rounded-xl flex items-center justify-center">
           <SiPolymerproject size={30}/>
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-[#15F5BA] dark:text-white md:text-3xl">Page not found</h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">The page you are looking for doesn't exist. Here are some helpful links:</p>

          <div className="flex items-center justify-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <button
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-black transition-colors duration-200 bg-[#15F5BA] border rounded-lg gap-x-2 sm:w-auto"
              onClick={goBack}
            >
              <span>Go back</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
