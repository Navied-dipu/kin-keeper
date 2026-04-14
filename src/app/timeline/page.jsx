'use client'
import { useContext, useState, useMemo } from 'react';
import TimelineCard from '@/components/TimelineCard';
import { FriendContext } from '@/context/install.context';

const TimeLinePage = () => {
    const { friends } = useContext(FriendContext);

    const [methodFilter, setMethodFilter] = useState("all");
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("newest");

    // ✅ ALL FILTERS TOGETHER
    const filteredFriends = useMemo(() => {
        return friends
            // 🔍 method filter
            .filter((item) => {
                if (methodFilter === "all") return true;
                return item.method === methodFilter;
            })

            // 🔍 search filter
            .filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            )

            // 📅 sort by date
            .sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);

                return sortOrder === "newest"
                    ? dateB - dateA
                    : dateA - dateB;
            });
    }, [friends, methodFilter, search, sortOrder]);

    return (
        <div className='w-full mt-10 mb-10 px-4'>
            <div className="max-w-7xl mx-auto">

                <div className='max-w-5xl mx-auto'>


                    <input
                        type="text max-w-2xl mx-auto"
                        placeholder="Search by name..."
                        className="input input-bordered w-full mb-4"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />


                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

                        <h2 className="text-xl font-bold">
                            Timeline ({filteredFriends.length})
                        </h2>

                        <div className="w-full md:w-1/3 relative z-50">
                            <select
                                className="select select-bordered w-full"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                            </select>
                        </div>

                    </div>


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