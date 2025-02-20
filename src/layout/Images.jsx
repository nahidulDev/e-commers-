import React from 'react'

const Images = ({className, src,alt,imgClassName}) => {
  return (
    <>
         <div className={`${className}`}>
         <picture>
         <img src={src} alt={alt} loading='lazy' className={ ` ${imgClassName}`} />
         </picture>
         </div>
    </>
  )
}

export default Images