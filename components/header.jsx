import Image from 'next/image'
import "./pages/App.css"

const Header=()=>{
    return(
        <>
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
        <li> <a href="/">Home</a></li>
        <li><a href="/cropprice">See prices</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/">Help</a></li>
      </ul>
      </div>
    </div>
        </>
    )

}
export default Header;