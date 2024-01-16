import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { MdAddShoppingCart } from "react-icons/md";

const BookCards = ({headline,books}) => {
//console.log(books)
  return (
    <div className='my-16 px-4 lg:px-24'>
        <h2 className='text-5xl text-center font-bold my-5'>{headline}</h2>
        {/* cards */}
        <div className='mt-12'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full">

{
        books.map(book => 
          
          <SwiperSlide key={book._id}>
            <Link to={`/book/${book._id}`}>
              <div className='relative'>
                <img src={book.image_url} alt={book.book_title} />
                <div className='absolute top-1  bg-blue-600 hover:bg-black p-2 rounded'>
                <MdAddShoppingCart className='w-5 h-4 text-white cursor-pointer'/>
                </div>
              </div>
              <div>
                <h3>{book.book_title}</h3>
                <p>12$</p>
              </div>
              </Link>
         
            </SwiperSlide>)

            
     }
  

        
      </Swiper>
        </div>
    </div>
  )
}

export default BookCards