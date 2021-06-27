// from data.js
var tableData = data;

function initialLoad() {

  var tableContent = "";
  var columns = [];

  // Create the header for the table

  for(var prop in tableData[0]) {
    if(tableData[0].hasOwnProperty(prop)) {
    // Keep the columns for later to get column values from the 'data' object.
       columns.push(prop);
    };
  };

  tableContent = tableContent + "</tr>";

  // Create individual data rows.
  tableData.forEach(function(row) {
    // Create a new row in the table for every data array element.
    tableContent = tableContent + "<tr>";

    columns.forEach(function(cell) {
      // Cell is the property name for each column, row[cell] provides value of that cell.
      tableContent = tableContent + "<td>" + row[cell] + "</td>";
    });
    tableContent = tableContent + "</tr>";

  });

  //console.log(tableContent);
  $("#ufo-table").append(tableContent);

}  

// Complete the event handler function for the form
function runFilteredList() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  //console.log("here2");
  
  // Select the input element and getg the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  var filteredEvents = tableData.filter(tableRow => tableRow.datetime === inputValue)

  console.log(filteredEvents);
  
  var tableContent = "";
  var columns = [];

  // Create the header for the table

  for(var prop in filteredEvents[0]) {
    if(filteredEvents[0].hasOwnProperty(prop)) {
    // Keep the columns for later to get column values from the 'data' object.
      columns.push(prop);
    };
  };

  tableContent = tableContent + "</tr>";

  // Create individual data rows.
  filteredEvents.forEach(function(row) {
    // Create a new row in the table for every data array element.
    tableContent = tableContent + "<tr>";

    columns.forEach(function(cell) {
      // Cell is the property name for each column, row[cell] provides value of that cell.
      tableContent = tableContent + "<td>" + row[cell] + "</td>";
    });
    tableContent = tableContent + "</tr>";

  });

    //console.log(tableContent);
    $("#ufo-table").find("tbody").empty();
    $("#ufo-table").append(tableContent);

};

// Select the filter button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("#form");

// Create event handler
button.on("click", runFilteredList);
form.on("submit", runFilteredList);

//console.log("here4");
initialLoad();