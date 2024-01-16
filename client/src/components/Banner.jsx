import BannerCard from "../home/BannerCard"

const Banner = () => {
  return (
    <div>
      <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
       <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/*left side*/}
        <div className="md:w-1/2 space-y-8 h-full">
            <h2 className="text-5xl font-black leading-snug">Buy and Sell Your books <span className="text-blue-700">For The Best Prices</span> </h2>
            <p className="md:w-4/5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            </p>
            <div>
                <input type="search" id="search" name="search" placeholder="search a book" className="py-2 px-2 rounded-s-sm outline-none" />
                <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-250">Search</button>
            </div>
        </div>

        {/*right side*/}
        <div>
          
        </div>
        <BannerCard/>
        </div>
      </div>
      
    </div>
  )
}

export default Banner