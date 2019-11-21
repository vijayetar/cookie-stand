'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// find the positon where the new element should be added
var position = document.getElementById('cookiesList');
var nameShop = [];
var sumTotalatEachHour = 0;
var sumTotalsatEachShop = 0;

// identify the table
var table = document.getElementById('table');

// variables to determine the percentage of customer
var percentCust = 0;
var tablePercent = document.getElementById('tablePercent');

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
  this.renderNewTable();
  this.table2RowData();
}

//
// create the prototypes for object Shop to make a List of data
//
// // create randomnumber method associated with Shop
Shop.prototype.randomNumber = function() {
  return (Math.ceil(Math.random() * (this.maxCustEacHour - this.minCustEachHour + 1) + this.minCustEachHour));
};

// // insert heading in the data List
Shop.prototype.insertHeading = function() {
  var h2El = document.createElement('h2');
  h2El.textContent = this.storeName;
  position.appendChild(h2El);
};

//create function for the first heading row
//
function tableHeadingHours() {
  var tbRow = document.createElement('tr');
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
function tableFooterTotals() {
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
      // console.log('this is j', j, 'this is my k', k);
      // console.log('this is the number being added', nameShop[k].cookiesEachHour[j]);
      sumTotalatEachHour += nameShop[k].cookiesEachHour[j];
      // console.log('this is the sumtotal', sumTotalatEachHour);
    }
    // make the last row and add the sum totals for each hour
    thEl = document.createElement('th');
    thEl.textContent = sumTotalatEachHour;
    tbRow.appendChild(thEl);
  }

  for (var k = 0; k < nameShop.length; k++) {
    sumTotalsatEachShop += nameShop[k].totalCookiesForTheDay;
    // console.log('this is the total', sumTotalsatEachShop);
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

  for (var i = 0; i < hours.length; i++) {
    //   // generate the random number for the first hour
    //   // push random number into the array for customers every hour

    this.customersEachHour.push(this.randomNumber());
    //console.log('this is customers each hour', this.customersEachHour[i]);

    // // generate cookies every hour by using the random number of customers every hour
    var cookiesHourly = this.customersEachHour[i] * this.avgCookiesPerCustomer;

    cookiesHourly = Math.ceil(cookiesHourly);
    // // and then push it into the array for cookies each hour
    this.cookiesEachHour.push(cookiesHourly);

    // console.log('name of shop', this.storeName, 'cookies each hour', this.cookiesEachHour[i]);

    // // generate the total cookies for the shop
    this.totalCookiesForTheDay += this.cookiesEachHour[i];
    // console.log('shopName', this.storeName, 'this is the total cookies', this.totalCookiesForTheDay);
    // console.log('this new style is working!!!');

  }
  // insert the data into the table row
  this.tableRowData();
};

Shop.prototype.getCustpercentage = function() {
  for (var i = 0; i < hours.length; i++) {

    percentCust = (this.customersEachHour[i] / this.maxCustEacHour);
    // this.percentCustperHour = Math.round(this.percentCustperHour);
    percentCust = percentCust.toFixed(1);
    // console.log('this is the percent per hour',percentCust);
    this.percentCustperHour.push(percentCust);
  }
};


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


// //
// //find the maximum in the array Customers each hour to get teh percentages
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
  this.getCustpercentage();

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

tableHeadingHours();
table2HeadingHours();
var seattleShop = new Shop('Seattle', 23, 65, 6.3);
var tokyoShop = new Shop('Tokyo', 3, 24, 1.2);
var dubaiShop = new Shop('Dubai', 11, 38, 3.7);
var parisShop = new Shop('Paris', 20, 38, 2.3);
var limaShop = new Shop('Lima', 2, 16, 4.6);
tableFooterTotals();


//using the submit form and adding the contents into the table 1 and table 2
var userForm = document.getElementById('user-form');
userForm.addEventListener('submit',handleSubmit, false);

function handleSubmit(event) {
  event.preventDefault();
  // give names to all the submitted values
  var name = event.target.inputElementName.value; 
  var minC = event.target.inputElementMinCust.value;
  var maxC = event.target.inputElementMaxCust.value;
  var avgC = event.target.inputElementAvgCookies.value;

  minC = parseInt(minC);
  maxC = parseInt(maxC);

  //CHECK IF THE MIN IS LESS THAN MAXIMUM
  if (minC > maxC) {
    alert('the min number should be less than max number');
    event.target.inputElementName.value = null; 
    event.target.inputElementMinCust.value = null;
    event.target.inputElementMaxCust.value = null;
    event.target.inputElementAvgCookies.value = null;  
    return;
  }

  //CHECK IF NAME IS ALREADY ENTERED
  checkStore(name);

  // now remove the totals from the table
  var footertotals = document.getElementById('table');
  var lastline = footertotals.lastChild;
  table.removeChild(lastline);

  // console.log('this is the info:', name, minC, maxC, avgC);
  new Shop(name, minC, maxC, avgC);
  // console.log('my MegaArray', nameShop);

  event.target.inputElementName.value = null; 
  event.target.inputElementMinCust.value = null;
  event.target.inputElementMaxCust.value = null;
  event.target.inputElementAvgCookies.value = null;

  tableFooterTotals();
}

function checkStore(name) {
  for (var k=0; k<nameShop.length; k++) {
    if (name === nameShop[k].storeName) {
      // console.log(check);
      event.target.inputElementName.value = null; 
      event.target.inputElementMinCust.value = null;
      event.target.inputElementMaxCust.value = null;
      event.target.inputElementAvgCookies.value = null;
      alert('This shop is already in the system. Please replace the data!');
      userForm.addEventListener('submit',handleSubmit, false);
      k = nameShop.length;
    }
  }
}


// if (check==='Y'|| check==='y') {
//   //Allow data change
//   changeStoreData();
// function changeStoreData() {
// // delete the old information
//   var removeEl = document.getElementsByTagName('th');
//   console.log('length of all removeEl', removeEl.length, 'and removeEl', removeEl);
//   // return removeEl;
// }

