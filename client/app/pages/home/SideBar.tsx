import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div>
        {/* <classID></classID>
        <classID></classID> */}
        <button><Link href="/result">
            <a>Home</a>
        </Link ></button>
        
    </div>
  )
}

export default SideBar