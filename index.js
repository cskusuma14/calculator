      function getInput(x) {
        document.getElementById("input").value += x;
      }

      function clearInput(y) {
        document.getElementById("input").value = y;
      }

      function Result() {
        var result = eval(document.getElementById("input").value);
        document.getElementById("input").value = result;
      }
   
