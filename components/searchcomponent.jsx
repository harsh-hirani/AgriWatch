'use client'
import React, { useState } from 'react';
import { useForm } from "react-hook-form"
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
const SearchComponent = () => {
    return(
        <>
       <div className="line">
        <input type="text" className='search' placeholder='enter crops' />
        <select name="price" id="price-dropdown">
        <option value="hightolow">High to Low </option>
        <option value="lowtohigh">Low to High </option>
       </select>
        <select name="state" id="state-dropdown">
        {states.map(e=>{
            return <option value={e} key={e}>{e}</option>
        })}
        
               </select>


    <button className="search-btn">Search</button>
       </div>

        </>
    )
};

export default SearchComponent;
