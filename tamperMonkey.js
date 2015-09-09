// ==UserScript==
// @name         My Fancy New Userscript
// @namespace    http://your.homepage/
// @version      0.1
// @description  Change everything to red
// @author       Katie
// @match        https://atomicobject.com/*
// @grant        none
// ==/UserScript==


$(document).ready(function () {
    $('span.employee-location').closest('a').attr("href", "#");
});

$('.employee-full-name:contains("s")').closest('a').click(function () {
    $(this).css('background-color', 'red');
});
$('.employee-full-name:contains("S")').closest('a').click(function () {
    $(this).css('background-color', 'red');
});


//$('.employee-full-name:not(:contains("s"))').closest('a').click(function () {
//    $(this).css('background-color', 'blue');
//});

//$('.employee-full-name:not(:contains("S"))').closest('a').click(function () {
//    $(this).css('background-color', 'blue');
//});