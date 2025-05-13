import React from 'react'
import { IoClose } from "react-icons/io5"

const CourseModal = ({ isOpen, onClose, course }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white/90 backdrop-blur-md rounded-lg w-full max-w-2xl relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <IoClose size={24} />
        </button>
        <div className="p-8">
          <h2 className="text-2xl font-bold font-[Tektur] text-black mb-6">{course.title}</h2>
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <p className="text-gray-700 mb-6">{course.description}</p>
          <div className="space-y-3 text-gray-700">
            <p><span className="font-semibold">Возраст:</span> {course.age}</p>
            <p><span className="font-semibold">Длительность:</span> {course.duration}</p>
            <p><span className="font-semibold">Стоимость:</span> {course.price}</p>
          </div>
          <button 
            onClick={onClose}
            className="mt-8 bg-black text-yellow px-6 py-3 rounded-lg hover:scale-105 transition-transform font-bold"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseModal
