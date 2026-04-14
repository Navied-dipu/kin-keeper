"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImStatsDots } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";

export default function Navber() {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`flex items-center gap-2 font-semibold ${
            pathname === "/" ? "bg-[#244d3f] text-white rounded" : ""
          }`}
        >
          <IoHomeOutline /> Home
        </Link>
      </li>

      <li>
        <Link
          href="/timeline"
          className={`flex items-center gap-2 font-semibold ${
            pathname === "/timeline"
              ? "bg-[#244d3f] text-white rounded"
              : ""
          }`}
        >
          <RiTimeLine /> Timeline
        </Link>
      </li>

      <li>
        <Link
          href="/stats"
          className={`flex items-center gap-2 font-semibold  ${
            pathname === "/stats"
              ? "bg-[#244d3f] text-white rounded"
              : ""
          }`}
        >
          <ImStatsDots /> Stats
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar px-15  bg-white shadow-xl text-black">
        <div className="flex-1">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={100}
              height={80}
            />
          </Link>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
}