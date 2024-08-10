import Header from '../header.jsx';
import Image from 'next/image'
import Card from '../Card.js';



 const News=()=>{
    return(
        <>
        <div className="main">

        <Header/>
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