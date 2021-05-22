/// const increment = () => console.log("The button was clicked")
let countEl = document.getElementById("count-el");//pass in args
let saveEl = document.getElementById('save-el');
let count  = 0;

const increment = () => { 
  // set countEl innerText to the count variable
   count += 1;
  countEl.textContent = count
}

// innerText is 'expensive' in runtime


const save = () => {
  let countStr = count + " - " 
  saveEl.textContent += countStr
  // to reset count to 0 after each save ...
  countEl.textContent = 0;
  //then initialize count back to 0 here (not in global var)
  count = 0;
}

save()

// .innerText doesn't return hidden elemnts - so str is crammed with no space
// textContent does and retrns spaced string
// for more info google: innerText alternative mdn