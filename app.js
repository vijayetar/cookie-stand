var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// find the positon where the new element should be added
var position = document.getElementById('cookiesList');

//
// global variables
//
var nameShop = [];

var sumTotalatEachHour = 0;

var sumTotalsatEachShop = 0;

// // // Attempt to change to function
//
// Create the object constructor notation to create multiple objects
//
function Shop(storeName, minCustEachHour, maxCustEacHour, avgCookiesPerCustomer) {
  this.storeName = storeName;
  this.minCustEachHour = minCustEachHour;
  this.maxCustEacHour = maxCustEacHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalCookiesForTheDay = 0;
  this.percentCustperHour = [];
  nameShop.push(this);
}

//
// create the prototypes for object Shop to make a List of data
//
// // create randomnumber method associated with Shop
Shop.prototype.randomNumber = function() {
  return (Math.floor(Math.random() * (this.maxCustEacHour - this.minCustEachHour + 1) + this.minCustEachHour));
};

// // insert heading in the data List
Shop.prototype.insertHeading = function() {
  // identify where you want to add the list and name the list
  var h2El = document.createElement('h2');
  h2El.textContent = this.storeName;
  position.appendChild(h2El);
};

// //insert list elements in the data List
Shop.prototype.insertListElement = function() {
  //identify where you want to add th list
  for (var j = 0; j < hours.length; j++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[j]} ${this.storeName} Cookies per Hour : ${this.cookiesEachHour[j]}`;
    //now append to the document by using .appendChild(liEl)
    position.appendChild(liEl);
  }
};

// insert total cookies to the List
Shop.prototype.insertTotalElement = function() {
  var liEl = document.createElement('li');
  //create text content
  liEl.textContent = `Total Cookies per Hour : ${this.totalCookiesForTheDay}`;
  //append to the document by using .appendChild(liEl)
  position.appendChild(liEl);
};

Shop.prototype.renderList = function() {
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


var seattleShop = new Shop('Seattle', 23, 65, 6.3);
// seattleShop.renderList();

var tokyoShop = new Shop('Tokyo', 3, 24, 1.2);
// tokyoShop.renderList();

var dubaiShop = new Shop('Dubai', 11, 38, 3.7);
// dubaiShop.renderList();

var parisShop = new Shop('Paris', 20, 38, 2.3);
// parisShop.renderList();

var limaShop = new Shop('Lima', 2, 16, 4.6);
// limaShop.renderList();

// identify the table
var table = document.getElementById('table');

//
//create function for the first heading row
//
function tableHeadingHours() {
  var tbRow = document.createElement('tr');
  // this is the empty first box
  var thEl = document.createElement('th');
  thEl.textContent = '';
  tbRow.appendChild(thEl);

  // create loop to enter contents of the array hours and then append it to the table row
  for (var j = 0; j < hours.length; j++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[j];
    tbRow.appendChild(thEl);
  }

  // make the last column heading for the daily location totals
  thEl = document.createElement('th');
  thEl.textContent = 'daily location totals';
  tbRow.appendChild(thEl);


  //append the table row to the table in html
  table.appendChild(tbRow);
}

tableHeadingHours();

//
// create prototype with the contents of the shop rows
//
Shop.prototype.tableRowData = function() {
  // create the table row first
  var tbRow = document.createElement('tr');
  // create the first column content with the names of the places
  var thEl = document.createElement('th');
  // insert the store Name in first column
  thEl.textContent = this.storeName;
  //append the store name
  tbRow.appendChild(thEl);

  // // create a loop to enter cookies per hour for each hour
  for (var j = 0; j < hours.length; j++) {
    // create the  table data cell
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[j];
    tbRow.appendChild(tdEl);
  }
  // add data for the total cookies for the day
  thEl = document.createElement('th');
  thEl.textContent = this.totalCookiesForTheDay;
  tbRow.appendChild(thEl);

  //append row to the table
  table.appendChild(tbRow);
};

//
//create the last table row with the total cookies
//
function tableHeadingTotals() {
  var tbRow = document.createElement('tr');
  // this is the empty first box
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  tbRow.appendChild(thEl);

  // create first loop to find cookies at each hour 
  for (var j = 0; j < hours.length; j++) {
    // assign the total variable to 0 at each hour
    sumTotalatEachHour = 0;

    for (var k = 0; k < nameShop.length; k++) {
      console.log('this is j', j, 'this is my k', k);
      console.log('this is the number being added', nameShop[k].cookiesEachHour[j]);
      sumTotalatEachHour += nameShop[k].cookiesEachHour[j];
      console.log('this is the sumtotal', sumTotalatEachHour);
    }
    // make the last row and add the sum totals for each hour
    thEl = document.createElement('th');
    thEl.textContent = sumTotalatEachHour;
    tbRow.appendChild(thEl);

  }

  for (var k = 0; k < nameShop.length; k++) {
    sumTotalsatEachShop += nameShop[k].totalCookiesForTheDay;
    console.log('this is the total', sumTotalsatEachShop);
  }
  // make the last row and add the totals for each shop
  thEl = document.createElement('th');
  thEl.textContent = sumTotalsatEachShop;
  tbRow.appendChild(thEl);

  //append the table row to the table in html
  table.appendChild(tbRow);

}

//
// create a new prototype to both do the math and add it into the table data
//
Shop.prototype.renderNewTable = function() {
  // heading for the table is a separate function called independent of the method, called tableHeadingHours

  // make the loop for every hour within the array and make your calculations for the hour

  for (var i = 0; i < hours.length; i++) {
    //   // generate the random number for the first hour
    //   // push random number into the array for customers every hour

    this.customersEachHour.push(this.randomNumber());
    //console.log('this is customers each hour', this.customersEachHour[i]);

    // // generate cookies every hour by using the random number of customers every hour
    var cookiesHourly = this.customersEachHour[i] * this.avgCookiesPerCustomer;

    cookiesHourly = Math.round(cookiesHourly);

    // // and then push it into the array for cookies each hour

    this.cookiesEachHour.push(cookiesHourly);

    console.log('name of shop', this.storeName, 'cookies each hour', this.cookiesEachHour[i]);

    // // generate the total cookies for the shop
    this.totalCookiesForTheDay += this.cookiesEachHour[i];
    console.log('shopName', this.storeName, 'this is the total cookies', this.totalCookiesForTheDay);

  }


  // insert the data into the table row
  this.tableRowData();

};

//
// call out the new methods
//
seattleShop.renderNewTable();
tokyoShop.renderNewTable();
dubaiShop.renderNewTable();
parisShop.renderNewTable();
limaShop.renderNewTable();
tableHeadingTotals();


console.log('this is my MEGA ARRAY', nameShop);

//
//find the maximum in the array Customers each hour to get teh percentages
//
var maxCust = 0;
var percentCustperHour = 0;

function getCustpercentage() {
  for (var j = 0; j < nameShop.length; j++) {
    console.log('this is name of shop', nameShop[j]);

    for (var i = 0; i < hours.length; i++) {

      percentCustperHour = (nameShop[j].customersEachHour[i] / nameShop[j].maxCustEacHour);
      // this.percentCustperHour = Math.round(this.percentCustperHour);
      percentCustperHour = percentCustperHour.toFixed(1);
      console.log('this is the percent per hour',
        percentCustperHour);
      nameShop[j].percentCustperHour.push(percentCustperHour);
    }
    console.log(nameShop[j].percentCustperHour)
  }
};

getCustpercentage();

var tablePercent = document.getElementById('tablePercent');

function table2HeadingHours() {
  var tbRow = document.createElement('tr');
  // this is the empty first box
  var thEl = document.createElement('th');
  thEl.textContent = ' ';
  tbRow.appendChild(thEl);

  // create loop to enter contents of the array hours and then append it to the table row
  for (var j = 0; j < hours.length; j++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[j];
    tbRow.appendChild(thEl);
  }

  //append the table row to the table in html
  tablePercent.appendChild(tbRow);
}

table2HeadingHours();

//
// create prototype with the contents of the shop rows
//
Shop.prototype.table2RowData = function() {
  // create the table row first
  var tbRow = document.createElement('tr');
  // create the first column content with the names of the places
  var thEl = document.createElement('th');
  // insert the store Name in first column
  thEl.textContent = this.storeName;
  //append the store name
  tbRow.appendChild(thEl);

  // // create a loop to enter cookies per hour for each hour
  for (var j = 0; j < hours.length; j++) {
    // create the  table data cell
    var tdEl = document.createElement('td');
    tdEl.textContent = this.percentCustperHour[j];
    tbRow.appendChild(tdEl);
  }

  //append row to the table
  tablePercent.appendChild(tbRow);
};

seattleShop.table2RowData();
tokyoShop.table2RowData();
dubaiShop.table2RowData();
parisShop.table2RowData();
limaShop.table2RowData();