import { useEffect, useState } from "react"
import { Card } from 'flowbite-react';


function Shop() {
const [books,setBooks]=useState([])
useEffect(()=>{
  fetch("http://localhost:5000/allbooks")
  .then(res=>res.json())
  .then(data=>{setBooks(data) },[])

})
  return (
    
    <div className="mt-28 px-4 lg:px-24 "> 
      <h2 className="text-5xl font-bold text-center">All books are Here</h2>
       <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 ">
        {
          books.map(book=>  
            <Card className="max-w-sm">
              <img src={book.image_url} alt=""  className="h-full"/>

      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {book.book_title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       {book.book_description}
      </p>
      <button className="bg-blue-700 font-semibold text-white py-2 rounded">Buy Now</button>
    </Card>
            )
        }
       

       </div>
    </div>
  )
}

export default Shop