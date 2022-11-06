import React from 'react';
import "../style/Crypto.css";

const Chart = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  cryptopriceChange
}) => {
  return (
    <>
      <div className='coin-container'>
        <div className='coin-row' style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          height: "55px",
          borderBottom: "1.5px solid #d8d8d8",
        }} >
          <div className='coin'>
            <img src={image} alt='crypto' />
            <h1>{name}</h1>
            <p className='coin-symbol'>{symbol}</p>
          </div>
          <div className='coin-data'>
            <p className='coin-price'>₹{price}</p>
            <p className='coin-volume'>₹{volume}</p>

            {priceChange < 0 ? (
              <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
            ) : (
              <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
            )}

            <p className='coin-marketcap'>
              Mkt Cap: ₹{marketcap}
            </p>

            {cryptopriceChange < 0 ? (
              <p className='coin-percent red'>{cryptopriceChange.toFixed(2)}%</p>
            ) : (
              <p className='coin-percent green'>{cryptopriceChange.toFixed(2)}%</p>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;