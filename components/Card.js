// components/ImageCard.js
import Image from 'next/image';

export default function Card({ title, description, imgSrc }) {
  return (
   <>


            <div className="newscard">
            <Image className='w-1/2'
      src="/imgs/demo.jpeg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
                <h2 className="newcard_title">Agriculture Title</h2>
                <p className='newcard_detail'>
                Agriculture forms the backbone of many economies, providing sustenance and livelihood to millions.ture forms the backbone of many economies, providing sustenance and livelihood to millions.ture forms the backbone of many economies, providing sustenance and livelihood to millions.ture forms the backbone of many economies,</p>
            </div>
       

   </>
  );
}
