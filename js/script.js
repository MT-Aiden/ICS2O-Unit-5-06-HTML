// Aiden McLeod
// ICS2O-Unit5-06-HTML
// May 6 2022

'use strict'
/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-06-HTML/sw.js", {
    scope: "/ICS2O-Unit5-06-HTML/",
  })
}

/**
 * Calculates the product of two numbers the user provides.
 */
function onButtonClick() {
  const numberOne = parseInt(document.getElementById("numberOne").value)
  var numberTwo = parseInt(document.getElementById("numberTwo").value)
  var result = 0

  if (numberOne != 0 && numberTwo >= 0) {
    while (numberTwo > 0) {
      // Calculation for + or - times + numbers
      result = result + numberOne
      numberTwo = numberTwo - 1
    }
  } else if (numberTwo < 0) {
    while (numberTwo != 0) {
      // Calculation for + or - times - numbers
      result = result - numberOne
      numberTwo = numberTwo + 1
    }
  }
  document.getElementById("result").innerHTML = "<h5>The product of these numbers is " + result + "</h5>"
}
