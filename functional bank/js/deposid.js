
document.getElementById('deposid-btn').addEventListener('click',()=>{
  
  const deposideValue=deposidFieldValu('deposid-field')
  
  const totalDeposit=deposidElementTotal('deposid')
  
  const newDeposid=totalDeposit+deposideValue;
  
setElementValue('deposid', newDeposid)
  
  
  const totalBalance=deposidElementTotal('balance')
  setElementValue('balance', newDeposid)
  
})
