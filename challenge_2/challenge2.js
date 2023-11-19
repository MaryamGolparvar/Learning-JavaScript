let InvalidPassWord = function (EnteredPassword) {
  if (EnteredPassword.length > 8 && !EnteredPassword.includes("12345")) {
    return true;
  } else {
    return false;
  }
};
let showInvalidPass = InvalidPassWord("maryamgolparvar")
console.log(showInvalidPass)
//or
console.log(InvalidPassWord("my12345"))