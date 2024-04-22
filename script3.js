const params = new URLSearchParams(window.location.search);
        const coinId = params.get('id');
        const key = 'coinranking9d8a426e2a31d48df9124786231a4feba669f1d8bd3f7ed6'
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'coinranking9d8a426e2a31d48df9124786231a4feba669f1d8bd3f7ed6',
            },
        };



        const leftBox = document.getElementById('left');
        const rightBox = document.getElementById('right');
        let coinsData;
        async function getData() {
            let res = await fetch(`https://api.coinranking.com/v2/coin/${coinId}`, options);
            let data = await res.json();
            coinsData = data;
            showData(data);
            // console.log(data);
        }

        getData();
        function showData(datata) {
            leftBox.innerHTML = `
             <span class="min-[800px]:absolute top-5 right-5"><img id="logo" src='${datata.data.coin.iconUrl}' alt="" class="h-[60px] bg-white"></span>

             <p id="crypto-symbol" class="text-[14px] min-[250px]:text-[17px] min-[300px]:text-[20px] min-[900px]:text-[25px] font-semibold "><span class="max-[600px]:block">Symbol : </span>${datata.data.coin.symbol}</p> 

        <p id="crypto-name" class=" text-[14px] min-[250px]:text-[17px] min-[300px]:text-[20px] min-[900px]:text-[25px] font-semibold "><span class="max-[600px]:block">Name : </span>${datata.data.coin.name}</p>

        <p id="crypto-rank"  class="text-[14px] min-[250px]:text-[17px] min-[300px]:text-[20px] min-[900px]:text-[25px] font-semibold"><span class="max-[600px]:block">Current rank : </span>${datata.data.coin.rank}</p>

        <p id="crypto-price"  class="text-[14px] min-[250px]:text-[17px] min-[300px]:text-[20px] min-[900px]:text-[25px] font-semibold"><span class="max-[600px]:block">Current Price : </span>${datata.data.coin.price}</p>
        
        <p id="crypto-capital"  class="text-[14px] min-[250px]:text-[17px] min-[300px]:text-[20px] min-[900px]:text-[25px] font-semibold"><span class="max-[600px]:block">Market cap : </span>${datata.data.coin.marketCap}</p>
             `;





            rightBox.innerHTML = `
             <h2 class="underline underline-offset-[5px] text-[20px] min-[300px]:text-[25px] min-[900px]:text-[28px] font-bold mb-[7px]">About bitcoin :-</h2>
        <p id="coin-description" class="text-[15px] min-[300px]:text-[17px] min-[300px]:text-[20px] min-[900px]:text-[25px] font-semibold">${datata.data.coin.description}</p>
             `;
        }