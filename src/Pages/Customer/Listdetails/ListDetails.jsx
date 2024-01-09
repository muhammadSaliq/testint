import React, { useEffect, useState } from 'react';
import './listdetails.css';
import { Table } from 'flowbite-react';
import { Accordion } from 'flowbite-react';
import Navbars from '../../../Components/Header/Navbar/Navbar';
import Footers from '../../../Components/Footer/Footers';
import { Card } from 'flowbite-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ListDetails = () => {
  const { id } = useParams();
  const [singleproduct, setsingleproduct] = useState([]);
  const [views, setviews] = useState();
const navigate = useNavigate()
const [image1 , setimage1] = useState(true);
const [image2 , setimage2] = useState(false);
const [image3 , setimage3] = useState(false);
const [image4 , setimage4] = useState(false);
const [image5 , setimage5] = useState(false);
const [image6 , setimage6] = useState(false);

  const divStyle = {
    backgroundImage: "url('https://www.osimo.com.tr/assets/images/media-bg.jpg')",
    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',

    width: '800px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle2 = {
    display: 'flex',
    flexDirection: 'column',

    width: '500px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle3 = {
    display: 'flex',
    flexDirection: 'column',

    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const imageStyle = {
    width: '790px',
    height: '450px',
    marginBottom: '16px',
  };
  const imageStyle2 = {
    width: '110px',
    height: '100px',
    marginBottom: '16px',
  };
  const buttonStyle = {
    //background: '#62CE0E',
    background: '#E5A317',
    color: 'black',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    marginTop: '12px',
    cursor: 'pointer',
  };
  const txtclr = {
    color: 'rgb(147 51 234)',

  };

  const fetchSingleProduct = async() => {
    const response = await axios.get(`https://list-back-gn1y.vercel.app/singlelist/${id}`);
    console.log("response: ", response);
  console.log(singleproduct);
  setsingleproduct(response.data.Product);
        }

        const fetchviews = async() => {
          const response = await axios.get(`https://list-back-gn1y.vercel.app/productviews/${id}`);
          console.log("response: ", response);
        console.log(singleproduct);
        setviews(response.data.views);
              }
        useEffect (()=> {
            fetchSingleProduct()

        },[]);


  return (
    <>
    <Navbars/>
    <div className='flex  mx-5 flex-wrap my-6 ' >
      <div style={containerStyle} className='overflow-hidden'>
        {image1 && (<>
          <img src={singleproduct.imageUrl1} alt="carimg" className='img1size hover:scale-125 transition duration-500 cursor-pointer object-cover' />

        </>)}
        {image2 && (<>
          <img src={singleproduct.imageUrl2} alt="carimg" className='img1size hover:scale-125 transition duration-500 cursor-pointer object-cover' />

        </>)}
        {image3 && (<>
          <img src={singleproduct.imageUrl3} alt="carimg" className='img1size hover:scale-125 transition duration-500 cursor-pointer object-cover' />

        </>)}
        {image4 && (<>
          <img src={singleproduct.imageUrl4} alt="carimg" className='img1size hover:scale-125 transition duration-500 cursor-pointer object-cover' />

        </>)}
        {image5 && (<>
          <img src={singleproduct.imageUrl5} alt="carimg" className='img1size hover:scale-125 transition duration-500 cursor-pointer object-cover' />

        </>)}
        {image6 && (<>
          <img src={singleproduct.imageUrl6} alt="carimg" className='img1size hover:scale-125 transition duration-500 cursor-pointer object-cover' />

        </>)}

        <div className='flex  mx-5 flex-wrap ' >
      <div style={containerStyle3}>
       <span> 
        {singleproduct.imageUrl1 && (
        <>
        <span onClick={() => {setimage1(true); setimage2(false); setimage3(false); setimage4(false); setimage5(false); setimage6(false)}}> <img src={singleproduct.imageUrl1} alt="carimg" style={imageStyle2} className='inline ml-2'/></span>

        </>
       )}
       {singleproduct.imageUrl2 && (
        <>
       <span onClick={() => {setimage1(false); setimage2(true); setimage3(false); setimage4(false); setimage5(false); setimage6(false)}}><img src={singleproduct.imageUrl2} alt="carimg" style={imageStyle2} className='inline ml-2'/></span>

        </>
       )}
       {singleproduct.imageUrl3 && (
        <>
       <span onClick={() => {setimage1(false); setimage2(false); setimage3(true); setimage4(false); setimage5(false); setimage6(false)}}> <img src={singleproduct.imageUrl3} alt="carimg" style={imageStyle2} className='inline ml-2'/></span>

        </>
       )}
       {singleproduct.imageUrl4 && (
        <>
       <span onClick={() => {setimage1(false); setimage2(false); setimage3(false); setimage4(true); setimage5(false); setimage6(false)}}> <img src={singleproduct.imageUrl4} alt="carimg" style={imageStyle2} className='inline ml-2'/></span>

        </>
       )}
       {singleproduct.imageUrl5 && (
        <>
       <span onClick={() => {setimage1(false); setimage2(false); setimage3(false); setimage4(false); setimage5(true); setimage6(false)}}>   <img src={singleproduct.imageUrl5} alt="carimg" style={imageStyle2} className='inline ml-2'/></span>

        </>
       )}
       {singleproduct.imageUrl6 && (
        <>
               <span onClick={() => {setimage1(false); setimage2(false); setimage3(false); setimage4(false); setimage5(false); setimage6(true)}}><img src={singleproduct.imageUrl6} alt="carimg" style={imageStyle2} className='inline ml-2'/></span>

        </>
       )}

      </span>

      </div>
      </div>
      </div>
      
      <div style={containerStyle2} className='ml-2'>
        <h1 className='text-3xl font-bold' style={txtclr}>{singleproduct.productname}</h1>
        <div className=' mt-4 text-right'>
        <span className=' text-2xl font-bold  ' style={txtclr}>Price:</span> 
        <span className='ml-2 text-2xl font-bold'>Rs. {singleproduct.price}</span> 
        
      </div>
      <Card className="max-w-sm mt-8" horizontal>
        <span className=' '>
        <span className='inline '>
        <img src="https://cdn-icons-png.flaticon.com/512/2716/2716238.png" alt="img" className='w-20 h-20 inline'/>
        </span>
        <span className='inline  '>
      <h5 className="text-2xl inline font-bold ml-8 text-gray-900 ">
      {singleproduct.listername}
      </h5>
      </span>
      </span>
    </Card>
      <div className="overflow-x-auto mt-5">
      <Table className='bg-white '>

        <Table.Body className="divide-y">
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>
            Whatsapp Number
            </Table.Cell>
            <Table.Cell className='text-black'>{singleproduct.whatsapp}</Table.Cell>
 
     
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>
            Mobile Number
            </Table.Cell>
            <Table.Cell className='text-black'>{singleproduct.mobile}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>
            Location
            </Table.Cell>
            <Table.Cell className='text-black'>{singleproduct.location}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
   <Link to={`https://wa.me/+92${singleproduct.whatsapp}`} target='_blank'>
 <button className='btnstyle w-full' >
    <img src="https://www.iconarchive.com/download/i83640/pelfusion/long-shadow-media/Contact.ico" className="mr-3 inline h-7 " alt="Flowbite React Logo" />
      Contact Owner</button>
      </Link>
      </div>

    </div>
    <div className='mx-4'>
    <h1 className='text-3xl text-bold mb-10 uppercase' style={txtclr}>{singleproduct.productname}</h1>
          <p className="mb-2 text-black ">
          {singleproduct.description}
          </p>
          </div>

    <Footers/>
    </>
  );
}

export default ListDetails;
