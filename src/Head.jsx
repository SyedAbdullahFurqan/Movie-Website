import React, { useContext, useEffect } from 'react'
import './Movies.css'
import svg from './assets/react.svg'
import {Cont} from "./Context/Slice"

import {useDispatch,useSelector}from 'react-redux'




import fortn4 from './forn4.jpg'
import fort1 from './fort1.jpg'
import front2 from "./frortn2.jpg"
import netflix from './netflix.png'
import front3 from "./fortn3.jpg"
import marvel from './marrvels.png'
import disnet from './disneyy1.png'
import front4 from "./fornt32.jpg"
import disne from "./disney.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination , EffectCoverflow, Autoplay} from 'swiper/modules';
import { get} from './Axios'
import { mega, Todolist,pops,player, Ups } from './redux/Counter/Slect'
import Trend from './Trend'
import { NavLink } from 'react-router-dom'


const Head = () => {

 const taks= useSelector(state => state.counter.task)
console.log(taks)
 const popular= useSelector(state => state.counter.popstar)
 const wrong= useSelector(state => state.counter.nows)
 const upcome= useSelector(state => state.counter.upcoming)
console.log(popular)



  const url= useSelector(state => state.counter.imga)
console.log(url)

const dis=useDispatch()
 const { movies } = useContext(Cont)


const res= async()=>{

 const data =await get.get(`/trending/all/week?api_key=9c1352a5828c9a5331c24a2f7782b113`)

dis(Todolist(data.data.results))
console.log(data.data.results)

}
  
const confige= async()=>{

 const ing =await get.get(`/configuration?api_key=9c1352a5828c9a5331c24a2f7782b113`)

dis(mega(ing.data.images.secure_base_url+'original'))
console.log(ing.data.images.
secure_base_url+"original"
)

}
  const pop= async()=>{

 const populars =await get.get(`/movie/popular?api_key=9c1352a5828c9a5331c24a2f7782b113`)
dis(pops(populars.data.results))
console.log(populars.data.results)

}
    const play= async()=>{

 const now =await get.get(`/tv/top_rated?api_key=9c1352a5828c9a5331c24a2f7782b113`)
dis(player(now.data.results))
console.log(now)

}


   const upcoming= async()=>{

 const upcoming =await get.get(`/movie/upcoming?api_key=9c1352a5828c9a5331c24a2f7782b113`)

console.log(upcoming.data.results)
dis(Ups(upcoming.data.results))

}

  ///movie/upcoming
useEffect(() => {
  res()
  confige()
pop()

play()
upcoming()
}, []);
  return (
   
    <>
     <section className=''>

<div className=  'min-w-full '>



      <Swiper 
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
          autoplay={{
    delay: 3000,        // 3 seconds per slide
    disableOnInteraction: false, // keeps autoplay even after manual scroll
  }}
        className="mySwiper -mt-5 "
      >
        
        <div className='w-full '>
  {taks.map((test)=>

    <SwiperSlide >
  <NavLink to={`/${test.media_type}/${test.id}`}>
  <div className='relative cursor-pointer'>
<img src={ url+test.
backdrop_path
} alt="" className="w-full min-h-screen"/>

    <div  className=' slider absolute bottom-0 left-10 w-100 my-13  ml-6'> 
<h1 className='text-3xl'>{test.title }{test.name} </h1>
<p  className='para  py-4'> Descriptions : {test.overview}  </p>
<span className='px-5 my-5'> Rating:{test.vote_average}</span>
  
<span>Voting:{test.vote_count}</span> <br />
<button className='bg-amber-600  text-amber-50 py-2 px-10 mt-3 mx-5 rounded-2xl '>PLAY</button>

    </div>
       
       
       </div></NavLink>
          </SwiperSlide>
      )}
   </div>


   </Swiper> 


</div>
  

     </section>




{/*
<section>

<div className=' flex  flex-col md:flex-row    '> 


<img src={disne} alt="" />
  <img src={marvel} alt="" />
<img src={disnet} alt="" />
<img src={netflix} alt="" className='w-100' />


</div>


</section>
*/}



<section className='mt-6'> 


  <h1 className='text-[30px]'> Trending Show</h1>




<div className=' mx-5 '>



      <Swiper 

  slidesPerView={3}
  breakpoints={{
        768: {
          slidesPerView: 4, // tablets and medium screens
        },
        1024: {
          slidesPerView: 5, // large desktops
        },
      }}
        centeredSlides={false}
        spaceBetween={20}
        grabCursor={true}
         navigation={true}
        pagination={{
          clickable: true,
        }}

        modules={[ Navigation, Pagination]}
        className="mySwiper w-full "
      >


   
  {taks.map((testss)=>{
return(
    <SwiperSlide >
  <div className=''>


   <Trend cards={testss}/>

  </div>
          </SwiperSlide>
        
    )}  )}
   </Swiper> 


</div>




  <div className='my-7 mx-4'>

<h1 className='text-4xl'>Popular</h1>



<div className=''>

      <Swiper 

  slidesPerView={3}
  breakpoints={{
        768: {
          slidesPerView: 4, // tablets and medium screens
        },
        1024: {
          slidesPerView: 5, // large desktops
        },
      }}
        centeredSlides={false}
        spaceBetween={20}
        grabCursor={true}
         navigation={true}
        pagination={{
          clickable: true,
        }}

        modules={[ Navigation, Pagination]}
        className="mySwiper w-full "
      >



{popular.map((rec)=>
(
  <SwiperSlide >
 <Trend cards={rec}/>

      </SwiperSlide>
))}


 </Swiper> 


</div>

</div>


   <div className='my-7 mx-4'>

<h1 className='text-4xl'>Top Rated</h1>



<div className=''>

      <Swiper 

  slidesPerView={3}
  breakpoints={{
        768: {
          slidesPerView: 4, // tablets and medium screens
        },
        1024: {
          slidesPerView: 5, // large desktops
        },
      }}
        centeredSlides={false}
        spaceBetween={20}
        grabCursor={true}
         navigation={true}
        pagination={{
          clickable: true,
        }}

        modules={[ Navigation, Pagination]}
        className="mySwiper w-full "
      >



{wrong.map((wrongs)=>
(
  <SwiperSlide >
 <Trend cards={wrongs}/>

      </SwiperSlide>
))}


 </Swiper> 


</div>

</div> 



   <div className='my-7 mx-4'>

<h1 className='text-4xl'>Upcoming</h1>



<div className=''>

      <Swiper 

  slidesPerView={3}
  breakpoints={{
        768: {
          slidesPerView: 4, // tablets and medium screens
        },
        1024: {
          slidesPerView: 5, // large desktops
        },
      }}
        centeredSlides={false}
        spaceBetween={20}
        grabCursor={true}
         navigation={true}
        pagination={{
          clickable: true,
        }}

        modules={[ Navigation, Pagination]}
        className="mySwiper w-full "
      >



{upcome.map((wrongs)=>
(
  <SwiperSlide >
 <Trend cards={wrongs}/>

      </SwiperSlide>
))}


 </Swiper> 


</div>

</div> 




       </section>
        
 









  












          {/* 
       




<div className=' mx-5 '>



      <Swiper 

  slidesPerView={3}
  breakpoints={{
        768: {
          slidesPerView: 4, // tablets and medium screens
        },
        1024: {
          slidesPerView: 5, // large desktops
        },
      }}
        centeredSlides={false}
        spaceBetween={20}
        grabCursor={true}
         navigation={true}
        pagination={{
          clickable: true,
        }}

        modules={[ Navigation, Pagination]}
        className="mySwiper w-full "
      >


   
  {taks.map((testss)=>{
return(
    <SwiperSlide >
  <div className=''>

<img src={ url+testss.
backdrop_path
} alt="" className="h-40 w-full object-cover rounded"/>
   <Trend cards={testss}/>

  </div>
          </SwiperSlide>
        
    )}  )}
   </Swiper> 


</div>

corrrect card swiper abbove



<section>

<div className='mt-6'>
  <h1 className='text-[30px]'> Trending Show</h1>
</div>

<div className='mx-5 '>



      <Swiper 

  slidesPerView={5}
        centeredSlides={false}
        spaceBetween={20}
        grabCursor={true}
         navigation={true}
        pagination={{
          clickable: true,
        }}

        
      
        
      
   
        modules={[ Navigation, Pagination]}
        className="mySwiper "
      >


        <div className='relative'>
   
  {taks.map((testss)=>{
return(
    <SwiperSlide >
  <div className=''>

<img src={ url+testss.
backdrop_path
} alt="" className=""/>
   <Trend cards={testss}/>

  </div>
          </SwiperSlide>
        
    )}  )}
     </div>    </Swiper> 


</div>
  
        </section>
        
 












corect swiper slider above


          <SwiperSlide >
          <div className='relative'>
          <img src={front4}  className='w-full min-h-fit  opacity-45' />
       <div  className='absolute bottom-0 left-10 '> 
<h1> Name :Fornite</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, eaque! Fugit velit tempora culpa vero molestiae doloribus fuga hic, magnam quas.</p>
       </div>
       
       
       </div>
  
        </SwiperSlide>

       
       
       
       <SwiperSlide>
            <div className='relative'>
          <img src={front2}  className='w-full min-h-fit '/>
       
        <div  className='absolute bottom-0 left-10'> 
<h1> Name :Fornite</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, eaque! Fugit velit tempora culpa vero molestiae doloribus fuga hic, magnam quas.</p>
       </div>
        </div>
        </SwiperSlide>
       
       
        <SwiperSlide>
              <div className='relative'>
          <img src={front3}  className='w-full min-h-fit ' />
           <div  className='absolute bottom-0 left-10'> 
<h1> Name :Fornite</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, eaque! Fugit velit tempora culpa vero molestiae doloribus fuga hic, magnam quas.</p>
       </div>
</div>

        </SwiperSlide>
     
   
   

      
     
<div className='Grid'>

<div className='move'>

<h1>ALLfiles in One Secure Loction</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae beatae veritatis ut magnam soluta quidem repudiandae. Harum nam omnis suscipit!</p>

<button>Get Started</button>
</div>

<div className='img1'>
<img src={svg} alt="" />

    </div>

</div>
*/}
    </>
  )
}

export default Head
