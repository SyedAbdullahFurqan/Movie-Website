import React from 'react'
import { IoClose } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md"
const Video = ({ data,videoID, close}) => {




  console.log(videoID)
    console.log(close)
  return (
    <div > 
     <section className='fixed top-0 right-0 bottom-0 left-0 bg-opacity-51 flex justify-center z-130  bg-neutral-800 '>
<div  className='bg-black w-full h-100 max-w-screen-lg aspect-video m-auto rounded-2xl relative '>
 <button onClick={close}  className='text-3xl text-amber-50 absolute top-0 right-0 cursor-pointer z-50 ' >

    <MdOutlineClose  />

   
</button> 
<iframe src={`https://www.youtube.com/embed/${data?.results[1]?.key}`} frameborder="0" className='w-full h-full'  />
</div>
  

  </section>
  
    </div>
  )
}

export default Video
