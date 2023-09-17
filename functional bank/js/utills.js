
const deposidFieldValu =(deposidAmount)=>{
  const deposidField=document.getElementById(deposidAmount);
  const deposidFieldValue=parseFloat(deposidField.value)
  deposidField.value='';
  return deposidFieldValue
}

const deposidElementTotal=(deposid)=>{
  const deposidElement=document.getElementById(deposid);
  const deposidElementValu=parseFloat(deposidElement.innerText)
  
  return deposidElementValu
}

const setElementValue=(elements,values)=>{
  const newDepositElement=document.getElementById(elements);
  newDepositElement.innerText=values;
}