/*Copyright (c) 2025 Stewart Almeida
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files…
 [or "Licensed under the MIT License - see LICENSE file for details"]
*/

// Top button scroll
let topButton = document.getElementById("topButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

window.totheTop = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Enable popover on all appropriately marked buttons
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})