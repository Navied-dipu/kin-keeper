import Banner from "@/components/Banner";
import FriendCard from "@/components/FriendCard";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  console.log(data);
  return (
    <div className="max-w-5xl mx-auto my-10">
      <Banner></Banner>
      {
        data.map(friend => <FriendCard key={friend.id} friend={friend} />)
      }
    </div>
  );
}
