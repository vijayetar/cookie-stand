
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// find the positon where the new element should be added
var position = document.getElementById('cookiesList');

// // create a sales list for seattleshop
// var seattleShop = {
//   storeName: 'Seattle',
//   minCustEachHour: 23,
//   maxCustEacHour: 65,
//   avgCookiesPerCustomer: 6.3,
//   customersEachHour: [],
//   cookiesEachHour: [],
//   totalCookiesForTheDay: 0,
//   render: function () {
//     // identify where you want to add the list and name the list
//     var position = document.getElementById('cookiesList');
//     var h2El = document.createElement('h2');
//     h2El.textContent = this.storeName;
//     position.appendChild(h2El);

//     for (var i = 0; i < hours.length; i++) {
//       // console.log('MAX: ',this.maxCustEacHour);
//       var difference = this.maxCustEacHour - this.minCustEachHour;
//       var rndNumber = Math.round((Math.floor(Math.random() * (difference + 1)) + this.minCustEachHour));
//       // console.log(rndNumber);
//       this.customersEachHour.push(rndNumber);
//       var cookiesHourly = this.customersEachHour[i] * this.avgCookiesPerCustomer;
//       // console.log('hourly cookies', cookiesHourly);
//       cookiesHourly = Math.round(cookiesHourly);
//       this.cookiesEachHour.push(cookiesHourly);
//       this.totalCookiesForTheDay += this.cookiesEachHour[i];
//       // console.log('Customer each hour: ', this.customersEachHour[i]);
//       // console.log('Total Cookies for the Day: ', this.totalCookiesForTheDay);

//       // add the calculated numbers to the list in the DOM
//       //createElement
//       var liEl = document.createElement('li');
//       //create text content
//       liEl.textContent = `${hours[i]} ${this.storeName} Cookies per Hour : ${this.cookiesEachHour[i]}`;
//       //append to the document by using .appendChild(liEl)
//       position.appendChild(liEl);
//     }
//     //createElement
//     var liEl = document.createElement('li');
//     //create text content
//     liEl.textContent = `Total Cookies per Hour : ${this.totalCookiesForTheDay}`;
//     //append to the document by using .appendChild(liEl)
//     position.appendChild(liEl);

//   }

// }

// seattleShop.render();


// // new list for Tokyo Shop
// var tokyoShop = {
//   storeName: 'Tokyo',
//   minCustEachHour: 3,
//   maxCustEacHour: 24,
//   avgCookiesPerCustomer: 1.2,
//   customersEachHour: [],
//   cookiesEachHour: [],
//   totalCookiesForTheDay: 0,
//   render: function () {
//     // identify where you want to add the list and name the list
//     var position = document.getElementById('cookiesList');
//     var h2El = document.createElement('h2');
//     h2El.textContent = this.storeName;
//     position.appendChild(h2El);

//     for (var i = 0; i < hours.length; i++) {
//       // console.log('Tokyo MAX: ',this.maxCustEacHour);
//       var difference = this.maxCustEacHour - this.minCustEachHour;
//       var rndNumber = Math.round((Math.floor(Math.random() * (difference + 1)) + this.minCustEachHour));
//       // console.log('Tokyo',rndNumber);
//       this.customersEachHour.push(rndNumber);
//       var cookiesHourly = this.customersEachHour[i] * this.avgCookiesPerCustomer;
//       // console.log('Tokyo hourly cookies', cookiesHourly);
//       cookiesHourly = Math.round(cookiesHourly);
//       this.cookiesEachHour.push(cookiesHourly);
//       this.totalCookiesForTheDay += this.cookiesEachHour[i];
//       // console.log('Tokyo Customer each hour: ', this.customersEachHour[i]);
//       // console.log('Tokyo total Cookies for the Day: ', this.totalCookiesForTheDay);
//       // Identify the position where you want to add the content
//       var position = document.getElementById('cookiesList');
//       //createElement
//       var liEl = document.createElement('li');
//       //create text content
//       liEl.textContent = `${hours[i]} ${this.storeName} Cookies per Hour : ${this.cookiesEachHour[i]}`;
//       //append to the document by using .appendChild(liEl)
//       position.appendChild(liEl);
//     }
//     //createElement
//     var liEl = document.createElement('li');
//     //create text content
//     liEl.textContent = `Total Cookies per Hour : ${this.totalCookiesForTheDay}`;
//     //append to the document by using .appendChild(liEl)
//     position.appendChild(liEl);

//   }

// }

// tokyoShop.render();

