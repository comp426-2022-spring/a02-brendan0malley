/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

export function coinFlip() {
  return(Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

export function coinFlips(flips) {
  let array = [];
  for (var i = 0; i < flips; i++){
    let flip = coinFlip();
    array[i] = flip;
  }
  return array;
}


/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

export function countFlips(array) {
  let h_count = 0;
  let t_count = 0;

  for (var i = 0; i < array.length; i++){
    if (array[i] == 'heads'){
      h_count ++;
    }else if (array[i] == 'tails'){
      t_count ++;
    }
  }
  if (h_count == 0){
    return {"tails": t_count};
  }else if (t_count = 0){
    return {"heads": h_count};
  }
  return {"heads": h_count, "tails": t_count};
}
  


/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

export function flipACoin(call) {
  let c_flip = coinFlip();
  let final_result = "";
  if (c_flip = call){
    final_result = "win";
  }else if(c_flip != call){
    final_result = "lose";
  }
  return {"call": call, "flip": c_flip, "result": final_result};
}


