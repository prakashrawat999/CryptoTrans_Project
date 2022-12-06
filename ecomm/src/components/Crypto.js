import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../style/Cryptochart.css";
import Chart from './Coin';
import Scrollbars from 'react-custom-scrollbars-2';
import Typewriter from 'typewriter-effect';
import Navigationbar from './Navigationbar';
import Footermain from './Footermain';

function Crypto() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navigationbar />
      <h1 className='coin-head'>

        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to Crypto Market ₿")
              .pauseFor(800)
              .deleteAll()
              .typeString("Here you can check crypto data such as ⬇")
              .pauseFor(300)
              .deleteAll()
              .typeString("live Prices, Trading Volume, Exchange volume 💹")
              .pauseFor(900)
              .deleteAll()
              .start();
          }}

          options={{ autoStart: true, loop: true }}
        />

      </h1>
      
      <p className='coin-line' />
      <br></br>
        <br></br>
        <br></br>
        <br></br>
      <div className='coin-app'>
        <Scrollbars style={{ width: 1100, height: 320 }}>
          {filteredCoins.map(coin => {
            return (
              <Chart
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.total_volume}
                volume={coin.market_cap}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
                cryptopriceChange={coin.market_cap_change_percentage_24h}
              />
            );
          })}
        </Scrollbars>
        <div className='coin-search'>
          <form>
            <input
              className='btn btn-outline-dark btn-lg'
              type='text'
              onClick={handleChange}
              placeholder='Search a Currency'
            />
          </form>
        </div>
      </div>
      <Footermain />
    </>
  );
}

export default Crypto;