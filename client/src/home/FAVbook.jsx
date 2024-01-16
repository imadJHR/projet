import bookimg from '../assets/BannerBook/bookimg.jpg'
import {Link} from 'react-router-dom'



function FAVbook() {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12 '>
       <div className='md:w-1/2'>
        <img src={bookimg} alt="" />
       </div>
       <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite <span className='text-blue-700'>Book Here!</span></h2>
        <p className='mb-10 text-lg md:w-5/6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        {/*stats */}
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
          <div>
            <h3 className='text-3xl font-bold'>+800</h3>
            <p className='text-base'>Book Listing</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>+550</h3>
            <p className='text-base'>Register users</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>+1200</h3>
            <p className='text-base'>PDF Downloads</p>
          </div>
          
          <Link to ='/shop'className=''>
        <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button>
       </Link>
          
          </div>
        </div>
    </div>
  )
  }

export default FAVbook