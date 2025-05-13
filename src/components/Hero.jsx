import React, { useState } from 'react'
import robotHero from '../assets/robot-hero.png'
import ContactModal from './Modals/ContactModal'
const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
  };
  return (
    <div id='#' className='bg-black py-3 sm:py-6 px-2 sm:px-4'>
      <div className='max-w-[1200px] mx-auto 2xl:max-w-[1400px] min-h-[500px] sm:h-[420px] bg-[#111111] rounded-[30px] relative overflow-hidden'>
        {}
        <div className='absolute bottom-0 right-0 w-full sm:w-[500px] h-[250px] sm:h-[420px] bg-gradient-to-tl from-yellow/50 via-yellow/20 to-transparent rounded-tl-full z-0'></div>
        <div className='flex flex-col sm:flex-row h-full relative z-10 py-4 sm:py-0 justify-start items-center gap-4 sm:gap-0'>
          {}
          <div className='bg-white w-[92%] sm:w-[48%] h-auto sm:h-[75%] mx-auto sm:mx-0 sm:my-auto sm:ml-8 rounded-[30px] p-4 sm:p-6 flex items-center justify-start'>
            <div className='font-[Tektur] text-center sm:text-left max-w-[420px]'>
              <h1 className='leading-tight'>
                <span className='text-yellow text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-7xl font-bold block mb-3'>
                  JustRobotics
                </span>
                <span className='text-black text-xl sm:text-3xl lg:text-4xl font-bold block'>
                  твой проводник в мир технологий и искусства
                </span>
              </h1>
              <div className='mt-4 sm:mt-6'>
                <h3 className='text-base sm:text-lg mb-3 text-gray-700 px-2 sm:px-0'>
                  получите бесплатное первое занятие
                </h3>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className='bg-black text-yellow px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform w-[90%] sm:w-auto mx-auto sm:mx-0'
                >
                  ПЕРЕЙТИ К КУРСАМ
                </button>
              </div>
            </div>
          </div>
          {}
          <div className='w-full sm:w-1/2 h-[250px] sm:h-[90%] sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 flex items-center justify-center'>
            <img 
              src={robotHero} 
              alt="Robot" 
              className='h-full w-full object-contain opacity-90 sm:opacity-100 max-w-[400px] sm:max-w-[90%] sm:ml-auto'
            />
          </div>
        </div>
        {}
        <div className='absolute top-0 right-0 w-full sm:w-2/3 h-full opacity-5 sm:opacity-20'>
          <div className='absolute w-full h-full bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:14px_14px] sm:[background-size:20px_20px]'></div>
        </div>
        {}
        <ContactModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}
export default Hero