// components/ImageCard.js
import Image from 'next/image';

export default function Card({ title, desc, imgSrc }) {
  return (
    <>


      <div className="newscard">
        <Image className='w-1/2'
          src={imgSrc}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <h2 className="newcard_title">{title}</h2>
        <p className='newcard_detail'>
          
        {desc}   </p>
        <a href="#" class="news-link inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
          Read their stories
          <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>

      </div>


    </>
  );
}
