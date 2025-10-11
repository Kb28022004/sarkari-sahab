import Image from 'next/image'
import React from 'react'
import BannerImage from '../../public/Banner.svg'
import Link from 'next/link'

const Banner = () => {
  return (
    <Link style={{display:"flex", alignItems:"center", justifyContent: "center"}} href={"#"}>
        <Image src={BannerImage} alt='Banner Image'/>
    </Link>
  )
}

export default Banner