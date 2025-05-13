import React, { useState } from 'react'
import CourseModal from './Modals/CourseModal'
const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const courses = [
    {
      title: "Робототехника",
      image: "https://plus.unsplash.com/premium_photo-1677094310899-02303289cadf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Программа обучения робототехнике для детей. Изучение основ программирования и конструирования роботов.",
      age: "8-14 лет",
      duration: "6 месяцев",
      price: "30000 ₸ / месяц"
    },
    {
      title: "Живопись для детей",
      image: "https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3",
      description: "Курс живописи для детей, развивающий творческие способности и навыки рисования.",
      age: "6-12 лет",
      duration: "3 месяца",
      price: "20000 ₸ / месяц"
    },
    {
      title: "Живопись для взрослых",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3",
      description: "Курс живописи для взрослых, позволяющий освоить техники рисования и развить художественные навыки.",
      age: "18+",
      duration: "4 месяца",
      price: "25000 ₸ / месяц"
    },
    {
      title: "Английский язык для детей",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3",
      description: "Курс английского языка для детей, направленный на развитие разговорных навыков и грамматики.",
      age: "7-15 лет",
      duration: "5 месяцев",
      price: "15000 ₸ / месяц"
    }
  ];
  const handleOpenModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };
  return (
    <div id='courses' className="bg-black py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-yellow text-4xl font-bold mb-12 text-center font-[Tektur]">
          АВТОРСКИЕ КУРСЫ ОТ JUSTROBOTICS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-[#111111] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-yellow text-2xl font-bold mb-6 font-[Tektur]">{course.title}</h3>
                <button 
                  onClick={() => handleOpenModal(course)}
                  className="bg-black text-yellow px-6 py-3 rounded-lg hover:scale-105 transition-transform text-lg font-bold border border-yellow"
                >
                  Подробнее о курсе →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CourseModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        course={selectedCourse}
      />
    </div>
  )
}
export default Courses