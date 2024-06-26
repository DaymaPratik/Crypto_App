
        const key='coinranking9d8a426e2a31d48df9124786231a4feba669f1d8bd3f7ed6'
        const options = {
         headers: {
           'Content-Type': 'application/json',
           'x-access-token': 'coinranking9d8a426e2a31d48df9124786231a4feba669f1d8bd3f7ed6',
         },
    };

        const cryptoTable=document.querySelector('#crypto-table');
        const page2Search=document.querySelector('#page2-search');
        const page2Searchbtn=document.querySelector('#page2-search-btn');
        let topCoinsContainer=document.querySelector('#top-coins-conatiner');
        
        
        let coinsData;




        //ASYNC FUNCTION TO GET ALL DATA
        async function getData(){
            let res=await fetch('https://api.coinranking.com/v2/coins ',options);
            let data=await res.json();
            coinsData=data;//storing all data in this variable to use it on showing flitered results
            showData(data);
            // console.log(data);
           
        }
        getData();
        
        //FUNCTION TO SHOW ALL DATA
        function showData(datata){
            cryptoTable.innerHTML=`
            <tr class="border-2 border-white text-center ">
                <th class=" border-2 border-white  min-[1000px]:p-[15px] min-[1000px]:text-[20px] 
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]">Rank</th>
                <th class=" border-2 border-white  min-[1000px]:p-[15px] min-[1000px]:text-[20px] 
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]">Symbol</th>
                <th class=" border-2 border-white  min-[1000px]:p-[15px] min-[1000px]:text-[20px] 
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]  ">Image</th>
                <th class=" border-2 border-white  min-[1000px]:p-[15px] min-[1000px]:text-[20px] 
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]">Name</th>
                <th class=" border-2 border-white  min-[1000px]:p-[15px] min-[1000px]:text-[20px] 
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]">Price</th>
                <th class=" border-2 border-white  min-[1000px]:p-[15px] min-[1000px]:text-[20px] 
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]">More Info</th>
            </tr>
            `;
            datata.data.coins.forEach(item => { /*applying for each to coins array present in data obj,present in datata obj this is the major diff in showDataFilter method */
            // console.log(item);
                const cryptoRow=document.createElement('tr');
                cryptoTable.appendChild(cryptoRow);
               
                
                cryptoRow.className="border-2 border-white text-center"
                cryptoRow.innerHTML=`
                <td class="border-2 border-white font-bold
                min-[1000px]:p-[15px] min-[1000px]:text-[20px] 
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]
                ">
                ${item.rank}</td> 
                <td class="border-2 border-white font-bold
                min-[1000px]:p-[15px] min-[1000px]:text-[20px] 
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]">
                ${item.symbol}</td>
                <td class="border-2 border-white 
                min-[1000px]:p-[15px] min-[1000px]:text-[20px]">
                <img src="${item.iconUrl}" alt="" class="crypto-icon mx-auto bg-white" >
                </td> 
                <td class="border-2 border-white
                min-[1000px]:p-[15px] min-[1000px]:text-[20px] font-semibold
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]">
                ${item.name}</td>
                <td class="border-2 border-white 
                min-[1000px]:p-[15px] min-[1000px]:text-[20px] font-semibold
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]">
                ${item.price}</td> 
                <td class="border-2 border-white 
                min-[1000px]:p-[15px] min-[1000px]:text-[20px] font-semibold
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px] hover:text-black hover:bg-white transtition duration-300 ease-in"><a href="./coins2.html?id=${item.uuid}">Get Data</a></td>
            
                
                `
                
            });
        }



        //FUNCTION TO SHOW FILTERED DATA ON THE BASIS OF INPUT
        function showDataFiltered(datata){
            cryptoTable.innerHTML=`
            <tr class="border-2 border-white text-center ">
                <th class=" border-2 border-white  min-[1000px]:p-[15px] min-[1000px]:text-[20px] 
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]">Rank</th>
                <th class=" border-2 border-white  min-[1000px]:p-[15px] min-[1000px]:text-[20px] 
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]">Symbol</th>
                <th class=" border-2 border-white  min-[1000px]:p-[15px] min-[1000px]:text-[20px] 
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]  ">Image</th>
                <th class=" border-2 border-white  min-[1000px]:p-[15px] min-[1000px]:text-[20px] 
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]">Name</th>
                <th class=" border-2 border-white  min-[1000px]:p-[15px] min-[1000px]:text-[20px] 
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]">Price</th>
                <th class=" border-2 border-white  min-[1000px]:p-[15px] min-[1000px]:text-[20px] 
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]">More Info</th>
            </tr>
            `;
            datata.forEach(item => {     //as in this method only array is passed not an complete object so no need to write object name as in previous showData method
                // console.log(item);
                const cryptoRow=document.createElement('tr');
                cryptoTable.appendChild(cryptoRow);
                cryptoRow.className="border-2 border-black  text-center"
                cryptoRow.innerHTML=`
                <td class="border-2 border-white font-bold
                min-[1000px]:p-[15px] min-[1000px]:text-[20px] 
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]
                ">
                ${item.rank}</td> 
                <td class="border-2 border-white font-bold
                min-[1000px]:p-[15px] min-[1000px]:text-[20px] 
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]">
                ${item.symbol}</td>
                <td class="border-2 border-white 
                min-[1000px]:p-[15px] min-[1000px]:text-[20px]">
                <img src="${item.iconUrl}" alt="" class="crypto-icon mx-auto bg-white" >
                </td> 
                <td class="border-2 border-white
                min-[1000px]:p-[15px] min-[1000px]:text-[20px] font-semibold
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]">
                ${item.name}</td>
                <td class="border-2 border-white 
                min-[1000px]:p-[15px] min-[1000px]:text-[20px] font-semibold
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px]">
                ${item.price}</td> 
                <td class="border-2 border-white 
                min-[1000px]:p-[15px] min-[1000px]:text-[20px] font-semibold
                min-[700px]:text-[15px] min-[700px]:p-[10px] max-[500px]:text-[10px] hover:text-black hover:bg-white transtition duration-300 ease-in"><a href="./coins2.html?id=${item.uuid}">Get Data</a></td>
    
                `
                
            });
        }
        
        

        //ADDING AN EVENT TO THE SEARCH BUTTON SO THAT WE CAN GET SEARCHED OUTPUT
        page2Searchbtn.addEventListener('click',(e)=>{
            e.preventDefault();
            let searchedTerm=page2Search.value;
            if(searchedTerm !== ''){      
                // console.log(coinsData);        //if serach intput present call filtered method  
                let fitleredCoins=filterCoins(searchedTerm,coinsData);//variable to store an array to show filtered array
                showDataFiltered(fitleredCoins);  //pass filtered array to method to show data

            }else{                                 /*If no serach input the it will call showData method 
                                                     to show all the data*/ 
                
                showData(coinsData);
           }
            
            
        })
        function filterCoins(input,datas){//returning filtered array
            // console.log(datas);
            return datas.data.coins.filter(coin => coin.name.toLowerCase().includes(input.toLowerCase()))
        }
     




   
