"use client";

import InstalledAppsProvider from "@/Context/install.context";
import React from "react";

const Providers = ({ children }) => {
  return <InstalledAppsProvider>{children}</InstalledAppsProvider>;
};

export default Providers;