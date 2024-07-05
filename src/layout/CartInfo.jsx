import React from 'react'
import Container from './Container'

const CartInfo = ({title ,descrive,className }) => {
  return (
    <>
    <Container>
    <section className=''>
     <div className='w-full mt-24'>
    <h1 className={` text-[#262626] font-dm w-[126px] h-[36px] font-bold text-2xl ${className}`}>{title}</h1>
    <p className={` w-[506px] h-[150px] text-[#767676] leading-loose ${className}`}>{ descrive}</p>
    </div>
    </section>
    </Container>
    </>
  )
}

export default CartInfo