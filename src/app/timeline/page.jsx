'use client'
import { useContext, useState, useMemo } from 'react';
import TimelineCard from '@/components/TimelineCard';
import { FriendContext } from '@/context/install.context';

const TimeLinePage = () => {
    const { friends } = useContext(FriendContext);

    const [methodFilter, setMethodFilter] = useState("all");
    const [search, setSearch] = useState("");


    const filteredFriends = useMemo(() => {
        return friends

            .filter((item) => {
                if (methodFilter === "all") return true;
                return item.method === methodFilter;
            })


            .filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            )


    }, [friends, methodFilter, search]);

    return (
        <div className='w-full mt-10 mb-10 px-4'>
            <div className="max-w-7xl mx-auto">

                <div className='max-w-5xl mx-auto'>


                    <input
                        type="text"
                        placeholder="Search by name..."
                        className="input input-bordered w-full mb-4"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

                        <h2 className="text-xl font-bold">
                            Timeline ({filteredFriends.length})
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">


                            <select
                                className="select select-bordered w-full sm:w-40"
                                value={methodFilter}
                                onChange={(e) => setMethodFilter(e.target.value)}
                            >
                                <option value="all">All</option>
                                <option value="text">Text</option>
                                <option value="call">Call</option>
                                <option value="video">Video</option>
                            </select>



                        </div>
                    </div>

                    {/* 📋 Timeline List */}
                    <div className='space-y-5 w-full'>
                        {filteredFriends.map((item, ind) => (
                            <TimelineCard key={ind} item={item} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TimeLinePage;