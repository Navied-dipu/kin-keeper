"use client";

import { useContext, useMemo, useState, useEffect } from "react"; // Added useState, useEffect
import { FriendContext } from "@/context/install.context";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";

const StatPage = () => {
  const { friends } = useContext(FriendContext);
  const [isMounted, setIsMounted] = useState(false);

  // Triggered only on the client after the first render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const data = useMemo(() => {
    // ... (your existing data logic is fine)
    const count = { text: 0, call: 0, video: 0 };
    friends?.forEach((f) => {
      if (f.method === "text") count.text++;
      else if (f.method === "call") count.call++;
      else if (f.method === "video") count.video++;
    });

    return [
      { name: "Text", value: count.text, fill: "#7e35e1" },
      { name: "Call", value: count.call, fill: "#244d3f" },
      { name: "Video", value: count.video, fill: "#37a163" },
    ];
  }, [friends]);

  // If we are on the server, return a placeholder or null 
  // This prevents the ResponsiveContainer from breaking the build
  if (!isMounted) {
    return <div className="w-full h-[350px] animate-pulse bg-gray-100 rounded-xl" />;
  }

  return (
    <div className="w-full max-w-3xl mx-auto my-10">
      <h2 className="text-4xl font-bold px-2 py-2">Friendship Analytic</h2>
      <div className="p-6 bg-base-200 rounded-xl shadow">
        <h2 className="text-2xl text-[#244d3f] mb-6">By Interaction type</h2>

        <div className="w-full h-[350px]">
          <ResponsiveContainer width="100%" height="100%"> 
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={5}
                cornerRadius={10}
                isAnimationActive={true}
              />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatPage;