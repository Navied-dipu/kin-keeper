import Image from 'next/image'
import React from 'react'

export default function Navber() {
    const links= <>
    <li><a>Link</a></li>
    <li><a>Link</a></li>
    <li><a>Link</a></li>
    </>
    return (
        <div>
            <div className="navbar max-w-6xl mx-auto bg-white text-black ">
                <div className="flex-1">
                    <Image src="/assets/logo.png" alt="Logo" width={100} height={80}  />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                     {links}
                    </ul>
                </div>
            </div>
        </div>
    )
}
