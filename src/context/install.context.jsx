"use client";

import { createContext, useState } from "react";


export const InstallAppsContext = createContext();

const FriendProvider = ({ children }) => {
    const [friends, setFriend] = useState([]);

    const data = {
        friends,
        setFriend,
    };

    return (
        <InstallAppsContext.Provider value={data}>
            {children}
        </InstallAppsContext.Provider>
    );
};

export default FriendProvider;