import React from 'react'

const PostBanner: React.FC = () => {
  return (
    <div>
        <div className='pt-20 lg:pt-10 flex items-center justify-center p-4 w-[100vw] '>
            <span className="text-[0.9em] md:text-[1.2em] lg:text-[1.3em] text-center italic font-bitter text-[#ffffff] glow animate-small-fade-in-down">
            One day you'll leave this world behind so live a life you will remember.
            <br/>
            <br/>
            These are the nights that never die. -Avicii
            </span>
          </div>
    </div>
  )
}

export default PostBanner;