
 export function navToggle(){
let burger = document.querySelector('.harmburger')
let nav = document.querySelector('.nav-link')
const data = document.querySelector('.data')
const search = document.querySelector('.submit')
const crossToggle = document.querySelector('.cross-toggle')

burger.addEventListener('click',()=>{

    nav.classList.toggle('display-nav')
    burger.classList.toggle('new-harmburger')

})

search.addEventListener('click',()=>{
  //  data.classList.add('data-show')

   


    
})


crossToggle.addEventListener('click',()=>{
    data.classList.toggle('data-show')
    
})







}








