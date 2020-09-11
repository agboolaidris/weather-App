// import {weather} from '../script/module/weather'
// console.log('hello')
//   window.addEventListener('load',()=>{
//       let lat;
//       let long;
//     if(navigator.geolocation){
//        navigator.geolocation.getCurrentPosition(postion=>{
//            lat = postion.coords.latitude ;
//            long = postion.coords.longitude;
//            let city = `https://samples.openweathermap.org/data/2.5/weather?q=${}&appid=439d4b804bc8187953eb36d2a8c26a02 (samples API key)`
//            fetch(city)
//            console.log(`${lat}  and ${long} `)
//         })
//     }
//  })


 import {weather} from "./weather.js"
 weather()


  import{navToggle} from "./animanation.js"

 navToggle()


 import {currentTime} from "../time.js"

 currentTime()