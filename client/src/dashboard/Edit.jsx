import { useState } from 'react'
import {Textarea,Button, Label, TextInput } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';

const Edit = () => {
  const {id} = useParams()
  const {author_name,image_url,book_title,book_description,book_pdf_url} = useLoaderData
  const bookcategories = [
    "fiction",
    "non-fiction",
    "biography",
    "self-help",
    "children",
    "business",
    "history",
    "science",
    "technology",
    "health",
    "travel",
    "religion",
    "art",
    "cookbooks",
    "comics",
    "journals",
    "poetry",
    "encyclopedias",
    "dictionaries",
    "magazines",

  ]
const [selectedbook,setSelectedbook]=useState(bookcategories[0])

  const handleChangeSelectedValue = (event)=>{
    console.log(event.target.value)
    setSelectedbook(event.target.value)
  }
  //handle book submit
  const handleUpdate = (event)=>{
    event.preventDefault()
    const form = event.target;

    const book_title = form.book_title.value;
    const author_name = form.author_name.value
    const image_url = form.image_url.value
    const book_description = form.book_description.value
    const book_pdf_url = form.book_pdf_url.value
    const category = form.category.value

    const UpdateBookObj = 
    {
      book_title,author_name,image_url,book_description,book_pdf_url,category
    }
    //console.log(bookObj)
     //update the book 
     fetch(`http://localhost:5000/book/${id}`,{
      method : 'PATCH',
      headers : {
        "Content-Type":"application/json"
      },
      body : JSON.stringify(UpdateBookObj)
     })
     .then(res => res.json()).then(data=>{
      console.log(data)
     alert("Book is Update SuccessFully!!")
     
    
    })




    }
   
 

 
 
  


  return (
    <div className="px-4 my-12 mt-28 ">
      <h2 className='mb-8 font-bold text-3xl '>Update the Book data</h2>


      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/*1st row*/}
     <div className='flex gap-8'>
     <div className='flex gap-8'>
     <div className='lg:w-1/2 w-full'>
        <div className="mb-2 block">
          <Label htmlFor="book_title" value="book_title" />
        </div>
        <TextInput id="book_title" type="text" placeholder="book title" defaultValue={book_title} required />
        
      </div>
      {/*author name */}
      <div className='lg:w-1/2 w-full'>
        <div className="mb-2 block">
          <Label htmlFor="author_name" value="author_name" />
        </div>
        <TextInput id="author_name" type="text" placeholder="author name" defaultValue={author_name} required />
      </div>
      
    
      
      </div>
        {/* 2nd row*/}
        </div>
     <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="image_url" value="image_url" />
        </div>
        <TextInput id="image_url" type="text" placeholder="Book image URL"defaultValue={image_url} required />
        
      </div>
      {/*category */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="inputState" value="image_url" />
          
        </div>
        <select id='inputState' name='categoryName' className='w-1/2 text-center w-full rounded' value={selectedbook} onChange={handleChangeSelectedValue}>
         {
          bookcategories.map((option)=> <option key={option} value={option}>{option}</option>)
         }
          
          </select>
    </div>
    {/*description */}
    <div>
     <div>
           <div className="md:w-full lg:w-1/2 ">
        <Label htmlFor="book_description" value="book_description" />
      </div>
      <Textarea id="book_description" placeholder="Write Your Book Description" defaultValue={book_description} required rows={4} />
    </div>
    {/*book pdf */}
    <div className='lg:w-1/2 '>
        <div className="mb-2 block ">
          <Label htmlFor="book_pdf_url" value="book_pdf_url" />
        </div>
        <TextInput id="book_pdf_url" type="text" placeholder="Book PDF" defaultValue={book_pdf_url} required />
        <Button type="submit" className='w-full mt-10' >Update Book</Button>
      </div>
      
    </div>
</form> 
</div>


   
  )
}

export default Edit