import React from 'react';
import { IoClose } from 'react-icons/io5';
import { FaCheckCircle } from 'react-icons/fa';
const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#111111] rounded-[30px] p-8 max-w-md w-full relative border border-yellow/30">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-yellow hover:text-white text-2xl"
        >
          <IoClose />
        </button>
        <div className="flex flex-col items-center text-center gap-4">
          <FaCheckCircle className="text-yellow text-6xl" />
          <h2 className="text-2xl font-bold text-yellow">Успешно отправлено!</h2>
          <p className="text-white">Мы свяжемся с вами в ближайшее время</p>
          <button
            onClick={onClose}
            className="bg-yellow text-black px-8 py-3 rounded-xl font-bold mt-4"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
export default SuccessModal;
