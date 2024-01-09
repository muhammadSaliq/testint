import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logomain from '../../../Assets/logomains.png'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Navbars = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState()
  const [password, setPassword] = useState()

  const [openDialog, setOpenDialog] = useState(false);
  let [customeruser, setcustomeruser] = useState(false);
  let [customerresponse, setcustomerresponse] = useState("");
  let [customerbring, setcustomerbring] = useState(false);


  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };



  return (
    <div>
      
      <Navbar fluid rounded className='bg-black'>
      <Navbar.Brand href="">
        <img src={logomain} className="mr-3 h-6 sm:h-20" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">

      {customeruser ? (<>
    
        </>) : <>
        <button  onClick={handleDialogOpen} className='stylebtn rounded-2xl text-xl border-4 border-t-violet-500 border-e-teal-700 border-s-amber-500 border-b-red-500'>Sell</button>
        <Dialog open={openDialog} onClose={handleDialogClose}  >
        <DialogTitle>Sign in to our platform</DialogTitle>
        <DialogContent>
          <DialogContentText>
    <div className="space-y-6">
        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
            <input type="email" onChange={(event) => { setemail(event.target.value); }} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " placeholder="name@company.com" required/>
        </div>
        <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
            <input type="password" onChange={(event) => { setPassword(event.target.value); }} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " required/>
        </div>
  {/*     <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                </div>
                <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div>
  */}
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <Link to={"/register"}> <span  className="text-blue-700 hover:underline dark:text-blue-500">Create account</span> </Link>
        </div>
    </div>

          </DialogContentText>
        </DialogContent>

      </Dialog>
        </>}

        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to={"/"}>
        <Navbar.Link className='text-lg divhead text-white'> 
          Home
        </Navbar.Link>
        </Link>
        <Link to={"/listings"}>
        <Navbar.Link  className='text-lg divhead text-white'> Listings</Navbar.Link> </Link>

       <Link to={"/pricing"}>
        <Navbar.Link className='text-lg divhead text-white'> Pricing</Navbar.Link></Link>
        <Link to={"/aboutus"}>
        <Navbar.Link className='text-lg divhead text-white'> About Us</Navbar.Link>
        </Link>
        <Link to={"/contact"}>
        <Navbar.Link className='text-lg divhead text-white'> Contact</Navbar.Link> </Link>

      </Navbar.Collapse>
    </Navbar>
</div>
  )
}

export default Navbars