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

$('span.employee-location').closest('a').click(function () {
    $('.employee-full-name:contains("s")').closest('a').css('background-color', 'red');
    $('.employee-full-name:contains("S")').closest('li.development').find('a').css('background-color', 'red');
});
