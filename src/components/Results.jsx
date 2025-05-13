import React from 'react'

const Results = () => {
  const stats = [
    { number: '300+', text: 'Довольных студентов' },
    { number: '25+', text: 'Преподавателей' },
    { number: '60+', text: 'групп' }
  ];

  return (
    <div id='aboutus' className='bg-black py-3 sm:py-6 px-2 sm:px-4 space-y-6'>
      {/* First Block - Stats */}
      <div className='max-w-[1200px] mx-auto 2xl:max-w-[1400px] bg-[#111111] rounded-[30px] relative overflow-hidden'>
        <div className='absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-yellow/30 via-yellow/10 to-transparent z-0'></div>
        <div className='relative z-10 py-8 sm:py-12 px-4'>
          <div className='flex flex-col sm:flex-row justify-around items-center gap-8 sm:gap-4'>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className='bg-[#1a1a1a] rounded-[20px] p-6 sm:p-8 w-full sm:w-[300px] text-center relative overflow-hidden group hover:scale-105 transition-transform duration-300'
              >
                <div className='absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-yellow/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <h2 className='font-[Tektur] text-yellow text-4xl sm:text-5xl font-bold mb-2 relative z-10'>
                  {stat.number}
                </h2>
                <p className='text-white text-lg sm:text-xl font-medium relative z-10'>
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='absolute top-0 right-0 w-full h-full opacity-5'>
          <div className='absolute w-full h-full bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:14px_14px] sm:[background-size:20px_20px]'></div>
        </div>
      </div>

      {/* Text Content Block */}
      <div className='max-w-[1200px] mx-auto 2xl:max-w-[1400px]'>
        <div className='bg-[#111111] rounded-[30px] p-8 sm:p-12 relative overflow-hidden'>
          <div className='absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-yellow/20 via-transparent to-transparent z-0'></div>
          <div className='max-w-[900px] mx-auto space-y-6 relative z-10'>
            <div className='space-y-4'>
              <h2 className='font-[Tektur] text-yellow text-3xl sm:text-4xl font-bold text-center mb-6'>
                О нас
              </h2>
              <p className='text-gray-300 text-lg sm:text-xl'>
                <span className='font-[Tektur] text-yellow font-bold'>JustRobotics</span> — это современный учебный центр, специализирующийся на технологиях, искусстве и образовании. Мы предоставляем комфортную и поддерживающую среду для развития талантов и навыков наших учеников. Команда высококвалифицированных преподавателей использует передовые методики и технологии, делая занятия интерактивными и увлекательными. Мы уделяем большое внимание индивидуальному подходу, помогая каждому ученику раскрыть свои способности и достичь успеха.
              </p>
              <p className='text-gray-300 text-lg sm:text-xl'>
                <span className='font-[Tektur] text-yellow font-bold'>JustRobotics</span> — это сообщество увлеченных и целеустремленных людей, предлагающее не только учебные курсы, но и мероприятия, мастер-классы и конкурсы. Удобное расположение учебного центра обеспечивает легкий доступ для всех желающих.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results