import React, { useEffect, useState } from 'react'
import axios from "axios";
import '../style/cryptonews.css'
import Footermain from './Footermain'
import Navigationbar from './Navigationbar'


export default function News() {

    const [page,setPage]=useState(2)
    const [response,setResponse]=useState(null)
  useEffect(()=>
  { const options = {
    method: 'GET',
    url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news',
    params: {pair_ID: '1057391', page: page, time_utc_offset: '28800', lang_ID: '1'},
    headers: {
      'X-RapidAPI-Key': '03b2e25484mshd626797722011d9p1571b1jsn9b952e6e9db1',
      'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (resp) {
      console.log(resp.data);
      setResponse(resp.data.data[0].screen_data.news)
      setPage(page+1)
  }).catch(function (error) {
      console.error(error);
  }); },[]);

  const getNews=()=>{
    const options = {
      method: 'GET',
      url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news',
      params: {pair_ID: '1057391', page: page, time_utc_offset: '28800', lang_ID: '1'},
      headers: {
        'X-RapidAPI-Key': '03b2e25484mshd626797722011d9p1571b1jsn9b952e6e9db1',
        'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (resp) {
        console.log(resp.data);
        setResponse(resp.data.data[0].screen_data.news)
        setPage(page+1)
    }).catch(function (error) {
        console.error(error);
    });

  }

  return (
    <>
    <Navigationbar />
         <div class="main_news my-28">
        <ul class="card_newss">
          {response && response.map(news=>{
            return (
              <li class="card_newss_item">
              <div class="card_news">
                <div class="card_news_image"><img alt='unable to display img' className='cryptonewsimg' src={news.related_image_big}></img></div>
                <div class="card_news_content">
                  <p class="card_news_text">{news.HEADLINE}</p>
                  <a key={news.news_ID} href={news.news_link ? news.news_link : news.third_party_url}><button class="btn_news card_news__news">Know more</button> </a>
                </div>
              </div>
            </li>
            );
          })}
        </ul>
      </div>
      <div className='text-center m-20 text-purple-900 p-3  font-bold text-2xl'>
      {response && (
        <button className='cursor-pointer rounded' onClick={()=> getNews()}> Next page ➡️ </button>
      )}
      </div>
      <Footermain />
    </>

  )
}

