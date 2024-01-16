
import MyFooter from "../components/MyFooter"
import Banner from "../components/banner"
import BestSellerBooks from "./BestSellerBooks"
import FAVbook from "./FAVbook"
import OtherBooks from "./OtherBooks"
import OurCustomers from "./OurCustomers"
import PromoBanner from "./PromoBanner"


const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FAVbook/>
      <PromoBanner/>
      <OtherBooks/>
      <OurCustomers/>
      
      
    </div>
  )
}

export default Home