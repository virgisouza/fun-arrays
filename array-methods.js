var dataset = require('./dataset.json');

/*
  create an array with accounts from bankBalances that are
  greater than 100000
  assign the resulting new array to `hundredThousandairs`
*/
var hundredThousandairs = null;

//Get all accounts from bankBalances that are > 100000 and assign to hundredThousandairs
hundredThousandairs = (dataset.bankBalances).filter(function(e){
  return e.amount > 100000;
});


/*
  DO NOT MUTATE DATA.

  create a new dataset where each bank object is a new object.
  `amount` and `state` values will be transferred to the new object.
  This new object is different, you will add one new key of `rounded`

  `rounded` value is `amount` rounded to the nearest dollar

  Example:
    {
      "amount": "134758.44",
      "state": "HI",
      "rounded": 134758
    }
  assign the resulting new array to `datasetWithRoundedDollar`
*/
//var datasetWithRoundedDollar = null;

//create new dataset = datasetWithRoundedDollar
//reduce(), map(), or filter()

 //where each object is a new object

var datasetWithRoundedDollar = (dataset.bankBalances).map(function(e){
  // console.log(e)
  // e['rounded'] = Math.round(e.amount);
  // return e;
return {
  'amount': e.amount,
  'state': e.state,
  'rounded': Math.round(e.amount)
}
});


//'amount' and 'state' values will be transfered to new object

//add new key 'rounded'

//'rounded' = 'amount' rounded to nearest dollar




/*
  DO NOT MUTATE DATA.

  create a new dataset where each bank object is a new object.
  `amount` and `state` values will be transferred to the new object.
  This new object is different, you will add one new key of `roundedDime`

  `roundedDime` value is `amount` rounded to the nearest 10th of a cent

  Example 1
    {
      "amount": "134758.46",
      "state": "HI"
      "roundedDime": 134758.5
    }
  Example 2
    {
      "amount": "134758.44",
      "state": "HI"
      "roundedDime": 134758.4
    }
  assign the resulting new array to `roundedDime`
*/

var datasetWithRoundedDime = null;

//create new data set where each blank object is a new obj
//reduce(), map(), or filter()


//'amount' and 'state' values will be transferred to new obj

//newObj will have an additional key named 'roundedDime'

//'roundedDime' = 'amount' rounded to nearest 10th of a cent  $xx.x

datasetWithRoundedDime = (dataset.bankBalances).map(function(e){
  e.roundedDime = Math.round(e.amount*10)/10;
  return e;

// return {
//   'amount': e.amount,
//   'state': e.state,
//   'roundedDime': Math.round(e.amount*10)/10
// }
})


// set sumOfBankBalances to be the sum of all value held at `amount` for each bank object
var sumOfBankBalances = null;

 sumOfBankBalances = (dataset.bankBalances).reduce(function(previousValue, currentValue){
  return Math.round((parseFloat(previousValue) + parseFloat(currentValue.amount))*100)/ 100;

 }, 0)


/*
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  take each `amount` and add 18.9% interest to it rounded to the nearest cent
  and then sum it all up into one value saved to `sumOfInterests`
 */

//for ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'] ==> add 18.9% , then round that sum to
//nearest cent

//finally, sum all values up

var sumOfInterests = null;

sumOfInterests = (dataset.bankBalances).filter(function(){
    //filter()
  var states = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
  var filteredStates = states.filter(function(e){

    })

  //then map() add 18.9%

  //then reduce() and round that sum to nearest cent



})





/*
  aggregate the sum of bankBalance amounts
  grouped by state
  set stateSums to be a hash table where

  the key is:
    the two letter state abbreviation
  and the value is:
    the sum of all amounts from that state
    the value must be rounded to the nearest cent

  note: During your summation (
    if at any point durig your calculation where the number looks like `2486552.9779399997`
    round this number to the nearest 10th of a cent before moving on.
  )
 */
var stateSums = null;








/*
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  take each `amount` and add 18.9% interest to it
  only sum values greater than 50,000 and save it to `sumOfInterests`

  note: During your summation (
    if at any point durig your calculation where the number looks like `2486552.9779399997`
    round this number to the nearest 10th of a cent before moving on.
  )
 */
var sumOfHighInterests = null;






/*
  set `lowerSumStates` to be an array of two letter state
  abbreviations of each state where the sum of amounts
  in the state is less than 1,000,000
 */
var lowerSumStates = null;







/*
  aggregate the sum of each state into one hash table
  `higherStateSums` should be the sum of all states with totals greater than 1,000,000
 */
var higherStateSums = null;









/*
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware

  Check if all of these states have a sum of account values
  greater than 2,550,000

  if true set `areStatesInHigherStateSum` to `true`
  otherwise set it to `false`
 */
var areStatesInHigherStateSum = null;









/*
  Stretch Goal && Final Boss

  set `anyStatesInHigherStateSum` to be `true` if
  any of these states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  have a sum of account values greater than 2,550,000
  otherwise set it to be `false`
 */
var anyStatesInHigherStateSum = null;











module.exports = {
  hundredThousandairs : hundredThousandairs,
  datasetWithRoundedDollar : datasetWithRoundedDollar,
  datasetWithRoundedDime : datasetWithRoundedDime,
  sumOfBankBalances : sumOfBankBalances,
  sumOfInterests : sumOfInterests,
  sumOfHighInterests : sumOfHighInterests,
  stateSums : stateSums,
  lowerSumStates : lowerSumStates,
  higherStateSums : higherStateSums,
  areStatesInHigherStateSum : areStatesInHigherStateSum,
  anyStatesInHigherStateSum : anyStatesInHigherStateSum
};
