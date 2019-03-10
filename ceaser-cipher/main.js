document.getElementById("encrypt").addEventListener("click", () => {
   document.getElementById("result").innerHTML = encrypt(
      document.getElementById("words").value,
      prepareMap()
   );
   document.getElementById("words").value = "";
});

document.getElementById("decrypt").addEventListener("click", () => {
   document.getElementById("result").innerHTML = decrypt(
      document.getElementById("words").value,
      prepareMap()
   );
   document.getElementById("words").value = "";
});

const prepareMap = () => {
   console.log("Preparing Core Encryption Algo...");
   let keyMap = new Map();
   let forward = "Z".charCodeAt(0) - 4;
   for (var x = "A".charCodeAt(0); x <= "Z".charCodeAt(0); x++) {
      if (String.fromCharCode(forward) !== "Z") {
         keyMap.set(String.fromCharCode(x), String.fromCharCode(forward));
         keyMap.set(
            String.fromCharCode(x).toLowerCase(),
            String.fromCharCode(forward).toLowerCase()
         );
         forward++;
      } else {
         keyMap.set(String.fromCharCode(x), String.fromCharCode(forward));
         keyMap.set(
            String.fromCharCode(x).toLowerCase(),
            String.fromCharCode(forward).toLowerCase()
         );
         forward = "A".charCodeAt(0);
      }
   }
   console.log("Core Encryption Algo Complete...");
   return keyMap;
}

const encrypt = (word, prepareMap) => {
   let map = new Map(prepareMap);
   console.log("Encryption Started...");
   word = word.split("");
   word.map((letter, index) => {
      if (map.has(word[index])) {
         word[index] = map.get(letter);
      }
   });
   word = word.join("");
   console.log("Encryption Complete...");
   return word;
}

const decrypt = (encrypted, prepareMap) => {
   let map = new Map(prepareMap);
   newMap = new Map();
   map.forEach((element, index) => {
      newMap.set(element, index);
   });
   console.log("Decryption Started...");
   encrypted = encrypted.split("");
   encrypted.map((letter, index) => {
      if (newMap.has(encrypted[index])) {
         encrypted[index] = newMap.get(letter);
      }
   });
   encrypted = encrypted.join("");
   console.log("Decryption Complete...");
   return encrypted;
}

// const copyOutput() => {
//   let temp = document.getElementById("result");
//   temp.select();
//   document.execCommand("copy");
//   alert("Copied to clipboard!");
// }

