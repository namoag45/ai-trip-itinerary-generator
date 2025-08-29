import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
        <h1 className='font-extrabold text-[50px] text-center mt-16'><span className='text-[#f56551]'>Discover Your Next Adventure with AI: </span> Personalized Itinenaries at Your Fingertips</h1>
        <p className='text-xl text-gray-500 text-center'>Your personal trip planner and trace curator, creating custime intineraries tailored to your interests and budget</p>
        
        <Link to={'/create-trip'}>
            <Button>Get Started, It's Free</Button>        
        </Link>

        {/* <img src = '/landing.png' ></img> */}

<div className="flex justify-center mt-16">
  <img
    src="/landing.png"
    alt="View Trip Page Screenshot"
    className="w-[800px] max-w-full h-auto border-4 border-black rounded-2xl shadow-xl"
  />
</div>


    </div>
  )
}

export default Hero