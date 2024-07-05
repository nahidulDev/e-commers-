import React from 'react'
import Navbar from '../components/Navbar'
import NavHader from '../components/NavHader';
import Banner from '../components/Banner';
import Icons from '../components/Icons';
import Photos from '../components/Photos';
import NewAraivals from "../components/NewAraivals";
import NewArrivals2 from '../components/NewArrivals2';
import Phone from '../components/Phone';
import NewArrivals3 from '../components/NewArrivals3';
import Orebi from '../components/Orebi';

const Home = () => {
  return (
  <>
   
  <Banner/>
   <Icons/>
   <Photos/>
   <NewAraivals/>
   <NewArrivals2/>
   <Phone/>
   <NewArrivals3/>
  
  </>
  )
}

export default Home;