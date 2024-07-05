import React from 'react'
import Container from '../layout/Container'
import Flex from '../layout/Flex'
import Images from '../layout/Images'
import banner1 from "../assets/banner1.png"
import banner2 from "../assets/banner2.png"
import banner3 from "../assets/banner3.png"
const Photos = () => {
  return (
  <>
  <Container>
  <section className="w-full">
  <Flex className={" gap-x-8"}>

  <div className='p-8'>
      <Images src={banner1}/>
  </div>
   <div className="p-8 ">
    <Images src={banner3} className={"mb-8"} />
    <Images src={banner2}/>
   </div>
  </Flex>
  </section>
  </Container>
  </>
  )
}

export default Photos