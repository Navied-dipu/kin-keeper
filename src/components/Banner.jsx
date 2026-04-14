import React from 'react'

export default function Banner() {
    return (
        <div className='text-center space-y-6'>
            <h2 className='text-6xl font-bold'>Friends to keep close in your life</h2>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
                <button className='bg-[#244d3f] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#1a3a2d]'>+ Add a Friend</button>
        </div>
    )
}
