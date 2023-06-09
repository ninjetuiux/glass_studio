import React from 'react';
import Layout from '../components/layout-theme/Layout';
import HeroImg from '../../public/assets/ai/eaa12b3f-6116-41bc-bab1-d36ab9662b59.png';
import HomeSpinningComp from '../components/home_spinning_component/HomeSpinningComp';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-1 min-h-screen md:pt-5 sm:pt-12 w-full justify-center sm:mr-[19%] z-0">
        <div className="flex sm:pl-[20%] xl:pl-[40%] px-3 sm:px-0 ">
          <div className="flex flex-col mt-12 md:justify-center items-center">
            <div className="flex flex-col text-center flex-nowrap w-full h-[20%] bg-[#181c23] bg-opacity-25 rounded-xl p-6 m-5 justify-center shadow-xl">
              <h1 className="md:text-6xl text-xl flex-nowrap">אומנות בזכוכית</h1>
              <p className="md:text-2xl text-md flex-nowrap">מלווים אותך משלב הרעיון ועד למוצר המוגמר</p>
            </div>
            <div className="h-full rounded-xl">
              <img
                src={HeroImg}
                alt="Hero"
                className="object-fill md:object-fit md:w-full w-screen rounded-xl h-[70%]"
              />
              <div className="absolute bottom-4 left-3 sm:bottom-0 sm:left-0 sm:mb-0 sm:overflow-hidden">
                <HomeSpinningComp text="מושיקו מלכה \ " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
