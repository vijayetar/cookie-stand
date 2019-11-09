function check() {
  console.log('Swamishreeji');
}
check();

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seattleShop = {
  name: 
  minCustEachHour: 23,
  maxCustEacHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: Math.random,
  render: function() {
    for(var i = 0; i<hours.length; i++){
      //createElement
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]} totalCookiesForTheDay
      //append to the document by using .appendChild(liEl)

    }
    randomNumber: function(min,max) {
      return Math.floor(Math.random()*(max-min)) + min
    }
  }


}