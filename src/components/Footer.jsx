import React from 'react'
import { FaSquareFacebook, FaSquareInstagram, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
    return (
        <footer className="bg-[#244d3f] text-white px-6 py-10">
            
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">

                {/* Title */}
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
                    KeenKeeper
                </h2>

                {/* Description */}
                <p className='max-w-xl text-sm sm:text-base'>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                {/* Social */}
                <div className="flex flex-col items-center gap-3">
                    <p className="font-medium">Social Links</p>

                    <div className="flex gap-4">
                        {[FaSquareInstagram, FaSquareFacebook, FaXTwitter].map((Icon, i) => (
                            <div key={i} className='bg-white p-2 rounded-full hover:scale-110 transition'>
                                <Icon className='text-black text-xl' />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom section */}
                <div className='w-full border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm'>

                    <p className='text-center md:text-left'>
                        © {new Date().getFullYear()} - All rights reserved by KeenKeeper
                    </p>

                    <div className='flex gap-4'>
                        <p className='hover:underline cursor-pointer'>Privacy Policy</p>
                        <p className='hover:underline cursor-pointer'>Terms of Service</p>
                    </div>

                </div>

            </div>
        </footer>
    )
}