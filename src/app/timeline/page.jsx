'use client'
import TimelineCard from '@/components/TimelineCard';
import { FriendContext } from '@/context/install.context';
import { useContext } from 'react';


const TimeLinePage = () => {
    const { friends, setFriend } = useContext(FriendContext);

    return (
        <div className=' max-w-7xl mx-auto mt-10 mb-10'>
            <h2 className="text-xl font-bold mb-5">
                Timeline ({friends.length})
            </h2>
            <div className='space-y-5 '>
                {
                    friends.map((item, ind) => <TimelineCard key={ind} item={item}></TimelineCard>)
                }
            </div>
        </div>
    );
};

export default TimeLinePage;