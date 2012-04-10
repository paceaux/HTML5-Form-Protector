<<<<<<< HEAD
/*!
* Forminator T100: Protect all your form inputs from bad internet connections and an angry John Connor
* @requires Jquery v1.4 or above
*
* Copyright (c) 2012 Frank M. Taylor
* Dual licensed under MIT and GPL licenses 
* http://opensource.org/licenses/MIT
* http://www.gnu.org/licenses/gpl.html
* version 0.1.0
*/
/*
*   USAGE
*   1. apply .forminator() to any form
*   2. include optional arguments for which selectors you want, whether we store on name or id, and clear button
*/
/*   VERSIONS
*       0.1.0 - First working version
*       0.2.0 - Turned into a jQuery plugin
*/
;(function ( $ ) {
$.fn.forminator = function(storedFields, storageKey, clearButton) {
    form = this;    
// CAPTURE FORM DATA
//take whatever the input field is, put its value in storage on keyup
$(form).children('input, datalist, keygen, optgroup, select, textarea').keyup(function(event){ 
    var name = $(form).attr("id")+"-" + $(this).attr(storageKey);
=======
//Form Protector: Forminator T100 series
// CAPTURE FORM DATA
//take whatever the input field is, put its value in storage on keyup
$('input, datalist, keygen, optgroup, select, textarea').keyup(function(event){ 
    var name;
    var value;
    var name = $(this).attr("name");
>>>>>>> 418ad1244d8172082418b57ae1fa87f93b76f24b
    var value = $(this).val();
    localStorage.setItem(name, value);
    currentval = $(this).val();
});
<<<<<<< HEAD
//use this for the input slider - since it doesn't use the keyboard
$(form).children('[type="range"]').mousemove(function(event){
    var name = $(this).attr(storageKey);
=======

//use this for the input slider - since it doesn't use the keyboard
$('[type="range"]').mousemove(function(event){
 var name;
    var value;
    var name = $(this).attr("name");
>>>>>>> 418ad1244d8172082418b57ae1fa87f93b76f24b
    var value = $(this).val();
    localStorage.setItem(name, value);
    currentval = $(this).val();
});
<<<<<<< HEAD
//load the values into input forms
$(form).children('input,textarea,select, datalist, keygen, optgroup').each(function(event) {
    var fieldkey = $(form).attr("id") + "-" + $(this).attr(storageKey);
    var fieldval = localStorage.getItem(fieldkey);
    $(this).val(fieldval);
});
$(clearButton).click(function(event){
    localStorage.clear();    
});
//Copyright 2011. All rights reserved.
//rights are also reserved for Alexandar Kaupanin to piss off for his article on smashing magazine 5 days after I published mine on my blog. 
};
})(jQuery);

$('#elformo').forminator('input', 'name', '#clearIt');
=======

//load the values into input forms
$('input,textarea,select, datalist, keygen, optgroup').each(function(event) {
var fieldkey = $(this).attr("name");
var fieldval = localStorage.getItem(fieldkey);
$(this).val(fieldval);
});
//Copyright 2011. All rights reserved.
//rights are also reserved for Alexandar Kaupanin to piss off for his article on smashing magazine 5 days after I published mine on my blog. 

>>>>>>> 418ad1244d8172082418b57ae1fa87f93b76f24b
