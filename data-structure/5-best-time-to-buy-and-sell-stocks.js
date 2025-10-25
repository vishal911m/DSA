// Best time to buy and sell stocks
// You are give an array of prices where prices[i] is the price of a given stock on the ith day
// You want to maximise your profit by choosing a single day to buy one stock
// and choosing a different day to sell that stock
// Return the maximum profit, If you cannot achieve any profit, return 0;

// Input: prices = [7, 1, 5, 3, 6, 4]; ----->>>>> Output: 5;
// Input: prices = [7, 6, 4, 3, 1];    ----->>>>> Output: 0;

// // Brute force solution
// function maxProfit(prices){
//   let globalProfit = 0;

//   for(let i=0; i< prices.length-1; i++){
//     for(let j=i+1; j<prices.length; j++){
//       const currentProfit = prices[j] - prices[i];

//       if(currentProfit > globalProfit) globalProfit = currentProfit;
//     }
//   }
//   return globalProfit;
// }

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// // chat gpt solutions for brute force with console.logs
// function maxProfit(prices) {
//   let globalProfit = 0;

//   for (let i = 0; i < prices.length - 1; i++) {
//     console.log(`\nBuy on day ${i} at price ${prices[i]}`);

//     for (let j = i + 1; j < prices.length; j++) {
//       const currentProfit = prices[j] - prices[i];
//       console.log(
//         `   Sell on day ${j} at price ${prices[j]} → Profit = ${prices[j]} - ${prices[i]} = ${currentProfit}`
//       );

//       if (currentProfit > globalProfit) {
//         globalProfit = currentProfit;
//         console.log(`   ✅ New max profit found: ${globalProfit}`);
//       }
//     }
//   }

//   console.log("\nFinal Max Profit:", globalProfit);
//   return globalProfit;
// }

// console.log("Result:", maxProfit([7, 1, 5, 3, 6, 4]));


// // Second approach - Greedy algorithm
// const maxProfit = function(prices){
//   let minStockPurchasePrice = prices[0] || 0;
//   let profit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < minStockPurchasePrice) {
//       minStockPurchasePrice = prices[i]
//     }
    
//     profit = Math.max(profit, prices[i] - minStockPurchasePrice)
//   }

//   return profit
// }

// console.log(maxProfit([7, 1, 5, 3, 6, 4]))


// chatGpt greedy algorithm with console logs
function maxProfitGreedy(prices) {
  let minStockPurchasePrice = prices[0] || 0;
  let profit = 0;

  console.log("Start:");
  console.log("Initial minStockPurchasePrice =", minStockPurchasePrice, "profit =", profit);
  console.log("---------------------------------------------------");

  for (let i = 0; i < prices.length; i++) {
    console.log(`Day ${i} | Price = ${prices[i]}`);

    console.log(`  👉 Before update: minStockPurchasePrice = ${minStockPurchasePrice}`);
    // update min price if today is cheaper
    if (prices[i] < minStockPurchasePrice) {
      minStockPurchasePrice = prices[i];
      console.log(`  🔽 New minimum found! minStockPurchasePrice = ${minStockPurchasePrice}`);
    }
    console.log(`  👉 After update: minStockPurchasePrice = ${minStockPurchasePrice}`);

    // calculate possible profit
    const possibleProfit = prices[i] - minStockPurchasePrice;
    console.log(`  Potential profit if sold today = ${prices[i]} - ${minStockPurchasePrice} = ${possibleProfit}`);

    // update profit if better
    if (possibleProfit > profit) {
      profit = possibleProfit;
      console.log(`  ✅ New max profit updated: ${profit}`);
    }

    console.log("---------------------------------------------------");
  }

  console.log("Final Max Profit =", profit);
  return profit;
}

// maxProfitGreedy([7, 1, 5, 3, 6, 4]);








const maxProfit = function(prices){
  var minStockPurchasePrice = prices[0] || 0;
  var profit = 0;

  console.log("Start");
  console.log(`Minimum stock purchase price: ${minStockPurchasePrice}, profit: ${profit}`);
  console.log("--------------------------------------------------------------");

  for(let i=0; i<prices.length; i++){
    console.log(`Day: ${i}, price: ${prices[i]}`);

    console.log(`Minimum stock purchase price before update: ${minStockPurchasePrice}`);
    if(prices[i] < minStockPurchasePrice){
      minStockPurchasePrice = prices[i];
      console.log(`Found new minimum stock purchase price: ${prices[i]}`)
    }
    console.log(`Minimum stock purchase price after update: ${minStockPurchasePrice}`);

    var possibleProfit = prices[i] - minStockPurchasePrice;
    console.log(`Possible profit if selling stock today: ${prices[i]} - ${minStockPurchasePrice} = ${possibleProfit}`);
    if(possibleProfit > profit){
      profit = possibleProfit;
      console.log(`Max profit achieved so far : ${profit}`)
    }

    console.log("--------------------------------------------------------------");
  }
  
  console.log(`Final profit: ${profit}`)
  return profit;
}

maxProfit([7, 1, 5, 3, 6, 4]);



