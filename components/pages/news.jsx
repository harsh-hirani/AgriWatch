'use client'

import Header from '../header.jsx';
import Image from 'next/image'
import Card from '../Card.js';
import "./App.css"
import news from './news.json'
import { useEffect } from 'react';


 const News=()=>{
    useEffect(()=>{
        console.log(news)
    })
    return(
        <>
        <div className="main">

       <div className="news">
        {news.map((item)=>(
            <Card title={item.title} desc={item.desc} imgSrc={item.img_url} url={item.url}/>
        ))}
   
       </div>
        </div>
        </>
    )
}
export default News