import React from 'react'

function SendEmail() {
  return (
    <div className='p-4 pb-24'>
      <form className='flex flex-col gap-4 max-w-xl mx-auto'>
        <h3 className='text-2xl mb-8 text-gray-600 text-center'>New Message</h3>
        <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
          <label className='w-20'>Title</label>
          <input type="text" placeholder='title' className='p-2 flex-1 rounded-md ring-1 ring-gray-200' />
        </div>

        <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
          <label className='w-20'>Body</label>
          <textarea placeholder='Type here...' cols="30" rows="6" className='flex-1 p-4 rounded-md ring-1 ring-gray-200'></textarea>
        </div>

        <div className='flex justify-between gap-8 mt-4'>
          <button className='bg-transparent text-black border border-gray-900 p-2 rounded-md flex-1'>Clear</button>
          <button className='bg-[#4169e1] hover:bg-[#234ed2] text-white p-2 rounded-md flex-1'>Submit</button>
        </div>

      </form>
    </div>
  )
}

export default SendEmail