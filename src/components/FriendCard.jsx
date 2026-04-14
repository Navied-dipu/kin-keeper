import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function FriendCard({ friend }) {
    const { id, name, picture, days_since_contact, tags, status } = friend;
    return (
        <Link href={`/${id}`}><div className="card bg-base-100  mx-auto  shadow-sm">
            <div className="avatar flex justify-center items-center mt-5">
                <div className="w-24 rounded-full bg-amber-100 p-1">
                    <Image src={picture} alt="profile" width={100} height={100} />
                </div>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{days_since_contact}days</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-sm bg-green-200 uppercase rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                {status === "active" ? (
                    <span className="bg-green-600 text-white font-semibold rounded-full px-2">Active</span>
                ) : status === "on_track" ? (
                    <span className="bg-blue-600 text-white font-semibold rounded-full px-2">On Track</span>
                ) : (
                    <span className="bg-red-600 text-white font-semibold rounded-full px-2">Overdue</span>
                )}
            </div>
        </div></Link>
    )
}
