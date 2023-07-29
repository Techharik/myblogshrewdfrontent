import React, { useEffect, useState } from 'react'
import { Buffer } from 'buffer'

const App = () => {
  const [blogs,setblog] =useState([])

   
  useEffect(()=>{
    fetch('http://localhost:4000/getInfo')
    .then(res =>res.json())
    .then(data =>setblog(data) )
  },[])

  // console.log(blogs)
  

  return (
    <>
     <div>My Blog List</div>
      <div>
      {
              blogs.length === 0 ? <h1>Loading</h1> :  (
                blogs.map((blog,ind)=>{

                
                
                   return(
                    <div key={ind}>
                      <h1>{blog.title}</h1>
                      <p>{blog.excerpt}</p>
                      <img
                  src={`data:${blog.img.contentType};base64,${Buffer.from(
                    blog.img.data
                  ).toString('base64')}`}
                  alt='Img'
                  width={'500px'}
                />
                    </div>

                   ) 
                })
              )
            }
      </div>
            
    
     
    </>
   
  )
}

export default App;