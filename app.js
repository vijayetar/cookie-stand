
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//find the positon where the new element should be added
var position = document.getElementById('cookiesList');


var seattleShop = {
  minCustEachHour: 23,
  maxCustEacHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,
  render: function () {
    for (var i = 0; i < hours.length; i++) {
      // console.log('MAX: ',this.maxCustEacHour);
      var difference = this.maxCustEacHour - this.minCustEachHour;
      var rndNumber = Math.round((Math.floor(Math.random()*(difference + 1))+ this.minCustEachHour));
      // console.log(rndNumber);
      this.customersEachHour.push(rndNumber);
      var cookiesHourly = this.customersEachHour[i] * this.avgCookiesPerCustomer;
      // console.log('hourly cookies', cookiesHourly);
      cookiesHourly = Math.round(cookiesHourly);
      this.cookiesEachHour.push(cookiesHourly);
      this.totalCookiesForTheDay += this.cookiesEachHour[i];
      // console.log('Customer each hour: ', this.customersEachHour[i]);
      // console.log('Total Cookies for the Day: ', this.totalCookiesForTheDay);
      //createElement
      var liEl = document.createElement('li');
      //create text content
      liEl.textContent = `${hours[i]} Cookies per Hour : ${this.cookiesEachHour[i]}`;
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