

//ONLY FOR DEMO - REMOVE FROM PRODUCTION
var items = localStorage.length; //just find out the quantity of items
var keylist = $('#keylist').html(); //name of the output location
for (i=0; i < items; i++)
{
$('#keylist').append(('<tr><td>' +localStorage.key(i) +'</td><td>' +(localStorage.getItem(localStorage.key(i))) +'</td></tr>'));   
}
//add in the number of items
$('#keylist').append('<tr><td>Number of items</td><td>' + items + '</td></tr>')












//Copyright 2011. All rights reserved. 