// // create a sales list for Dubai shop
// var dubaiShop = {
//   storeName: 'Dubai',
//   minCustEachHour: 11,
//   maxCustEacHour: 38,
//   avgCookiesPerCustomer: 3.7,
//   customersEachHour: [],
//   cookiesEachHour: [],
//   totalCookiesForTheDay: 0,
//   render: function () {
//     // identify where you want to add the list and name the list
//     var position = document.getElementById('cookiesList');
//     var h2El = document.createElement('h2');
//     h2El.textContent = this.storeName;
//     position.appendChild(h2El);

//     for (var i = 0; i < hours.length; i++) {
//       // console.log('MAX: ',this.maxCustEacHour);
//       var difference = this.maxCustEacHour - this.minCustEachHour;
//       var rndNumber = Math.round((Math.floor(Math.random() * (difference + 1)) + this.minCustEachHour));
//       // console.log(rndNumber);
//       this.customersEachHour.push(rndNumber);
//       var cookiesHourly = this.customersEachHour[i] * this.avgCookiesPerCustomer;
//       // console.log('hourly cookies', cookiesHourly);
//       cookiesHourly = Math.round(cookiesHourly);
//       this.cookiesEachHour.push(cookiesHourly);
//       this.totalCookiesForTheDay += this.cookiesEachHour[i];
//       // console.log('Customer each hour: ', this.customersEachHour[i]);
//       // console.log('Total Cookies for the Day: ', this.totalCookiesForTheDay);

//       // now to add the calculated numbers to the list in the DOM
//       //first createElement
//       var liEl = document.createElement('li');
//       //second create text content
//       liEl.textContent = `${hours[i]} ${this.storeName} Cookies per Hour : ${this.cookiesEachHour[i]}`;
//       //now append to the document by using .appendChild(liEl)
//       position.appendChild(liEl);
//     }
//     //createElement
//     var liEl = document.createElement('li');
//     //create text content
//     liEl.textContent = `Total Cookies per Hour : ${this.totalCookiesForTheDay}`;
//     //append to the document by using .appendChild(liEl)
//     position.appendChild(liEl);

//   }

// }

// dubaiShop.render();

// // create a sales list for Paris shop
// var parisShop = {
//   storeName: 'Paris',
//   minCustEachHour: 20,
//   maxCustEacHour: 38,
//   avgCookiesPerCustomer: 2.3,
//   customersEachHour: [],
//   cookiesEachHour: [],
//   totalCookiesForTheDay: 0,
//   render: function () {
//     // identify where you want to add the list and name the list
//     var position = document.getElementById('cookiesList');
//     var h2El = document.createElement('h2');
//     h2El.textContent = this.storeName;
//     position.appendChild(h2El);

//     for (var i = 0; i < hours.length; i++) {
//       // console.log('MAX: ',this.maxCustEacHour);
//       var difference = this.maxCustEacHour - this.minCustEachHour;
//       var rndNumber = Math.round((Math.floor(Math.random() * (difference + 1)) + this.minCustEachHour));
//       // console.log(rndNumber);
//       this.customersEachHour.push(rndNumber);
//       var cookiesHourly = this.customersEachHour[i] * this.avgCookiesPerCustomer;
//       // console.log('hourly cookies', cookiesHourly);
//       cookiesHourly = Math.round(cookiesHourly);
//       this.cookiesEachHour.push(cookiesHourly);
//       this.totalCookiesForTheDay += this.cookiesEachHour[i];
//       // console.log('Customer each hour: ', this.customersEachHour[i]);
//       // console.log('Total Cookies for the Day: ', this.totalCookiesForTheDay);

//       // now to add the calculated numbers to the list in the DOM
//       //first createElement
//       var liEl = document.createElement('li');
//       //second create text content
//       liEl.textContent = `${hours[i]} ${this.storeName} Cookies per Hour : ${this.cookiesEachHour[i]}`;
//       //now append to the document by using .appendChild(liEl)
//       position.appendChild(liEl);
//     }
//     //createElement
//     var liEl = document.createElement('li');
//     //create text content
//     liEl.textContent = `Total Cookies per Hour : ${this.totalCookiesForTheDay}`;
//     //append to the document by using .appendChild(liEl)
//     position.appendChild(liEl);

//   }

// }

// parisShop.render();

