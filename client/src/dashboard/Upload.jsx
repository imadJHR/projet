import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';

function Upload() {
  const bookCategory = [
    "Fiction",
    "Non-fiction",
    "Biography",
    "Self-help",
    "Children",
    "Business",
    "History",
    "Science",
    "Technology",
    "Health",
    "Travel",
    "Religion",
    "Art",
    "Cookbooks",
    "Comics",
    "Journals",
  ]
  const [selectedBook,setSelectedbook]=useState(bookCategory[0])
  const handleChangeSelectedValue = (event)=>{
    console.log(event.target.value)
    setSelectedbook(event.target.value)

  }
  //handle book submission
  const handleBookSubmit = (event)=>{
      event.preventDefault()
      const form = event.target

      const book_title = form.book_title.value
      const author_name= form.author_name.value
      const image_url = form.image_url.value
      const book_description = form.book_description.value
      const book_pdf_url = form.book_pdf_url.value
      const category = form.categoryName.value

      const bookObj =[
        book_title,author_name,image_url,book_description,book_pdf_url,category
      ]
      console.log(bookObj)
      //send data to db
      fetch("http://localhost:5000/upload-book",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(bookObj)
      }).then(res=>res.json()).then(data=>{
        //console.log(data)
        alert("Book is uploaded successfully!")
      })
      
  }
  return (
    
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold mt-20'>Upload A Book</h2>


      <form action='POST' onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col gap-4">
        {/*first row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="book_title" value="Book Title" />
        </div>
        <TextInput id="book_title" 
        type="text" 
        placeholder="Book Name" 
        name='book_title'
        required />
      </div>
      {/*author name */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="author_name" value="Author name" />
        </div>
        <TextInput id="author_name" 
        type="text" 
        placeholder="Author name" 
        name='author_name'
        required />
      </div>

      </div>
      {/* 2nd row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="image_url" value="Book imag URL" />
        </div>
        <TextInput id="image_url" 
        type="text" 
        placeholder="image URL" 
        name='image_url'
        required />
      </div>
      {/*Category  */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBook} onChange={handleChangeSelectedValue}>
          {
            bookCategory.map((option)=>
              <option key={option} value={option}>{option}</option>
            )
          }
        </Select>

       
        
      </div>

      </div>

      {/* book description*/}
   <div>
   <div className="mb-2 block">
          <Label htmlFor="book_description" value="Book Description" />
        </div>
      <Textarea
        id="book_description"
        placeholder="write your book description"
        name='book_description'
        required
        className='w-full'
        rows={5}
      
      />
</div>
{/*Book PDF */}
<div>
  <div className='mb-2 block'>
    <Label 
    htmlFor="book_pdf_url" 
    value="Book PDF URL" />
  </div>
  <TextInput
    id="book_pdf_url"
    type="text"
    name='book_pdf_url'
    placeholder="Book PDF URL"
    required
  
  />
</div>
<Button type='submit'>
  Upload Book
</Button>
     
    </form>

    </div>
  )
}

export default Upload