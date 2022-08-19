document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withDrawAmount = getInputValueById('withdraw-field');

    const previousWithdrawTotal = getTextElementById('withdraw-total');

    const newWithdrawTotal = previousWithdrawTotal + withDrawAmount;

    setTextElementById('withdraw-total', newWithdrawTotal);

    const previousBalanceTotal = getTextElementById('balance-total');

    const newBalanceTotal = previousBalanceTotal - withDrawAmount;

    setTextElementById('balance-total', newBalanceTotal);
})