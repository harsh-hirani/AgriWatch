import Header from '../header.jsx';
import Image from 'next/image'
import Card from '../Card.js';
import "./App.css"


 const News=()=>{
    return(
        <>
        <div className="main">

       <div className="news">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
       </div>
        </div>
        </>
    )
}
export default News