'use client'

import { FriendContext } from '@/context/install.context'
import { useContext } from 'react'

export default function ContanctCard({ friend }) {
    const { friends, setFriend } = useContext(FriendContext);
    console.log(friends)
    const handleFriend = (method) => {
        setFriend((prev) => [
            ...prev,
            {
                id: friend.id, method,
                name: friend.name,
                date: new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })
            }
        ]);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">

            <button onClick={() => handleFriend("call")}>
                <div className="card shadow-sm">
                    <div className="card-body flex flex-col items-center text-center">
                        <h2 className="text-xl">📞</h2>
                        <h2 className="text-sm md:text-lg font-semibold">Call</h2>
                    </div>
                </div>
            </button>

            <button onClick={() => handleFriend("text")}>
                <div className="card shadow-sm">
                    <div className="card-body flex flex-col items-center text-center">
                        <h2 className="text-xl">💬</h2>
                        <h2 className="text-sm md:text-lg font-semibold">Text</h2>
                    </div>
                </div>
            </button>

            <button onClick={() => handleFriend("video")}>
                <div className="card shadow-sm">
                    <div className="card-body flex flex-col items-center text-center">
                        <h2 className="text-xl">🎥</h2>
                        <h2 className="text-sm md:text-lg font-semibold">Video</h2>
                    </div>
                </div>
            </button>

        </div>
    );
}