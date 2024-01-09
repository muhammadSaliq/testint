import React, { useState } from 'react';
import { useEffect } from 'react';
import './searchbar.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'flowbite-react';
const SearchBar = () => {
  const navigate = useNavigate();
    const [location, setlocation] = useState("")
    const [productname, setproductname] = useState("")
    const [ price, setprice] = useState('')


  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: '280px', // Adjust the width as needed
  };
  const containerStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: '320px', // Adjust the width as needed
  };
  
  return (
    <>
    <div className=' flex justify-evenly mb-6'>
    <div className='maindiv flex  justify-evenly  flex-wrap bg-black w-5/6 pt-5' >
              <div style={containerStyle}>
              <select id="country" onChange={(event) => { setlocation(event.target.value);}}  name='country' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Location</option>
        <option value="Karachi">Karachi</option>
        <option value="Lahore">Lahore</option>
        <option value="Islamabad">Islamabad</option>
        <option value="Multan">Multan</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Quetta">Quetta</option>
        <option value="Gawadar">Gawadar</option>

</select>

      </div>
      <div style={containerStyle}>
        <span className='text-left text-white'>Price PKR 0 - {price}</span>
        <Box sx={{ width: 300 }}>
      <Slider onChange={(event) => { setprice(event.target.value); }}
        aria-label="Price"
        defaultValue={30}
        valueLabelDisplay="auto"
        step={1000}
        marks
        min={0}
        max={100000}
      />
    </Box>
      </div>
      
      <div className="flex items-center">   
    <label for="voice-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" onChange={(event) => { setproductname(event.target.value);}} id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " placeholder="Search Listing" required/>

    </div>
    <button  className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-violet-500 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search</button>
</div>


      </div>  

    </div>
    <div className='flex  justify-center flex-wrap my-4' >


            </div>
    </>
  );
}

export default SearchBar;
