function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s/g, "");
   
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
       if (str === reversed) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isPalindrome("Kasur ini rusak")); // true
  console.log(isPalindrome("hello world")); // false