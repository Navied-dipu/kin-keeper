
import ContactCard from "@/components/ContactCard";
import { friends } from "@/data";
import Image from "next/image";



const FriendDetails = async ({ params }) => {
    const { id } = await params;
    
   
   
    const friend = friends?.find(
        (item) => Number(item.id) === Number(id)
    );
    console.log(friend)
    if (!friend) {
        return <h2>Friend not found</h2>;
    }

    const {
        name,
        picture,
        days_since_contact,
        status,
        email,
        next_due_date,
    } = friend;

    return (
        <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 p-3 md:p-6">

                {/* LEFT PROFILE CARD */}
                <div className="card bg-base-100 shadow-xl p-4 md:p-5">
                    <div className="flex flex-col items-center text-center">
                        <div className="avatar">
                            <div className="w-16 md:w-20 rounded-full">
                                <Image src={picture} alt={name} width={80} height={80} />
                            </div>
                        </div>

                        <h2 className="mt-3 font-bold text-base md:text-lg">{name}</h2>

                        {status === "active" ? (
                            <span className="bg-green-600 text-white text-xs md:text-sm font-semibold rounded-full px-2 py-1 mt-1">
                                Active
                            </span>
                        ) : status === "on_track" ? (
                            <span className="bg-blue-600 text-white text-xs md:text-sm font-semibold rounded-full px-2 py-1 mt-1">
                                On Track
                            </span>
                        ) : (
                            <span className="bg-red-600 text-white text-xs md:text-sm font-semibold rounded-full px-2 py-1 mt-1">
                                Overdue
                            </span>
                        )}

                        <p className="text-xs text-gray-500 mt-3">
                            Former colleague, great mentor
                        </p>
                        <p className="text-[10px] md:text-xs text-gray-400 break-all">
                            {email}
                        </p>
                    </div>

                    <div className="divider"></div>

                    <div className="space-y-2">
                        <button className="btn btn-sm w-full">💬 Snooze 2 Weeks</button>
                        <button className="btn btn-sm w-full">📁 Archive</button>
                        <button className="btn btn-sm text-red-600 w-full">🗑 Delete</button>
                    </div>
                </div>

                {/* MIDDLE SECTION */}
                <div className="lg:col-span-2 space-y-4 md:space-y-6">

                    {/* STATS */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">

                        <div className="card shadow-sm">
                            <div className="card-body flex flex-col items-center text-center">
                                <h2 className="text-3xl md:text-5xl font-bold text-[#244d3f]">
                                    {days_since_contact}
                                </h2>
                                <h2 className="text-sm md:text-lg font-semibold">
                                    Days since connect
                                </h2>
                            </div>
                        </div>

                        <div className="card shadow-sm">
                            <div className="card-body flex flex-col items-center text-center">
                                <h2 className="text-3xl md:text-5xl font-bold text-[#244d3f]">
                                    30
                                </h2>
                                <h2 className="text-sm md:text-lg font-semibold">
                                    Goal (Days)
                                </h2>
                            </div>
                        </div>

                        <div className="card shadow-sm">
                            <div className="card-body flex flex-col items-center text-center">
                                <h2 className="text-base md:text-2xl font-bold text-[#244d3f] ">
                                    {new Date(next_due_date).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </h2>
                                <h2 className="text-sm md:text-lg font-semibold">
                                    Next Due
                                </h2>
                            </div>
                        </div>

                    </div>


                    <div className="card bg-base-100 shadow p-4 md:p-5">
                        <div className="flex justify-between items-center">
                            <h2 className="font-semibold text-xl text-[#244d3f]">
                                Relationship Goal
                            </h2>
                            <button className="btn btn-xs btn-outline">Edit</button>
                        </div>


                        <p className="text-xs md:text-sm text-gray-500 mt-2">
                            Connect every <span className="font-bold">30 days</span>
                        </p>
                    </div>


                    <div className="card bg-base-100 shadow p-4 md:p-5">
                        <h2 className="font-semibold mb-3 md:mb-4 text-xl text-[#244d3f]">
                            Quick Check-In
                        </h2>

                        <ContactCard friend={friend}></ContactCard>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default FriendDetails;