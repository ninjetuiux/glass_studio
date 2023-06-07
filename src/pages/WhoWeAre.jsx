import React from 'react'
import Layout from '../components/layout-theme/Layout';
import HomeSpinningComp from '../components/home_spinning_component/HomeSpinningComp';

export default function WhoWeAre() {
  return (
    <Layout>
      <div className="flex flex-grow flex-1 h-screen md:pt-5 sm:pt-12 sm:w-full w-[95%] justify-center pr-6 sm:px-5 z-0">
        <div className="flex flex-col mt-12 md:justify-center items-center ">
          <div className="flex flex-col text-center flex-nowrap w-full h-[20%] bg-[#181c23] bg-opacity-25 rounded-xl p-6 m-5 justify-center shadow-xl">
            <h1 className="md:text-6xl text-xl flex-nowrap">אומנות בזכוכית</h1>
            <p className="md:text-2xl text-md flex-nowrap">מלווים אותך משלב הרעיון ועד למוצר המוגמר</p>
            {/* <p className="md:text-md text-right mt-[1.4rem] text-md flex-nowrap">צור קשר: 0502802330</p> */}
          </div>
          <div className="mt-5 ">
            <img src='/' alt="Hero" className="object-cover md:w-full w-screen 2xl:h-[100%] h-[70%] rounded-xl shadow-xl" />
          </div>
          <div className='w-full flex justify-end h-auto absolute 2xl:bottom-4 bottom-0 left-3 overflow-hidden z-0'>
            <HomeSpinningComp text="מושיקו מלכה \ " />
          </div>
        </div>
      </div>
    </Layout>
  );
}
