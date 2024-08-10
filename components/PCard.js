'use client'
import Image from "next/image";
const PCard = ({ data: { state, district, market, commodity, variety, grade, modal_price } }) => {

    return (
        <>
            <div className="price-card">
                <div className="p-img">
                    <Image className='w-1/2'
                        src="/imgs/demo.jpeg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
                <div className="yo">

                    <p><b>Commodity:</b>{commodity}</p>
                    <p><b>State:</b>{state}</p>
                    <p><b>District:</b>{district}</p>
                    <p><b>Market:</b>{market}</p>
                    <p><b>Variety:</b>{variety}</p>
                    <p><b>Grade:</b>{grade}</p>
                    <p><b>Modal Price:</b>{modal_price}</p>

                </div>


            </div>
        </>
    )
}
export default PCard;