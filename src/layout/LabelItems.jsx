import React from 'react'


const LabelItems = ({labelName,className,forName,id ,name,type ,placeholder,InputClassName,value}) => {
  return (
   <>

    <form>
      <div className='w-[508px] h-[68px] mt-16 '>
       <label className={`text-xl font-bold  font-dm ${className}`} for={forName}>{labelName}</label>
        <input  className={`block w-[780px] h-[50px] text-xl text-[#767676]  outline-none ${InputClassName} `} id={id} type={type} name={name}placeholder={placeholder} value={value}/>
      </div>
    </form>
 
   </>
  )
}

export default LabelItems