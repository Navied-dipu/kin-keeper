import React from 'react'

export default function FriendCout() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            <div className="card  shadow-sm">
                <div className="card-body flex flex-col justify-center items-center">
                    <h2 className="card-title text-6xl text-[#244d3f]">10</h2>
                    <h2 className="text-lg font-semibold">Total Friend</h2>

                </div>
            </div>
            <div className="card  shadow-sm">
                <div className="card-body flex flex-col justify-center items-center">
                    <h2 className="card-title text-6xl text-[#244d3f]">3</h2>
                    <h2 className="text-lg font-semibold">On Track</h2>

                </div>
            </div>
            <div className="card  shadow-sm">
                <div className="card-body flex flex-col justify-center items-center">
                    <h2 className="card-title text-6xl text-[#244d3f]">6</h2>
                    <h2 className="text-lg font-semibold">Need Attention</h2>

                </div>
            </div>
            <div className="card  shadow-sm">
                <div className="card-body flex flex-col justify-center items-center">
                    <h2 className="card-title text-6xl text-[#244d3f]">12</h2>
                    <h2 className="text-lg font-semibold">Interection This Month</h2>

                </div>
            </div>
        
        </div>
    )
}
