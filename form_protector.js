//Form Protector: Forminator T100 series
// CAPTURE FORM DATA
//take whatever the input field is, put its value in storage on keyup
$('input, datalist, keygen, optgroup, select, textarea').keyup(function(event){ 
    var name;
    var value;
    var name = $(this).attr("name");
    var value = $(this).val();
    localStorage.setItem(name, value);
    currentval = $(this).val();
});

//use this for the input slider - since it doesn't use the keyboard
$('[type="range"]').mousemove(function(event){
 var name;
    var value;
    var name = $(this).attr("name");
    var value = $(this).val();
    localStorage.setItem(name, value);
    currentval = $(this).val();
});

//load the values into input forms
$('input,textarea,select, datalist, keygen, optgroup').each(function(event) {
var fieldkey = $(this).attr("name");
var fieldval = localStorage.getItem(fieldkey);
$(this).val(fieldval);
});
//Copyright 2011. All rights reserved.
//rights are also reserved for Alexandar Kaupanin to piss off for his article on smashing magazine 5 days after I published mine on my blog. 

