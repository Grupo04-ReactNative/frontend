import { Context, createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ContextProps {
    children: React.ReactNode
}

interface UserContextType {
    username: string;
    updateUsername: (newUsername: string) => Promise<void>;
}

const defaultUserContext: UserContextType = {
    username: '',
    updateUsername: async () => {},
};

export const UserContext = createContext(defaultUserContext);

export const UserProvider = ({children} : ContextProps) => {

    const [username, setUsername] = useState<string>('');

    const fetchUsername = async () => {
        try {
          const storedUsername = await AsyncStorage.getItem('username');
          if (storedUsername) {
            setUsername(storedUsername);
          }
        } catch (error) {
          console.error('Failed to load username:', error);
        }
    };

    useEffect(() => {
        fetchUsername();
    }, [])

    const updateUsername = async (newUsername : string) => {
        try {
          await AsyncStorage.setItem('username', newUsername);
          setUsername(newUsername);
          console.log('Setting username!');
        } catch (error) {
          console.error('Failed to save username:', error);
        }
    };

    return <UserContext.Provider
            value={{ username, updateUsername }}
        >
        {children}

    </UserContext.Provider>
}