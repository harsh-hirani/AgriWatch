// components/ImageCard.js
import Image from 'next/image';

export default function Card({ title, description, imgSrc }) {
  return (
   <>



<div class="max-w-sm h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
    <Image
      src="/imgs/demo.jpeg"
      width={100}
      height={100}
      alt="Picture of the author"
    />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
       
    </div>
</div>



   </>
  );
}
