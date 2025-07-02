const form = document.querySelector('form')
const searchField = document.querySelector('.searchField')

let target = 'Mumbai'


form.addEventListener('submit' , search)


function search(e){
    e.preventDefault()
    target = searchField.value
    console.log(target)
    fetchData(target)
    
}


async function fetchData(target){
     const endPoint = `http://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${target}&aqi=no`
     const response = await fetch(endPoint)
     const data = await response.json()

     console.log(response)
     console.log(data)
}