module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 != 0) {
    return false;
  }

  let checkString="";

  for (let i = 0; i < bracketsConfig.length; i++) {

    if (str.includes(bracketsConfig[i])) {

      checkString = str.replace(bracketsConfig[i], '');
    }
    
  }

return (checkString.length == 0) ? true : false;
  
}
