"use client";

import { createContext, useState } from "react";


export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
    const [friends, setFriends] = useState([]);

    const data = {
        friends,
        setFriends,
    };

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;