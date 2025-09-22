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

/* global bootstrap */
// Enable popover on all appropriately marked buttons
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the popover trigger attribute
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

  // Initialize a Bootstrap Popover for each one
  popoverTriggerList.forEach((el) => {
    new bootstrap.Popover(el);
  });
});