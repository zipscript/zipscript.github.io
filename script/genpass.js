function genpass(len) {
   var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$§÷±ƒ¼£€%^&*+-_?/{}[]()<>.ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var passwordLength =len;
   var password = "";
for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }
      return password;

}
