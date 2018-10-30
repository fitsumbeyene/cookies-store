'use strict'

let elBody = document.getElementById('myBody')
 let elBody1= document.getElementById('myBody1')
 let elBody2= document.getElementById("myBody2")
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am','1pm', '2pm','3pm','4pm','5pm','6pm','7pm']
let cookies = []

let maryland = {
location:'Maryland',
minNumCus:40,
maxNumCus:50,
cookiesPerCus:10,
cookiesPerHour: function() {
  let randomNumCookies = Math.ceil(Math.random() * (this.maxNumCus-this.minNumCus) + this.minNumCus)
  
  return randomNumCookies * this.cookiesPerCus
  alert(cookiesPerHour())
}
}


//display store-1 name in h2
let elmaryland = document.createElement('h3')
elBody.appendChild(elmaryland)
elmaryland.innerText = maryland.location

//display store information into html
// let elList = document.createElement('ul')
// elBody.appendChild(elList)



for (let i =0; i<hours.length; i++){
  console.log(hours[i],'Total # of Cookies/hr in the location of',maryland.location, maryland.cookiesPerHour())
  let elListItem = document.createElement('ul')
  elBody.appendChild(elListItem)
  elListItem.innerText = hours[i] + ': ' + maryland.cookiesPerHour() 
}

// this the location of cookies store in Hyattsville 


let verginia= {
  location:'verginia',
  minNumCus: 35,
  maxNumCus: 150,
  cookiesPerCus:15,
  cookiesPerHour: function() {
    let randomNumCookies = Math.ceil(Math.random() * (this.maxNumCus-this.minNumCus) + this.minNumCus)
    //console.log(this.cookiesPerHour.randomNumCookies)
    return randomNumCookies * this.cookiesPerCus
    alert(cookiesPerHour())
  }
  }
  
  
  //display store-1 name in h2
  let elverginia= document.createElement('h3')
  elBody1.appendChild(elverginia)
  elverginia.innerText = verginia.location
  
  //display store information into html
  // let elList = document.createElement('ul')
  // elBody.appendChild(elList)
  
  
  
  for (let i =0; i<hours.length; i++){
    console.log(hours[i],'Total # of Cookies/hr in the location of', verginia.location, verginia.cookiesPerHour())
    let elListItem = document.createElement('ul')
    elBody1.appendChild(elListItem)
    elListItem.innerText = hours[i] + ': ' + verginia.cookiesPerHour() 
  }

  // Store 3 in Greenbelt

  let washington= {
    location:'washington',
    minNumCus: 22,
    maxNumCus: 120,
    cookiesPerCus:12,
    cookiesPerHour: function() {
      let randomNumCookies = Math.ceil(Math.random() * (this.maxNumCus-this.minNumCus) + this.minNumCus)
      //console.log(this.cookiesPerHour.randomNumCookies)
      return randomNumCookies * this.cookiesPerCus
      alert(cookiesPerHour())
    }
    }
    
    
    //display store-1 name in h2
    let elwashington= document.createElement('h3')
    elBody2.appendChild(elwashington)
    elwashington.innerText = washington.location
    
    //display store information into html
    // let elList = document.createElement('ul')
    // elBody.appendChild(elList)
    
    
    
    for (let i =0; i<hours.length; i++){
      console.log(hours[i],'Total # of Cookies/hr in the location of', washington.location, washington.cookiesPerHour())
      let elListItem = document.createElement('ul')
      elBody2.appendChild(elListItem)
      elListItem.innerText = hours[i] + ': ' + washington.cookiesPerHour() 
    }
  