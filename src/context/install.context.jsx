"use client";

import { createContext, useState } from "react";


export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
    const [friends, setFriend] = useState([]);

    const data = {
        friends,
        setFriend,
    };

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;