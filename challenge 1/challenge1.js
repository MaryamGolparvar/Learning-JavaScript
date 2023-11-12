let userAccount = {
    useNmae: "MaryamGolparvar",
    income: 0,
    outgo: 0,
  };
  
  
  let addIncome = function(account , income){
  account.income = account.income + income
  }
  
  let addOutGo = function(account , amount){
    account.outgo = account.outgo + amount
  }
  
  let getAccountDate = function(account){
  let blance = account.income - account.outgo
  return `Account Name is : ${account.useNmae} - Account salary : ${blance}`
  }
  
  addIncome(userAccount, 1000)
  addOutGo(userAccount, 50)
  console.log(getAccountDate(userAccount))