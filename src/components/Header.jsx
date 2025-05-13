import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { IoMdArrowDropdown } from 'react-icons/io'
import { HiMenu, HiX } from 'react-icons/hi'
import { BsGrid } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import { IoChatbubbleOutline } from 'react-icons/io5'
import { HiOutlineUsers } from 'react-icons/hi2'
import ContactModal from './Modals/ContactModal'
const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const handleSubmit = (data) => {
        console.log('Form <submitted:></submitted:>', data);
    };
    return (
        <div className='bg-black sticky top-0 z-50'>
            <nav className='flex justify-between max-w-[1200px] mx-auto 2xl:max-w-[1400px] items-center py-[15px] font-[Tektur] text-white px-4'>
                <div className="logo max-w-[111px]">
                    <img src={logo} alt="" width={100} />
                </div>
                {}
                <div className="hidden md:flex links text-[20px] gap-[46px] items-center">
                    <a href="#" className='hover:text-yellow'>Главная</a>
                    <a href="#aboutus" className='hover:text-yellow'>О нас</a>
                    <div className="relative">
                        <button 
                            className='text-yellow border rounded-[25px] px-[20px] py-[5px] flex items-center gap-[5px]'
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            Курсы <IoMdArrowDropdown />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute top-full mt-2 bg-black border border-yellow rounded-lg py-2 w-[250px] z-10">
                                <a href="#courses" className="block px-4 py-2 hover:bg-yellow hover:text-black">Робототехника</a>
                                <a href="#courses" className="block px-4 py-2 hover:bg-yellow hover:text-black">Английский</a>
                                <a href="#courses" className="block px-4 py-2 hover:bg-yellow hover:text-black">Живопись для детей</a>
                                <a href="#courses" className="block px-4 py-2 hover:bg-yellow hover:text-black">Живопись для взрослых</a>
                            </div>
                        )}
                    </div>
                    <a href="#contact" className='hover:text-yellow'>Контакты</a>
                    <button 
                        onClick={() => window.location.href = 'tel:+998932450403'}
                        className='bg-yellow py-[12px] px-[54px] rounded-[7px] text-[20px] text-black font-[700] shadow-yellow hover:text-[22px] duration-300'
                    >
                        Позвонить
                    </button>
                </div>
                <div className='flex items-center gap-4'>
                    <div className="langs text-[20px] flex gap-[10px]">
                        <button className='text-yellow'>Ru</button>
                        <button className='bg-yellow py-[8px] px-[24px] rounded-[7px]'>Uz</button>
                    </div>
                    {}
                    <button 
                        className="md:hidden text-white text-3xl"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </nav>
            {}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black z-50">
                    <div className="flex justify-between items-center p-4 border-b border-yellow">
                        <div className="logo max-w-[111px]">
                            <img src={logo} alt="" width={100} />
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className="langs text-[20px] flex gap-[10px]">
                                <button className='text-yellow'>RU</button>
                                <button className='bg-yellow py-[8px] px-[24px] rounded-[7px]'>UZ</button>
                            </div>
                            <button 
                                className="text-yellow text-3xl"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <HiX />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 p-8">
                        <a href="" className='text-white hover:text-yellow text-[20px] flex items-center gap-3'>
                            <BsGrid className="text-yellow text-2xl" /> Главная
                        </a>
                        <a href="" className='text-white hover:text-yellow text-[20px] flex items-center gap-3'>
                            <HiOutlineUsers className="text-yellow text-2xl" /> О нас
                        </a>
                        <div className="flex flex-col gap-4">
                            <button 
                                className='text-white hover:text-yellow text-[20px] flex items-center gap-3'
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <IoChatbubbleOutline className="text-yellow text-2xl" />
                                Курсы <IoMdArrowDropdown className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isDropdownOpen && (
                                <div className="pl-8 flex flex-col gap-4">
                                    <a href="" className="text-white hover:text-yellow">Робототехника</a>
                                    <a href="" className="text-white hover:text-yellow">Английский</a>
                                    <a href="" className="text-white hover:text-yellow">Живопись для детей</a>
                                    <a href="" className="text-white hover:text-yellow">Живопись для взрослых</a>
                                </div>
                            )}
                        </div>
                        <a href="" className='text-white hover:text-yellow text-[20px] flex items-center gap-3'>
                            <FiEdit className="text-yellow text-2xl" /> Контакты
                        </a>
                    </div>
                </div>
            )}
            <ContactModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}
            />
        </div>
    )
}
export default Header