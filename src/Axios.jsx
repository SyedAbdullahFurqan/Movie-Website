import axios from 'axios'



export const get=axios.create({
    baseURL:'https://api.themoviedb.org/3',

})


export const show = async(page=1)=>{

const rec= await get.get(`/trending/tv/week?api_key=9c1352a5828c9a5331c24a2f7782b113&page=${page}`)
console.log(rec)
      return   rec.status ==200 ? rec.data :[]

}

export const move = async(params= 1 )=>{

const recive= await get.get(`/trending/movie/week?api_key=9c1352a5828c9a5331c24a2f7782b113&page=${params}`)
console.log(recive)
      return   recive.status ==200 ? recive.data :[]

}