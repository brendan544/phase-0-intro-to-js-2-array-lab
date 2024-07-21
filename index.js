let cats = ["Milo", "Otis", "Garfield"];

function appendCat(name) {
    cats.push(name);
  }
  function appendCat(name) {
    cats.length = 0; // Reset the array length to 0
    cats.push(name); // Append the new cat name
  }
  function destructivelyAppendCat(name) {
    cats.push(Ralph);
  }
  function appendCat(name) {
    cats.length = 0; // Reset the array length to 0
    cats.push(name); // Append the new cat name
  }
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  
  // Function to destructively remove the last cat from the cats array
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  
  // Function to destructively remove the first cat from the cats array
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  
  // Function to append a cat to the cats array and return a new array, leaving cats unchanged
  function appendCat(name) {
    return [...cats, name];
  }
  
  // Function to prepend a cat to the cats array and return a new array, leaving cats unchanged
  function prependCat(name) {
    return [name, ...cats];
  }
  function prependCat(Arnold);
  function appendCat(name) {
    cats.length = 0; // Reset the array length to 0
    cats.push(name); // Append the new cat name
  }
  // Function to remove the last cat in the cats array and return a new array, leaving cats unchanged
  function removeLastCat() {
    return cats.slice(0, -1);
  }
  function appendCat(name) {
    cats.length = 0; // Reset the array length to 0
    cats.push(name); // Append the new cat name
  }
  // Function to remove the first cat from the cats array and return a new array, leaving cats unchanged
  function removeFirstCat() {
    return cats.slice(1);
  }
  function appendCat(name) {
    cats.length = 0; // Reset the array length to 0
    cats.push(name); // Append the new cat name
  }



