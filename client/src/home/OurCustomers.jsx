
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
//react icons
import { FaStar } from "react-icons/fa";
import { Avatar } from 'flowbite-react';
import propic from '../assets/BannerBook/profile1.jpg'



// import required modules
import { Pagination } from 'swiper/modules';
function OurCustomers() {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h1 className='text-5xl font-bold text-center mb-12'>Our Customers</h1>
      
      
    
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
          <div>
            <div className='text-amber-500 gap-2 flex'>
               <FaStar />
               <FaStar />
               <FaStar />
            </div>
            {/* text */}
            <div className='mt-7'>
              <p className='text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem.</p>
              <Avatar img={propic}alt="avatar of Jese" rounded className='w-10 mb-4' />
              <h5 className='text-lg font-medium'>Gabriel Saka</h5>
              <p></p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
          <div>
            <div className='text-amber-500 gap-2 flex'>
               <FaStar />
               <FaStar />
               <FaStar />
            </div>
            {/* text */}
            <div className='mt-7'>
              <p className='text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem.</p>
              <Avatar img={propic}alt="avatar of Jese" rounded className='w-10 mb-4' />
              <h5 className='text-lg font-medium'>Gabriel Saka</h5>
              <p></p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
          <div>
            <div className='text-amber-500 gap-2 flex'>
               <FaStar />
               <FaStar />
               <FaStar />
            </div>
            {/* text */}
            <div className='mt-7'>
              <p className='text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem.</p>
              <Avatar img={propic}alt="avatar of Jese" rounded className='w-10 mb-4' />
              <h5 className='text-lg font-medium'>Gabriel Saka</h5>
              <p></p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
          <div>
            <div className='text-amber-500 gap-2 flex'>
               <FaStar />
               <FaStar />
               <FaStar />
            </div>
            {/* text */}
            <div className='mt-7'>
              <p className='text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem.</p>
              <Avatar img={propic}alt="avatar of Jese" rounded className='w-10 mb-4' />
              <h5 className='text-lg font-medium'>Gabriel Saka</h5>
              <p></p>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>
    
    
    
    </div>
  )
}

export default OurCustomers