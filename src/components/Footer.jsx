import React from 'react'
import { FaSquareFacebook, FaSquareInstagram, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
    return (
        <div><footer className="footer footer-horizontal footer-center bg-[#244d3f] text-white  rounded p-10">
            <h2 className='text-5xl font-bold'>KeenKeeper</h2>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

            <nav>
                <p>Social Links</p>
                <div className="grid grid-flow-col gap-4">
                    <div className='bg-white p-2 rounded-full'>
                        <a className='text-black text-xl'>
                            <FaSquareInstagram />
                        </a>
                    </div>
                    <div className='bg-white p-2 rounded-full'>
                        <a className='text-black text-xl'>
                            <FaSquareFacebook />
                        </a>
                    </div>
                    <div className='bg-white p-2 rounded-full'>
                        <a className='text-black text-xl'>
                           <FaXTwitter />
                        </a>
                    </div>
                   
                </div>
            </nav>
            <div className='flex justify-between items-center w-4xl'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by KeenKeeper</p>
                <div className='flex gap-4'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </footer></div>
    )
}
