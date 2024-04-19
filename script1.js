

const key='coinranking9d8a426e2a31d48df9124786231a4feba669f1d8bd3f7ed6'
        const options = {
         headers: {
           'Content-Type': 'application/json',
           'x-access-token': 'coinranking9d8a426e2a31d48df9124786231a4feba669f1d8bd3f7ed6',
         },
    };




let topCoinsContainer=document.querySelector('#top-coins-conatiner');



async function getData(){
    let res=await fetch('https://api.coinranking.com/v2/coins ',options);
    let data=await res.json();
    coinsData=data;
   showTop6(data);
   
}
getData();

function showTop6(datata){
    // console.log(datata);    stores complete object
    let top6=datata.data.coins;
    // console.log(top6);    stores complete array
    for(let i=0;i<=9;i++){
        
       let topCoinChild=document.createElement('div');
       topCoinsContainer.appendChild(topCoinChild);
       topCoinChild.className='border-2 border-black text-start relative p-[20px] bg-black text-white opacity-80 rounded-[15px] hover:scale-[102%] min-[230px]:hover:scale-[105%] transition ease-in duration-300 shadow-[0px_0px_30px_5px_black]'
        topCoinChild.innerHTML=`
        <p class='font-semibold max-[280px]:text-[12px] min-[768px]:text-[20px]'><span class='font-bold'>RANK:</span>${top6[i].rank}</p>
        <p class='font-semibold max-[280px]:text-[12px] min-[768px]:text-[20px]'><span class='font-bold'>SYMBOL:</span>${top6[i].symbol}</p>
        <img src="${top6[i].iconUrl}" alt=""  class='absolute top-[30%] right-[10px] max-[225px]:w-[25px] max-[350px]:w-[40px] max-[550px]:w-[70px] w-[40px] min-[700px]:w-[70px] bg-white'>
        <p class='font-semibold max-[280px]:text-[12px] min-[768px]:text-[20px]'><span class='font-bold'>NAME:</span>${top6[i].name}</p>
        <p class='font-semibold max-[280px]:text-[12px] min-[768px]:text-[20px]'><span class='font-bold'>PRICE:</span>${top6[i].price}</p>
        `
    }
}

























































































































































































// // Function to filter coins based on search term
// function filterCoins(coins, searchTerm) {
//     return coins.filter(coin => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
// }

// // Example: Filter coins based on search term
// const searchInput = document.getElementById('search-input'); // Assuming you have an input field with id 'search-input'
// const searchButton = document.getElementById('search-button'); // Assuming you have a button with id 'search-button'
// const coinListElement = document.getElementById('coin-list'); // Assuming you have an element to display the filtered coins with id 'coin-list'

// let coinsData; // Variable to store the fetched coins data

// // Fetch top 50 coins
// getTopCoins(50)
//     .then(data => {
//         coinsData = data;
//         displayCoins(coinsData); // Display the fetched coins on the page
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });

// // Function to display coins on the page
// function displayCoins(coins) {
//     coinListElement.innerHTML = ''; // Clear previous content
//     coins.forEach(coin => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${coin.name} - ${coin.current_price} USD`;
//         coinListElement.appendChild(listItem);
//     });
// }

// // Event listener for search button click
// searchButton.addEventListener('click', () => {
//     const searchTerm = searchInput.value.trim();
//     if (searchTerm !== '') {
//         const filteredCoins = filterCoins(coinsData, searchTerm);
//         displayCoins(filteredCoins);
//     } else {
//         displayCoins(coinsData); // If search term is empty, display all coins
//     }
// });























// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Top 50 Coins</title>
// </head>
// <body>
//     <h1>Top 50 Coins</h1>
//     <ul id="coinList">
//         <!-- Coin links will be generated here -->
//     </ul>

//     <script>
//         // Sample coin data (replace this with your actual data)
//         var coins = [
//             { name: "Bitcoin", symbol: "BTC" },
//             { name: "Ethereum", symbol: "ETH" },
//             // Add more coin data as needed
//         ];

//         // Function to generate dynamic links
//         function generateCoinLinks() {
//             var coinList = document.getElementById("coinList");
//             coins.forEach(function(coin) {
//                 var listItem = document.createElement("li");
//                 var link = document.createElement("a");
//                 link.textContent = coin.name;
//                 link.href = "coin_page.html?symbol=" + coin.symbol; // Example URL structure
//                 listItem.appendChild(link);
//                 coinList.appendChild(listItem);
//             });
//         }

//         // Call the function to generate links
//         generateCoinLinks();
//     </script>
// </body>
// </html>






// //GEMINI AI 
// async function getCoins() {
//     const response = await fetch('https://your-coin-api.com/coins'); // Replace with your API endpoint
//     const coins = await response.json();
//     return coins;
//   }
  
//   async function displayCoins() {
//     const coins = await getCoins();
//     const coinList = document.getElementById('coin-list'); // Replace with your list container ID
  
//     coins.forEach(coin => {
//       const listItem = document.createElement('li');
//       listItem.textContent = coin.name || coin.symbol; // Display coin name or symbol
//       listItem.setAttribute('data-coin-id', coin.id); // Store coin ID in data attribute
//       listItem.addEventListener('click', () => handleCoinClick(coin.id)); // Add event listener
  
//       coinList.appendChild(listItem);
//     });
//   }
  
//   function handleCoinClick(coinId) {
//     window.location.href = `coin-details.html?coinId=${coinId}`; // Redirect with query parameter
//   }
  
//   displayCoins();
  




//   const express = require('express');
// const app = express();

// app.get('/coins/:coinId', async (req, res) => {
//   const coinId = req.params.coinId; // Get coin ID from URL path
//   // Fetch or retrieve details for the specified coin ID
//   // ...

//   res.render('coin-details', { coinDetails }); // Pass details to the details page template
// });

// app.listen(3000, () => console.log('Server listening on port 3000'));
