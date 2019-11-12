
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//find the positon where the new element should be added
//var position = document.getElementById('cookiesList');

// create a sales list for seattleshop
var seattleShop = {
  storeName: 'Seattle',
  minCustEachHour: 23,
  maxCustEacHour: 65,
  avgCookiesPerCustomer: 6.3,
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

      // add the calculated numbers to the list in the DOM
      //createElement
      var liEl = document.createElement('li');
      //create text content
      liEl.textContent = `${hours[i]} ${this.storeName} Cookies per Hour : ${this.cookiesEachHour[i]}`;
      //append to the document by using .appendChild(liEl)
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

seattleShop.render();


// new list for Tokyo Shop
var tokyoShop = {
  storeName: 'Tokyo',
  minCustEachHour: 3,
  maxCustEacHour: 24,
  avgCookiesPerCustomer: 1.2,
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
      // console.log('Tokyo MAX: ',this.maxCustEacHour);
      var difference = this.maxCustEacHour - this.minCustEachHour;
      var rndNumber = Math.round((Math.floor(Math.random() * (difference + 1)) + this.minCustEachHour));
      // console.log('Tokyo',rndNumber);
      this.customersEachHour.push(rndNumber);
      var cookiesHourly = this.customersEachHour[i] * this.avgCookiesPerCustomer;
      // console.log('Tokyo hourly cookies', cookiesHourly);
      cookiesHourly = Math.round(cookiesHourly);
      this.cookiesEachHour.push(cookiesHourly);
      this.totalCookiesForTheDay += this.cookiesEachHour[i];
      // console.log('Tokyo Customer each hour: ', this.customersEachHour[i]);
      console.log('Tokyo total Cookies for the Day: ', this.totalCookiesForTheDay);
      // Identify the position where you want to add the content
      var position = document.getElementById('cookiesList');
      //createElement
      var liEl = document.createElement('li');
      //create text content
      liEl.textContent = `${hours[i]} ${this.storeName} Cookies per Hour : ${this.cookiesEachHour[i]}`;
      //append to the document by using .appendChild(liEl)
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

tokyoShop.render();

// create a sales list for Dubai shop
var dubaiShop = {
  storeName: 'Dubai',
  minCustEachHour: 11,
  maxCustEacHour: 38,
  avgCookiesPerCustomer: 3.7,
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

dubaiShop.render();

