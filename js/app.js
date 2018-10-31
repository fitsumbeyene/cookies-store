'use strict'
 
    let elBody = document.getElementById('myBody')
    let Table= document.getElementById('Cookies-Table')
    let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am','1pm', '2pm','3pm','4pm','5pm','6pm','7pm',]
    let cookies = [] 

    let cookiesStore = function (location, min, max, cusNum){
    this.location = location
    this.max = max
    this.min = min
    this.cusNum = cusNum
    }

  cookiesStore.prototype.average = function(){
      let randomNumCookies = Math.ceil(Math.random() * (this.max - this.min) + this.min)
      
      return (randomNumCookies*this.cusNum)
  }
  let Silverspring = new cookiesStore('Silverspring',5, 20, 3)
  let Hyattsville = new cookiesStore ('Hyattsville', 35, 150, 15)
  let Greenbelt = new cookiesStore ('Greenbelt', 22, 120, 12)

  cookies.push(Silverspring, Hyattsville, Greenbelt)

let elHeader = document.createElement('tr')
  Table.appendChild(elHeader)
  let elTh = document.createElement('th')
  elHeader.appendChild(elTh)
  elTh.innerText = 'Stores'


for (let i =0; i <hours.length; i++){
    let elTh = document.createElement('th')
    elHeader.appendChild(elTh)
    elTh.innerText = hours[i]
  }

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
    }
    let totalPerDay = document.createElement('td')
    
    row.appendChild(totalPerDay)
    totalPerDay.innerText= counter
  }
    for (let i =0; i <cookies.length; i++){
      cookies[i].newCookiesStore()
     
      }
  let tPday = document.createElement('th')
    elHeader.appendChild(tPday)
    tPday.innerText = 'Total per Day'
let total_header=document.createElement('tr')
  Table.appendChild(total_header)
  let total = document.createElement('th')
  total_header.appendChild(total)
  total.innerText = 'Total'
  

 

  
