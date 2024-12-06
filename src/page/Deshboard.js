import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header/header';
import TabsComponent from '../components/Deshboard/Tabs';
import axios from 'axios';

function DeshboardPage() {

const [coins, setCoins] = useState([]);

  useEffect(() => {
    // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    //  .then(response => response.json())
    //  .then(data => setCoins(data))
    //  .catch(error => console.error('Error:', error));

    axios
     .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
     .then(response => {
        console.log("RESPONSE>>>",response);
        setCoins(response.data);
     })
     .catch(error => {
       console.log("ERROR",error);
     });
  }, []);
  return (
    <div>
        <Header />
        <TabsComponent coins = {coins}/>
    </div>
  )
}

export default DeshboardPage;