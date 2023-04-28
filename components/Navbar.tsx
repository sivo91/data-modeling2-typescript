import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
     <nav>
       <div className="menu">
        <Link href={'/arraylevel1'} className='link'>
             <p>Chalanges I</p>
       </Link>
       <Link href={'#'} className='link'>
             <p>Chalanges II</p>
       </Link>
      
       </div>
     </nav>

     <style>{`

     .menu {
      position: relave;
      width: 300px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
 
     }

     nav {
        position: fixed;
        width: 98%;
        left: 1%;
        top: 6px;
        height: 55px;
        
        background: #0b1142;
        border: 1px solid white;
        border-radius: 6px;
        z-index: 500;
        box-shadow: 1px 1px 11px gray;
       }

      
       .link {
        text-decoration: none;
        color: white;
        position: relative;
        padding-top: 12px;
        margin-left: 15px;
       }
       .link:hover {
        transition: all .4s;
        color: #ababab;
       }
       .active-link {
        color: white;
       }
      
     `}</style>
    </>
  )
}

export default Navbar