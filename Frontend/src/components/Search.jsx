import React from 'react'

function Search() {
  return (
    <div className='flex items-center w-65 gap-1.5 bg-grey-800 p-2.5 rounded-md'>
      {/* TODO */}
      {/* TODO */}
      {/* TODO */}
      <img src="src/assets/Search.svg" alt="" /> {/*Сделать так чтобы он тоже менялся*/}
      <input className='bg-transparent duration-300 ease-out focus:text-white focus:placeholder-white text-sm text-gray-400 focus:border-gray-800 focus:ring-0 outline-none' type="text" placeholder='Search here...' />
    </div>
  )
}

export default Search