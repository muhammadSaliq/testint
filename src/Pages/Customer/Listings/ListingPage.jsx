import React from 'react'
import { useEffect } from 'react'
import ListingHeader from '../../../Components/Body/Listingcomponents/Listingheader/ListingHeader'
import ListingProduct from '../../../Components/Body/Listingcomponents/Listingproducts/ListingProduct'
import Navbars from '../../../Components/Header/Navbar/Navbar'
import Footers from '../../../Components/Footer/Footers'
import SearchBar from '../../../Components/Body/Listingcomponents/Searchbar/SearchBar'

const ListingPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (

   <>
   <Navbars/>
   <ListingHeader/>
   <SearchBar/>
   <ListingProduct/>
   <Footers/>
   </>

  )
}

export default ListingPage