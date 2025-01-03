function calculateTipAmount(bill, tip) {
    const tipAmount = bill * (tip / 100)
    return tipAmount
}

function calculateBillPlusTip(bill, tip) {
    return bill + tip
}

function splitBill (totalBill, numberOfGuests) {
    return totalBill / numberOfGuests
}

function displayResults(tip, totalBill, perGuest) {
    const resultsBox = document.querySelector('#results')

    resultsBox.innerHTML = `
    <ul class="list">
    <li>The tip is £${tip.toFixed(2)}</li>
    <li>The total bill is £${totalBill.toFixed(2)}</li>
    <li>Each person must pay £${perGuest.toFixed(2)}</li>
    </ul>
    `
}

function handleSubmit(event) {
    event.preventDefault()

    const bill = parseFloat(document.querySelector('#bill').value)
    const numberOfGuests = parseInt(document.querySelector('#guests').value)
    const tipPercentage = parseFloat(document.querySelector('#tip').value)

    const tipAmount = calculateTipAmount(bill, tipPercentage)
    const billPlusTip = calculateBillPlusTip(bill, tipAmount)
    const amountPerGuest = splitBill(billPlusTip, numberOfGuests)

    displayResults(tipAmount, billPlusTip, amountPerGuest)
}

const form = document.querySelector('form')

form.addEventListener('submit', handleSubmit)