// create a sales list for Lima shop
var limaShop = {
  storeName: 'Lima',
  minCustEachHour: 2,
  maxCustEacHour: 16,
  avgCookiesPerCustomer: 4.6,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,
  render: function () {
    // identify where you want to add the list and name the list
    var position = document.getElementById('cookiesList');
    var h2El = document.createElement('h2');
    h2El.textContent = this.storeName;
    position.appendChild(h2El);

    for (var i = 0; i < hours.length; i++) {
      // console.log('MAX: ',this.maxCustEacHour);
      var difference = this.maxCustEacHour - this.minCustEachHour;
      var rndNumber = Math.round((Math.floor(Math.random() * (difference + 1)) + this.minCustEachHour));
      // console.log(rndNumber);
      this.customersEachHour.push(rndNumber);
      var cookiesHourly = this.customersEachHour[i] * this.avgCookiesPerCustomer;
      // console.log('hourly cookies', cookiesHourly);
      cookiesHourly = Math.round(cookiesHourly);
      this.cookiesEachHour.push(cookiesHourly);
      this.totalCookiesForTheDay += this.cookiesEachHour[i];
      // console.log('Customer each hour: ', this.customersEachHour[i]);
      // console.log('Total Cookies for the Day: ', this.totalCookiesForTheDay);

      // now to add the calculated numbers to the list in the DOM
      //first createElement
      var liEl = document.createElement('li');
      //second create text content
      liEl.textContent = `${hours[i]} ${this.storeName} Cookies per Hour : ${this.cookiesEachHour[i]}`;
      //now append to the document by using .appendChild(liEl)
      position.appendChild(liEl);
    }
    //createElement
    var liEl = document.createElement('li');
    //create text content
    liEl.textContent = `Total Cookies per Hour : ${this.totalCookiesForTheDay}`;
    //append to the document by using .appendChild(liEl)
    position.appendChild(liEl);

  }

}

limaShop.render();



// // // Attempt to change to function

// copied from the heading so it is a repeat 

//var position = document.getElementById('cookiesList');


//find the positon where the new element should be added
//var position = document.getElementById('cookiesList');

// Create the object constructor notation to create multiple objects

function Shop(storeName, minCustEachHour, maxCustEacHour, avgCookiesPerCustomer) {

  this.storeName = storeName;
  this.minCustEachHour = minCustEachHour;
  this.maxCustEacHour = maxCustEacHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalCookiesForTheDay = 0;
}

// create the prototypes for object Shop

//create randomnumber method associated with Shop
Shop.prototype.randomNumber = function () {
  return (Math.floor(Math.random() * (this.maxCustEacHour - this.minCustEachHour + 1) + this.minCustEachHour));
};

// insert heading in the data list
Shop.prototype.insertHeading = function () {
  // identify where you want to add the list and name the list
  var h2El = document.createElement('h2');
  h2El.textContent = this.storeName;
  position.appendChild(h2El);
};

// insert list elements in the data list
Shop.prototype.insertListElement = function () {
  //identify where you want to add th list
  for (var j = 0; j < hours.length; j++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[j]} ${this.storeName} Cookies per Hour : ${this.cookiesEachHour[j]}`;
    //now append to the document by using .appendChild(liEl)
    position.appendChild(liEl);
  }

};

// insert total cookies to the data set
Shop.prototype.insertTotalElement = function () {
  var liEl = document.createElement('li');
  //create text content
  liEl.textContent = `Total Cookies per Hour : ${this.totalCookiesForTheDay}`;
  //append to the document by using .appendChild(liEl)
  position.appendChild(liEl);
};

Shop.prototype.render = function () {
  // make the heading for each shop
  this.insertHeading();

  // make the loop for every hour within the array
  for (var i = 0; i < hours.length; i++) {
    //   // generate the random number for the first hour
    //   // push random number into the array for customers every hour

    this.customersEachHour.push(this.randomNumber());
    console.log('this is customers each hour', this.customersEachHour[i]);

    // // generate cookies every hour by using the random number of customers every hour
    var cookiesHourly = this.customersEachHour[i] * this.avgCookiesPerCustomer;

    cookiesHourly = Math.round(cookiesHourly);

    // // and then push it into the array for cookies each hour

    this.cookiesEachHour.push(cookiesHourly);
    //console.log('cookies each hour', this.cookiesEachHour[i]);

    // // generate the total cookies for the shop
    this.totalCookiesForTheDay += this.cookiesEachHour[i];
    //console.log('this is the total cookies', this.totalCookiesForTheDay);

  }

  //insert list elements with the cookies for the hour 
  this.insertListElement();
  // insert the total cookies for the day into the list
  this.insertTotalElement();
};

var parisShop = new Shop('Paris', 20, 38, 2.3);

parisShop.render();





// // Making the table with the above contents
// //array of time for top row
// //function of header

// //var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// //function header () {}
// //create element tr
// //create element th
// //add text content as empty string as the first of the columns
// //then we have to append it to the row

// //next create a for loop for each of the hours in the array
// // in the loop also append to the tr element the th

// //outside of the loop attach the row to the body

// //function makeDataRow() {}
// //first for-loop create tr, and then th element, and then go through the names of the cities as an array
// // second for-loop with td elements and then add the cookies sold every hour
// // append it to the body

