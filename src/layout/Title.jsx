import React from 'react'

const Title = ({title,className}) => {
  return (
    <div className={`font-dm font-bold text-[40px] text-[#3b3333] capitalize ${className}`}>{title}</div>
  )
}

export default Title