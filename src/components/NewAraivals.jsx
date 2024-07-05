import React from 'react'
import Container from '../layout/Container'
import Title from '../layout/Title'
import Product from '../layout/Product'
import Img1 from "../assets/img1.png"
import Img2 from "../assets/img2.png"
import Img3 from "../assets/img3.png"
import Img4 from "../assets/img4.png"
import Flex from '../layout/Flex'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css" 
import {FaArrowCircleLeft,FaArrowCircleRight} from "react-icons/fa"
function SampleNextArrow(props) {
  const { style =style, onClick } = props;
  return  <span style={{ ...style }}onClick={onClick} className='text-white bg bg-gray-500 w-16 rounded-full h-16 text-center !flex  !justify-center !items-center text-2xl cursor-pointer absolute top-[50%] translate-x-[-50%] translate-y-[-50%] right-4' >< FaArrowCircleLeft/></span>  
}

function SamplePrevArrow(props) {
  const {  style, onClick } = props;7
  return <span style={{ ...style }}onClick={onClick} className='text-white bg-gray-500 w-16 rounded-full h-16 text-center !flex  !justify-center !items-center text-2xl cursor-pointer absolute top-[50%] z-10  translate-x-[-50%] translate-y-[-50%] left-8'> <FaArrowCircleRight/></span>
}
const NewAraivals = () => {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
       nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
  return (
  <>
  <section className="mb-32 w-full ">
  <Container>
  <Title title={"New Arrivals"}/>
 
     <Slider {...settings}>
    
     <div>
      <Product 
  className={"w-[24%]"}
   productImg={Img1} 
  productTitle={"basics crew neck tee"}
   productPrice={"$44.00"} 
  labelShow={true} label={"10%"}
  labelShow1={false}/>
     </div>
    <div>
     <Product 
  className={"w-[24%]"}
   productImg={Img2} 
  productTitle={"basics crew neck tee"}
   productPrice={"$44.00"} 
  labelShow={true} label={"new"}
  labelShow1={true}/>
    </div>

   <div>
   <Product 
  className={"w-[24%]"}
   productImg={Img3} 
  productTitle={"basics crew neck tee"}
   productPrice={"$44.00"} 
  labelShow={true} label={"10%"}
  labelShow1={true}/>
   </div>
   <div>
    <Product 
  className={"w-[24%]"}
   productImg={Img4} 
  productTitle={"basics crew neck tee"}
   productPrice={"$44.00"} 
  labelShow={true} label={"new"}
  labelShow1={true}/>
   </div>
   <div>
    <Product 
  className={"w-[24%]"}
   productImg={Img4} 
  productTitle={"basics crew neck tee"}
   productPrice={"$44.00"} 
  labelShow={true} label={"new"}
  labelShow1={true}/>
   </div>
     </Slider>
  
   
  </Container>
  </section>
  </>
  )
}

export default NewAraivals