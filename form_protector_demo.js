// CAPTURE FORM DATA
//take whatever the input field is, put its value in storage on keyup
$('input, datalist, keygen, optgroup, select, textarea').keyup(function(event){ 
    var name;
    var value;
    var name = $(this).attr("name");
    var value = $(this).val();
    localStorage.setItem(name, value);
    currentval = $(this).val();
    
    //demo stuff only
    outputs = $('output[name="form output"]').html;
    $('output[name="form output"]').html("<p>" + currentval + "</p>" );

});

//use this for the input slider - since it doesn't use the keyboard
$('[type="range"]').mousemove(function(event){
 var name;
    var value;
    var name = $(this).attr("name");
    var value = $(this).val();
    localStorage.setItem(name, value);
    currentval = $(this).val();
    //demo stuff only
    outputs = $('output').html;
    $('output[name="form output"]').html("<p>" + currentval + "</p>" );
});

//load the values into input forms
$('input,textarea,select, datalist, keygen, optgroup').each(function(event) {
var fieldkey = $(this).attr("name");
var fieldval = localStorage.getItem(fieldkey);
$(this).val(fieldval);
});


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

