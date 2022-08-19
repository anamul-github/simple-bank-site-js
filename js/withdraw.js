document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withDrawAmount = getInputValueById('withdraw-field');

    if (isNaN(withDrawAmount)) {
        alert('Please provide a valid number!');
        return;
    }

    const previousWithdrawTotal = getTextElementById('withdraw-total');

    const newWithdrawTotal = previousWithdrawTotal + withDrawAmount;

    setTextElementById('withdraw-total', newWithdrawTotal);

    const previousBalanceTotal = getTextElementById('balance-total');

    if (withDrawAmount > previousBalanceTotal) {
        alert('Your dad does not have that much of money! Go and earn some!');
        return;
    }
    const newBalanceTotal = previousBalanceTotal - withDrawAmount;

    setTextElementById('balance-total', newBalanceTotal);


})