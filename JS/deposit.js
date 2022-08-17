// 1. add event listener to the deposit Button
// 2. get deposit amount from the deposit input FileSystemDirectoryHandle
// 2-5. Convert string deposit amount to a number type
// 3. clear the deposit input field after getting the value
// 4. get the priviou Elementments
// 5. calculate new deposit total and set the value to the deposit total
//  6. get current balance.
// 7. calculate the new balance and set it to the balance total element.



// step-1:----------//

document.getElementById("btn-deposit").addEventListener('click', function(){

    // step-2------//

    const depositField = document.getElementById("deposit-field");

    const  newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-3-----------//

    depositField.value = '';

    // ---step-4----//

    const depositTotalElement = document.getElementById("deposit-total");
    const priviousDepositTotalString = depositTotalElement.innerText;
    const priviousDepositTotal = parseFloat(priviousDepositTotalString);

    // ---step-5---//

    const newDepositTotal = priviousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // ----step-6-----//

    const balanceTotalElement = document.getElementById("balance-total");
    const priviousBalanceTotalString = balanceTotalElement.innerText;
    const priviousBlanaceTotalAmount = parseFloat(priviousBalanceTotalString);

    // ----step-7-----//

    const newBalanceTotal = priviousBlanaceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;



})