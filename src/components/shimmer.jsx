import React from 'react'
import './App.css'
import { Image } from 'react-shimmer';

const Cardshimmer = () => {
    return (
        <div className=" bg-white pb-24">
  <div className=" mx-auto max-w-7xl px-6 lg:px-8">
    <div className=" mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article className=" flex max-w-xl flex-col items-start justify-between">
        <div className="shimmer">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAEmQJfzgAAAABJRU5ErkJggg=="
            alt="Img"
            className="h-[200px] w-[350px] rounded-lg shimmer"
          />
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg shimmer font-semibold leading-6 text-gray-900 group-hover:text-gray-600"></h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"></p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAEmQJfzgAAAABJRU5ErkJggg=="
            alt=""
            className="h-10 w-10 rounded-full bg-gray-50 shimmer"
          />
          <div className="text-sm shimmer h-[12px]">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0 shimmer w-32 "></span>
              </a>
            </p>
           
          </div>
        </div>
      </article>

      {/* Repeat the same structure for other articles */}
      <article className=" flex max-w-xl flex-col items-start justify-between">
        <div className="shimmer">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAEmQJfzgAAAABJRU5ErkJggg=="
            alt="Img"
            className="h-[200px] w-[350px] rounded-lg shimmer"
          />
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg shimmer font-semibold leading-6 text-gray-900 group-hover:text-gray-600"></h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"></p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAEmQJfzgAAAABJRU5ErkJggg=="
            alt=""
            className="h-10 w-10 rounded-full bg-gray-50 shimmer"
          />
          <div className="text-sm shimmer h-[12px]">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0 shimmer w-32 "></span>
              </a>
            </p>
           
          </div>
        </div>
      </article>

      <article className=" flex max-w-xl flex-col items-start justify-between">
        <div className="shimmer">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAEmQJfzgAAAABJRU5ErkJggg=="
            alt="Img"
            className="h-[200px] w-[350px] rounded-lg shimmer"
          />
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg shimmer font-semibold leading-6 text-gray-900 group-hover:text-gray-600"></h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"></p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAEmQJfzgAAAABJRU5ErkJggg=="
            alt=""
            className="h-10 w-10 rounded-full bg-gray-50 shimmer"
          />
          <div className="text-sm shimmer h-[12px]">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0 shimmer w-32 "></span>
              </a>
            </p>
           
          </div>
        </div>
      </article>
    </div>
  </div>
</div>

      
    
    )
  };

export default Cardshimmer;