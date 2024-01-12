// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Function to handle the mortgage calculation when the user clicks a button
    function calculateMortgage() {
        // Get user input from the form
        var housePrice = parseFloat(document.getElementById('housePrice').value);
        var depositAmount = parseFloat(document.getElementById('depositAmount').value);
        var interestRate = parseFloat(document.getElementById('interestRate').value);
        var loanTerm = parseInt(document.getElementById('loanTerm').value);

        // Calculate the loan amount
        var loanAmount = housePrice - depositAmount;

        // Calculate the monthly interest rate and total number of payments
        var monthlyInterestRate = (interestRate / 100) / 12;
        var totalPayments = loanTerm * 12;

        // Calculate the monthly mortgage payment using the loan payment formula
        var monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

        // Display the result to the user
        document.getElementById('result').innerHTML = 'Your estimated monthly mortgage payment is: £' + monthlyPayment.toFixed(2);
    }

    // Attach the calculateMortgage function to a button click event
    document.getElementById('calculateButton').addEventListener('click', calculateMortgage);
});

