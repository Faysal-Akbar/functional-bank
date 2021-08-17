//function for input

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    //clear input field
    inputField.value = '';
    return inputAmount;
}

//function for update total

function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
//function for update balance

function updateBalance(amount, isAddition){
    const balanceTotal = document.getElementById('balance-total');
    /* const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance();

    if(isAddition == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}
//event handler for deposit button

document.getElementById('deposit-button').addEventListener('click', function(){
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        updateTotalField('deposite-total', depositAmount);
        updateBalance(depositAmount, true);
    }
    //get and update current deposit total

    /* const depositTotal = document.getElementById('deposite-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount; */
    

    //update balance

    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount; */
    
});

//event handler for withdraw button

document.getElementById('withdraw-button').addEventListener('click', function(){
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmount); */
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(newWithdrawAmount > 0 && newWithdrawAmount < currentBalance ){
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
    
    //get and update withdraw total

    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawAmountTotal = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdrawAmountTotal);

    withdrawTotal.innerText = previousWithdrawAmount + newWithdrawAmount; */
    

    //update balance

    /* const balanceTotal = document.getElementById('balance-total');
    const balanceAmount = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceAmount);

    balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount; */
});