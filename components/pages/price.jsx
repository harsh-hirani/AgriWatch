'use client'
import { useEffect, useRef, useState } from "react";
import PCard from "../PCard"
import SearchComponent from "../searchcomponent"
import data from '../statedict.json';
const Price = () => {
    const d = [{
        "state": "Goa",// drop
        "district": "North Goa",
        "market": "Mapusa",
        "commodity": "Brinjal",// search
        "variety": "Brinjal",
        "grade": "FAQ",
        "modal_price": "5200" // consider range
    }]
    const states = [
        'Andhra Pradesh',    'Bihar',
        'Chandigarh',        'Chattisgarh',
        'Goa',               'Gujarat',
        'Haryana',           'Himachal Pradesh',
        'Jammu and Kashmir', 'Karnataka',
        'Kerala',            'Madhya Pradesh',
        'Maharashtra',       'Manipur',
        'Meghalaya',         'Nagaland',
        'NCT of Delhi',      'Odisha',
        'Punjab',            'Rajasthan',
        'Tamil Nadu',        'Telangana',
        'Tripura',           'Uttar Pradesh',
        'Uttrakhand',        'West Bengal',
        'Pondicherry'
      ]
    const [state, setState] = useState('Andhra Pradesh');
    const [search,setsearch]=useState("");
    const [districts, setDistricts] = useState([]);
    const [district, setDistrict] = useState([]);
    const hl=useRef();
      useEffect(()=>{
        setDistricts(data[state])
      },[state])
      function print(){
        console.log(search);
        console.log(state);
        console.log(district);
        console.log(hl.current.value);
        
        
      }
    return (
        <>
            <div className="main">
                <div className="price">
                    <div className="line">
                        <input type="text" className='search' value={search} onChange={(e)=>{setsearch(e.target.value);}} placeholder='enter crops' />
                        <select name="price" ref={hl} id="price-dropdown">
                            <option value="-1">High to Low </option>
                            <option value="1">Low to High </option>
                        </select>
                        <select name="state" id="state-dropdown" onInput={(e)=>setState(e.target.value)}>
                            {states.map(e => {
                                return <option value={e} key={e}>{e}</option>
                            })}

                        </select>
                        <select name="disctrict" id="state-dropdown2" onInput={(e)=>setDistrict(e.target.value)}>
                            {districts.map(e => {
                                return <option value={e} key={e}>{e}</option>
                            })}

                        </select>


                        <button className="search-btn" onClick={print}>Search</button>
                    </div>
                </div>
                <div className="p-card-box">

                    {d.map((d, i) => {

                        return (
                            <>
                                <PCard data={d} key={i} />
                                <PCard data={d} key={i} />
                                <PCard data={d} key={i} />
                                <PCard data={d} key={i} />
                             
                            </>
                        )

                    })}
                </div>
            </div>
        </>
    )
}
export default Price