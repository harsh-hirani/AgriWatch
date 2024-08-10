import Image from 'next/image'
import Link from 'next/link';
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
        <li> <Link href="/">Home</Link></li>
        <li><Link href="/cropprice">See prices</Link></li>
        <li><Link href="/news">News</Link></li>
        <li><Link href="">Help</Link></li>
      </ul>
      </div>
    </div>
        </>
    )

}
export default Header;