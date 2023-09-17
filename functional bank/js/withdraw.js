
document.getElementById('withdraw-btn').addEventListener('click',()=>{
  const totalWithdraw=deposidFieldValu('withdraw-field');
  
  const totalWithdrawElement=deposidElementTotal('withdraw');
  
  const newTotalWithdraw=totalWithdrawElement+totalWithdraw;
  
    
  setElementValue('withdraw', newTotalWithdraw)
  
  const balanceTotal=deposidElementTotal('balance')
  const newBalance=balanceTotal-totalWithdraw;
  setElementValue('balance', newBalance)

  //console.log(newTotalWithdraw)
})