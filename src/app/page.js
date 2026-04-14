import Banner from "@/components/Banner";
import FriendCard from "@/components/FriendCard";
import FriendCout from "@/components/FriendCout";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  // console.log(data);
  return (
    <div className="max-w-5xl mx-auto my-10 ">
      <Banner></Banner>
      <FriendCout></FriendCout>
      
      <div className="my-10">
        <h2 className="text-2xl font-semibold p-2">Your Friends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {data.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div></div>
    </div>
  );
}
