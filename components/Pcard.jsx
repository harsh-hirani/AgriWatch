'use client'
import Image from "next/image";
const Pcard = ({ data: { state, district, market, commodity, variety, grade, modal_price } }) => {

    return (
        <>
            <div className="relative flex flex-row mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div className="relative w-1/3 h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-l-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img
                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                        alt="card-image"
                        className="object-cover h-full w-full"
                    />
                </div>
                <div className="flex flex-col p-6 w-2/3">
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        UI/UX Review Check
                    </h5>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        The place is close to Barceloneta Beach and bus stop just 2 min by walk
                        and near to "Naviglio" where you can enjoy the main night life in
                        Barcelona.
                    </p>
                    
                </div>
            </div>
        </>
    )
}
export default Pcard;