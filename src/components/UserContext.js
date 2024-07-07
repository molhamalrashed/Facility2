import React, { createContext, useState } from 'react';
import {getUsersData} from '../DummyData.js';

export const UsersContext = createContext();
const usersData = getUsersData();

export const UsersProvider = ({ children }) => {
    const [data, setData] = useState(usersData);

    const addUser = (newUser) => {
        setData((prevData) => [...prevData, newUser]);
    };

    return (
        <UsersContext.Provider value={{ data, addUser }}>
            {children}
        </UsersContext.Provider>
    );
};
