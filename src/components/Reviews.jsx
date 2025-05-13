import React, { useState } from 'react'
import { IoPlay, IoClose } from "react-icons/io5"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const Reviews = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const reviews = [
    {
      id: 1,
      thumbnail: "https://img.youtube.com/vi/M7lc1UVf-VE/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
      title: "Отзыв о курсе робототехники"
    },
    {
      id: 2,
      thumbnail: "https://img.youtube.com/vi/eIho2S0ZahI/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/eIho2S0ZahI",
      title: "Проект ученика курса"
    },
    {
      id: 3,
      thumbnail: "https://img.youtube.com/vi/W6NZfCO5SIk/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
      title: "Выпускной проект"
    },
    {
      id: 4,
      thumbnail: "https://img.youtube.com/vi/PkZNo7MFNFg/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/PkZNo7MFNFg",
      title: "Мастер-класс"
    },
    {
      id: 5,
      thumbnail: "https://img.youtube.com/vi/1PnVor36_40/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/1PnVor36_40",
      title: "Защита проекта"
    },
  ];
  return (
    <div className='bg-black py-3 sm:py-6 px-2 sm:px-4'>
      <div className='max-w-[1200px] mx-auto 2xl:max-w-[1400px] bg-[#111111] rounded-[30px] relative overflow-hidden'>
        <div className='absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-yellow/30 via-yellow/10 to-transparent z-0'></div>
        <div className='relative z-10 py-8 sm:py-12 px-4'>
          <h2 className='font-[Tektur] text-yellow text-3xl sm:text-4xl font-bold text-center mb-12'>
            Отзывы наших учеников
          </h2>
          <div className='px-4'>
            <Slider {...settings} className="video-carousel">
              {reviews.map((review) => (
                <div key={review.id} className='px-2'>
                  <div 
                    className='h-[200px] relative rounded-xl overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300'
                    onClick={() => setSelectedVideo(review)}
                  >
                    <img 
                      src={review.thumbnail} 
                      alt={review.title}
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                      <IoPlay className='text-yellow w-12 h-12 mb-2' />
                      <h3 className='text-white text-sm font-semibold px-2 text-center'>{review.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className='absolute top-0 right-0 w-full h-full opacity-5'>
          <div className='absolute w-full h-full bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:14px_14px] sm:[background-size:20px_20px]'></div>
        </div>
      </div>
      {}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-yellow"
            >
              <IoClose size={32} />
            </button>
            <iframe
              src={selectedVideo.videoUrl}
              title={selectedVideo.title}
              className="w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}
export default Reviews