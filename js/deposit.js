document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputValueById('deposit-field');

    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid number!');
        return;
    }

    const previousDepositTotal = getTextElementById('deposit-total');

    const newDepositTotal = previousDepositTotal + newDepositAmount;

    setTextElementById('deposit-total', newDepositTotal);

    const previousBalanceTotal = getTextElementById('balance-total');

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    setTextElementById('balance-total', newBalanceTotal);
})