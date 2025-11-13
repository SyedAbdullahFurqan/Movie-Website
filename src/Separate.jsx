import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { get } from './Axios'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination , EffectCoverflow} from 'swiper/modules';
import Trend from './Trend'
import Video from './Video'
const Separate = () => {


 const url= useSelector( state => state.counter.imga)
const [Single, setSingle] = useState(" ");
const [Recommend, setRecommend] = useState([]);
const [Cast, setCast] = useState([]);
const [Simliar, setSimliar] = useState([]);
const [Videos, setVideos] = useState(false);
const param=useParams()

const [Data, setData] = useState("");
console.log(param.ids)
const red= param.ids
console.log(param.expolre)
/*
const singleid= async()=>{
const data= await get.get(`/${param.expolre}/${param.ids}`)
console.log(data)
}
const credit= async()=>{
const cast= await get.get(`/${param.expolre}/${param.ids}/credits`)

}      <p>{Single.name}</p>
<p>{Single.
first_air_date}</p>

*/

const singleheld = async () => {
  try {
       const res = await get.get(
        `/${param.expolre}/${param.ids}`,
        {
          params: {
            api_key: "9c1352a5828c9a5331c24a2f7782b113",
          },
        })

  const credits = await get.get(
        `/${param.expolre}/${param.ids}/credits`,
        {
          params: {
            api_key: "9c1352a5828c9a5331c24a2f7782b113",
          

          },
        }
      );


        const reccomend = await get.get(
        `/${param.expolre}/${param.ids}/recommendations`,
        {
          params: {
            api_key: "9c1352a5828c9a5331c24a2f7782b113",
          },
        })
    const similar = await get.get(
        `/${param.expolre}/${param.ids}/similar`,
        {
          params: {
            api_key: "9c1352a5828c9a5331c24a2f7782b113",
          },
        })

    const videos = await get.get(
        `/${param.expolre}/${param.ids}/videos`,
        {
          params: {
            api_key: "9c1352a5828c9a5331c24a2f7782b113",
          },
        })

setData(videos.data)

      
console.log(reccomend.data.results)
setSimliar(similar.data.results)
setSingle(res.data)
setCast(credits.data.cast.slice(0,20))
setRecommend(reccomend.data.results)
    console.log("Details",res);
     console.log("credits", credits.data.cast.slice(0,20));
  } catch (error) {
    console.error("API error:", error.response?.data || error.message);
  }
};


useEffect(() => {
  singleheld()
  
}, [param.expolre, param.ids]);

console.log(Videos)
/*


<div className='grid grid-cols-2 my-6 absolute'> 


<div className='w-70 h-[400px] m-auto  '>
<img src={url+Single.
backdrop_path} className='w-full h-full ' alt="" />

<button className='p-2 bg-amber-100 w-full rounded'>Play</button>
</div>

<div className=''>

 <p className='text-[40px]'>{Single.name}</p>
<p className='mt-4'> Realse Date  : {Single.
first_air_date}</p>

<p className=''> Rating : {Single.vote_average}</p>
<p> Views  :  {Single.vote_count}</p>
<p className='w-1/2'>Description :  {Single.overview
}</p>
</div>

  </div>

*/
  return (
    <>
    <section id='HOME' >


      <div className='w-full h-[200px] relative'>
<div className='w-full h-full'>

<img src={url+Single.
backdrop_path} className='w-full h-full object-cover ' alt="" />

</div>

<div className='absolute w-full h-full   bg-gradient-to-tl from-neutral-600/ to-transparent'></div>

</div>

<div className='relative mx-15 grid grid-cols-1 sm:grid-cols-2'>

  <div className='w-60 h-[400px] m-auto my-3 '>

<img src={url+Single.
backdrop_path} className='w-60 h-80 object-cover' alt="" />

<button className='p-1 bg-amber-100 w-full rounded  cursor-pointer' onClick={() => setVideos(true)} >Play</button>

{Videos &&
<Video  data={Data} videoID={Single.id} close={ () => setVideos(false)} />
}


  </div>

<div className=' sm:mt-25'>
<div className='mt-3 space-y-2 text-sm sm:text-base'>
 <p className='text-[40px]'>{Single.name || Single.title
}</p>
<p className='mt-4'> Realse Date  : {Single.
release_date}</p>

<p className=''> Rating : {Single.vote_average}</p>
<p> Views  :  {Single.vote_count}</p>
<p className='line-clamp-5'>Description :  {Single.overview
}</p>


</div>

<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 '> 
{Cast.slice(0,7).map((crew)=>{
return(
<div className=''>
<img src={ url+crew.profile_path} className='w-full h-full rounded m-auto px-3' alt="" />
<p className=''>{crew.name}</p>
</div>
)
})}
</div>




</div>


</div>

</section>

<NavLink>

<section className='mt-5'>



<div className=' mx-5 '>

<h1 className='text-[40px]'>Recommendation</h1>

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


   
  {Recommend.map((testss)=>{
return(
    <SwiperSlide >
  <div className=''>


   <Trend cards={testss}/>

  </div>
          </SwiperSlide>
        
    )}  )}
   </Swiper> 


</div>

</section>
</NavLink>




<section>



<div className=' mx-5 '>

<h1 className='text-[40px]'>Similiar</h1>

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


   
  {Simliar.map((testss)=>{
return(
    <SwiperSlide >
  <div className=''>


   <Trend cards={testss}/>

  </div>
          </SwiperSlide>
        
    )}  )}
   </Swiper> 


</div>

</section>


    </>
  )
}

export default Separate
