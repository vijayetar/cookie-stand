function check() {
  console.log('Swamishreeji');
}
check();

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seattleShop = {
  minCustEachHour: 23,
  maxCustEacHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,
  render: function () {
    for (var i = 0; i < hours.length; i++) {
      randomCustomer: function (minCustEachHour, maxCustEachHour) {
        var rndNumber = (Math.floor(Math.random() * (maxCustEachHour - minCustEachHour)) + minCustEachHour);
        customersEachHour = rndNumber;
        cookiesEachHour = this.customersEachHour * this.avgCookiesPerCustomer;
        this.totalCookiesForTheDay += this.cookiesEachHour;
      }
      //createElement
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]} totalCookiesForTheDay`
      //append to the document by using .appendChild(liEl)
      liEl.appendChild(liEl.textContent);
      //find the positon where the new element should be added
      var position = document.getElementById('cookiesList');
      //insert the new element into its new positon
      position.appendChild(liEl);
    }
  }

}
