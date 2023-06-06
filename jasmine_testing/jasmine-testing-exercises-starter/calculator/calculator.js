window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      setupIntialValues();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let loanAmount = document.getElementById("loan-amount").value;
  let loanYears = document.getElementById("loan-years").value;
  let loanRate = document.getElementById("loan-rate").value;
  updateMonthly(calculateMonthlyPayment(loanAmount, loanYears, loanRate));
}


// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(principle, term, rate) {
  let monthlyPayment = (principle*((rate/100)/12))/(1 - Math.pow((1+((rate/100)/12)),(-12*term)))
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = monthly;
  
}
