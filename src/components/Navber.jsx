"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImStatsDots } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";

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
          className={`flex items-center gap-2 mx-1 font-semibold ${
            pathname === "/timeline" ? "bg-[#244d3f] text-white rounded" : ""
          }`}
        >
          <RiTimeLine /> Timeline
        </Link>
      </li>

      <li>
        <Link
          href="/stats"
          className={`flex items-center gap-2 font-semibold ${
            pathname === "/stats" ? "bg-[#244d3f] text-white rounded" : ""
          }`}
        >
          <ImStatsDots /> Stats
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white shadow-xl px-4 md:px-10">
      {/* Left side - logo */}
      <div className="flex-1">
        <Link href="/">
          <Image src="/assets/logo.png" alt="Logo" width={100} height={80} />
        </Link>
      </div>

      {/* Mobile menu */}
      <div className="flex-none md:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <HiMenu size={24} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {links}
          </ul>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex flex-none">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
}