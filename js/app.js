'use strict'

// find element in HTML & match using an Id 
let Body = document.getElementById('myBody')
let Table = document.getElementById('Cookies-Table')
let formm = document.getElementById('f_form')

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am','1pm', '2pm','3pm','4pm','5pm','6pm','7pm']
let cookies = []

// Declare a var & assign it the value of an array that will contain all our store hours 

let cookiesStore = function (location, min, max, cusNum){
  this.location = location
  this.max = max
  this.min = min
  this.cusNum = cusNum
}

cookiesStore.prototype.average = function(){
  let randomNumCookies = Math.ceil(Math.random() * (this.max - this.min) + this.cusNum)
  // console.log(randomNumCookies)
  return (randomNumCookies*this.cusNum)
}
// instantiating a new instance 
let maryland = new cookiesStore('maryland',5, 20, 3)
let verginia = new cookiesStore ('verginia', 35, 150, 15)
let washington = new cookiesStore ('washington', 22, 120, 12)

// Push new instance to Cookies array
cookies.push(maryland,verginia,washington)

// Creating a Table in our HTML
let elHeader = document.createElement('tr')
Table.appendChild(elHeader)
let elTh = document.createElement('th')
elHeader.appendChild(elTh)
elTh.innerText = 'Stores Name'


for (let i =0; i <hours.length; i++){
  let elTh = document.createElement('th')
  elHeader.appendChild(elTh)
  elTh.innerText = hours[i]
}

// create a new row and append it to our table 
cookiesStore.prototype.newCookiesStore = function(){
  let row = document.createElement('tr')
  Table.appendChild(row)
  row.innerText = this.location 
  let counter = 0 
  for (let j =0; j< hours.length; j++ ){
    let resultPerDay = this.average()
    let elTd = document.createElement('td')
    row.appendChild(elTd)
    elTd.innerText = resultPerDay
    counter+= resultPerDay
    // resultPerDay
  }
  let totalPerDay = document.createElement('th')
  // appending with my row 
  row.appendChild(totalPerDay)
  
  totalPerDay.innerText= counter
}
for (let i =0; i <cookies.length; i++){
  cookies[i].newCookiesStore()
//  console.log(this.newCookiesStore) 
}  
let tPday = document.createElement('th')
elHeader.appendChild(tPday)
tPday.innerText = 'Total per Day'

// Creating an Event Listner for submit event & create a new instance to our constructor function
let elNameOfStore = formm.nameOfStore
let elMinCustomers = formm.min
let elMaxCustomers = formm.max
let elCusNum = formm.cusNum
formm.addEventListener('submit', function(event){
  event.preventDefault()
  let newStore = new cookiesStore(elNameOfStore.value, parseInt(elMinCustomers.value), parseInt(elMaxCustomers.value), parseInt(elCusNum.value) )
  newStore.newCookiesStore() 
  
})

