import {Link} from 'react-router-dom'
import promoimg from '../assets/BannerBook/promoimg.png'

function PromoBanner() {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>2024 National Edition SaveAround®Coupon Book
</h2>
<Link className='flex flex-col md:flex-row justify-center items-center gap-12'>
                <button className='bg-teal-500 text-white px-6 py-3 rounded-lg'>Get Promo</button>
</Link>

            </div>

        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-12'>
            <img  src={promoimg} />
        </div>

    </div>
  )
}

export default PromoBanner