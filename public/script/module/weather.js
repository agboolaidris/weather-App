

          function searchLocation(){
              
     
           let btn = document.querySelector('.submit')
     

            window.addEventListener('load',()=>{

                 btn.addEventListener('click',()=>{
                    
                    let data = document.querySelector('.data')
                    let inputText = document.getElementById('text').value;
                   
                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${'abuja'}&appid=e96146d3a186a7f0d764b4cd78d4e335 `)
                    .then( data=>data.json())
                    .then( result=>{ 
                    console.log(result)
                   

                    const Temperature = document.querySelector("#d-temp")
                    const Pressure = document.querySelector("#d-pressure")
                    const Humidity= document.querySelector("#d-humidity")
                    const Cloud = document.querySelector("#d-cloud")
                    const Description = document.querySelector("#d-description")
                    const Country= document.querySelector("#d-country")
                    const wetherIcon = document.querySelector('#wether-icon') 

                   
                    const temp = result.main.temp;
                    const pressure = result.main.pressure;
                    const country = result.sys.country;
                    const description =   result.weather[0].description;
                    const icon =  result.weather[0].icon;
                    const display = ` http://openweathermap.org/img/wn/${icon}@2x.png `
            
                

                     Temperature.innerHTML=temp;
                     console.log(temp)
                     Pressure.innerHTML=pressure;
                     Country.innerHTML=country;
                     Description.innerHTML=description;
                     wetherIcon.setAttribute('src',display)

                     
                     
                              

                     if(true){
                               console.log(result)
                               data.classList.add('data-show')
                             } else{
                                         alert('wrong dat')
                                         data.classList.remove('data-show')
                              
                                        }
                            


        })
   


                })


              
     })

                
               
              }






                    /*-------- recent location weather code ------------*/
                    function currentLocation(){
                        let city =document.getElementById('city');
                        let temp = document.getElementById('temp');
                         let descrip = document.getElementById('description');
                         let ico =document.getElementById('icon')
                         let clouds = document.getElementById('cloud');
                         let pressures = document.getElementById('pressure');
                         let humiditys = document.getElementById('humidity');
                         const imgCurrent = document.querySelector('#img-currentlocation')
                         if(navigator.geolocation){
                             navigator.geolocation.getCurrentPosition(position=>{
                                 let lat = position.coords.latitude;
                                 let long = position.coords.longitude;
                                 let time = position.coords.time;
                                 let request =` https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=e96146d3a186a7f0d764b4cd78d4e335`
                                  fetch(request)
                                  .then(respones=>respones.json())
                                  .then(data=>{
                                      
                                             
                                                let timezone =  data.timezone;
                                                let humidity =data.current.humidity;
                                                let temperature =data.current.temp;
                                                let description = data.current.weather[0].description;
                                                const cloud = data.current.clouds;
                                                const pressure = data.current.pressure
                                                const icon = data.current.weather[0].icon;
                                                const iconHttp = ` http://openweathermap.org/img/wn/${icon}@2x.png `
    
                                                imgCurrent.setAttribute('src',iconHttp)

                                               
    
                                               city.innerHTML =timezone;
                                               temp.innerHTML =temperature;
                                               descrip.innerHTML =description;
                                               clouds.innerHTML =cloud;
                                               pressures.innerHTML = pressure;
                                               humiditys.innerHTML = humidity;
                               })}
                        
                          )}
                         
    
                          else{
                              alert('turn on your location')
                          }
    
    
                    }
                
    
              export function weather(){

               
                    searchLocation()
                    currentLocation()
                }

                weather()