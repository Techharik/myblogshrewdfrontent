import React, { useEffect, useState } from 'react'
import { Buffer } from 'buffer'
import { Image, Breathing } from 'react-shimmer'
import Cardshimmer from './components/shimmer'
import profile from './img/profile.png'
import {Link} from 'react-router-dom'

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
    <div className='flex justify-center pt-10 text-center'>
    <div class="mx-auto max-w-2xl lg:mx-0">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-orange-500">Hari Prasath </h2>
      <h2 class="text-3xl font-bold tracking-tight text-slate-500 sm:text-2xl pt-2">Welcome to my Thoughts...</h2>
    </div>

    </div>
    
    
      <div>
      {
        blogs.length == 0 ? (<Cardshimmer /> ) :  
       (
        <div class="bg-white pb-24 ">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    
    <div class="mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
  

        {
           (blogs.map((blog,ind)=>{
            return(
             <div key={ind} >
               <article class="flex max-w-xl flex-col items-start justify-between">
               <div>
               <img src={`data:${blog.img.contentType};base64,${Buffer.from(blog.img.data).toString('base64')}`} alt='Img' className='h-[200px] w-[350px]  rounded-lg'/>
               </div>
        <div class="group relative">
          <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            
              <span class="absolute inset-0"></span>
          
          </h3>
          <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {blog.excerpt}
            
          </p>
          <span className='text-blue-200'>
              
              
          </span>
        </div>
        <div class="relative mt-8 flex items-center gap-x-4">
          <img src={profile} alt="" class="h-10 w-10 rounded-full bg-gray-50" />
          <div class="text-sm leading-6">
            <p class="font-semibold text-gray-900">
              <a href="#">
                <span class="absolute inset-0"></span>
                Hari Prasath
              </a>
            </p>
            <p class="text-gray-600">Software developer</p>
          </div>
        </div>
      </article>
                      
                   
            </div>

            ) 
         }))
       }
      
        

     
    </div>
  </div>
</div>

       )


}
     </div>
       
              

            
    
     
    </>
   
  )
}

export default App;