 function fishBash(n) {
    for (let i = 1; i <= n; i++) {
      let output = "";
      if (i % 3 === 0) {
        output += "fish";
      }
      if (i % 5 === 0) {
        output += "bash";
      }
      if (output === "") {
        output = i.toString();
      }
      console.log(output);
    }
  }
  fishBash(15);

  module.exports = fishBash;
   
