'use client'

import { useRef } from 'react';
import Head from 'next/head';
import './App.css'
import { useEffect } from 'react';
import Image from 'next/image'

function Index({ser}) {

  const loader1Ref = useRef(null);
  const loader2Ref = useRef(null);
  const loader3Ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (loader1Ref.current) {
        loader1Ref.current.style.top = "-100%";
      }
    }, 500);

    setTimeout(() => {
      if (loader2Ref.current) {
        loader2Ref.current.style.top = "-100%";
      }
    }, 1000);

    setTimeout(() => {
      if (loader3Ref.current) {
        loader3Ref.current.style.top = "-100%";
      }
    }, 1500);
    let p = ser(52);
    p.then(d=>console.log(d))

    console.log("hi");
  }, []);

  return (
    <>
    <Head>
        <script src="/js/home.js"></script>
    </Head>
    
    <div className="loader1" ref={loader1Ref} style={{color:"white"}}>Empower</div>
    <div className="loader2" ref={loader2Ref} style={{color:"white"}}>Inform</div>
    <div className="loader3" ref={loader3Ref} style={{color:"white"}}>Connect</div>
  <div className="main">
    <div className='header'>
      <div className="title_and_logo">
      <Image
      src="/imgs/logo.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
        <div className="writing">
          <h2>Agro</h2>
          <h2>Watch</h2>
        </div>
      </div>
      <div className="options">

      <ul>
        <li> <a href="">Home</a></li>
        <li><a href="">See prices</a></li>
        <li><a href="">News</a></li>
        <li><a href="">Help</a></li>
      </ul>
      </div>
    </div>
    <div className="hero">
      <div className="three_title">
        <h1>Grow &nbsp; &nbsp;</h1>
        <h1>Guide &nbsp; &nbsp; </h1>
        <h1>Price &nbsp;</h1>
      </div>
    </div>
  </div>
    </>
  )
}

export default Index
