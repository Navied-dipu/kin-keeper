"use client";

import FriendProvider from "@/context/install.context";
// import InstalledAppsProvider from "@/Context/install.context";
import React from "react";

const Providers = ({ children }) => {
  return <FriendProvider>{children}</FriendProvider>;
};

export default Providers;