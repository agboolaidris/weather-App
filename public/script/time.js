export function currentTime(){
    let Day = document.querySelector('#day')
    let Month = document.querySelector('#month')
    let Year = document.querySelector('#year')


    const time =new Date()
    console.log(time)
    let day = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    

    Day.innerHTML = day;
    Month.innerHTML = month;
    Year.innerHTML = year;

}