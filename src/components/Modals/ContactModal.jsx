import React, { useState } from 'react'
import { IoClose } from "react-icons/io5"

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = (formData) => {
        const errors = {};
        if (!formData.get('name').trim()) errors.name = 'Введите имя';
        if (!formData.get('phone') || formData.get('phone').length < 9) errors.phone = 'Введите правильный номер';
        if (!formData.get('course')) errors.course = 'Выберите курс';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const validationErrors = validateForm(formData);
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        
        try {
            const data = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                course: formData.get('course'),
                type: 'modal'
            };

            const params = new URLSearchParams(data);
            
            await fetch(
                'https://script.google.com/macros/s/AKfycbyIoUZ8usP_Cjd3KcJJaaK8VtMSDhwRewBsMif63yQnsLuH1rWfgpMKAjhW-3KeNYMPSw/exec?' + params.toString(),
                {
                    method: 'GET',
                    mode: 'no-cors',
                }
            );

            onClose();
        } catch (error) {
            console.error('Error:', error);
            alert('Произошла ошибка при отправке формы.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-lg w-[400px] relative">
                <button 
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                    <IoClose size={24} />
                </button>
                <h2 className="text-2xl font-bold mb-4 text-black">Оставьте свои данные</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Имя</label>
                        <input
                            type="text"
                            name="name"
                            className={`w-full border rounded-md p-2 ${errors.name ? 'border-red-500' : ''}`}
                            placeholder="Введите ваше имя"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Телефон</label>
                        <div className="relative">
                            <span className="absolute left-2 top-2 text-gray-500">+998</span>
                            <input
                                type="tel"
                                name="phone"
                                pattern="[0-9]{9}"
                                maxLength="9"
                                className={`w-full border rounded-md p-2 pl-16 ${errors.phone ? 'border-red-500' : ''}`}
                                placeholder="XX XXXXXXX"
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Выберите курс</label>
                        <select
                            name="course"
                            className={`w-full border rounded-md p-2 ${errors.course ? 'border-red-500' : ''}`}
                        >
                            <option value="">Выберите курс</option>
                            <option value="frontend">Frontend Development</option>
                            <option value="backend">Backend Development</option>
                            <option value="fullstack">Fullstack Development</option>
                            <option value="mobile">Mobile Development</option>
                        </select>
                        {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-yellow text-black rounded-md hover:opacity-90"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Отправка...' : 'Отправить'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;