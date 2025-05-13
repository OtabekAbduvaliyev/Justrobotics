import React from 'react'
import { FaTelegram, FaYoutube, FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-yellow to-yellow/95 rounded-t-[40px] py-16 relative shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1200px] mx-auto px-6">
        {}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
          <div className="flex items-center gap-4 mb-6 sm:mb-0 group">
            <div className="w-14 h-14 bg-black rounded-2xl rotate-45 transform transition-transform group-hover:rotate-[135deg]">
              <div className="w-full h-full -rotate-45 flex items-center justify-center text-yellow text-xl font-bold">
                JR
              </div>
            </div>
            <p className="text-black/90 font-bold text-lg leading-tight">
              SLOGAN Lorem ipsum dolor sit amet,<br/>
              <span className="text-black/70 font-normal">consectetur adipiscing elit.</span>
            </p>
          </div>
          <div className="flex gap-6">
            {[FaTelegram, FaYoutube, FaInstagram].map((Icon, index) => (
              <a 
                key={index}
                href="#" 
                className="text-black/80 hover:text-black transform hover:scale-110 transition-all duration-300"
              >
                <Icon size={28} className="drop-shadow-sm" />
              </a>
            ))}
          </div>
        </div>
        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-12">
          {[
            {
              title: "Курсы",
              links: ["Роботехника", "Английский для взрослых", "Английский для детей", "Шахмат", "Живопись"]
            },
            {
              title: "Контакты",
              links: ["Телеграм", "Инстаграм", "Ютюб"]
            }
          ].map((section, index) => (
            <div key={index} className="backdrop-blur-sm">
              <h3 className="text-black font-bold text-2xl mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-black/70 hover:text-black transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-black/40 rounded-full group-hover:w-3 transition-all duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {}
        <div className="text-black/60 text-sm font-medium text-center sm:text-left border-t border-black/10 pt-6">
          Ideallux.com © 2000-2024. <span className="whitespace-nowrap">All Rights Reserved</span>
        </div>
      </div>
      {}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-t-[40px] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.015]"></div>
      </div>
    </footer>
  )
}
export default Footer