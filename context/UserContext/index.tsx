import { Context, createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ContextProps {
    children: React.ReactNode
}

interface UserContextType {
    username: string;
    updateUsername: (newUsername: string) => Promise<void>;
    userMonth: string;
    updateUserMonth: (newUserMonth: string) => Promise<void>;
}

const defaultUserContext: UserContextType = {
    username: '',
    updateUsername: async () => {},
    userMonth:'',
    updateUserMonth: async () => {},
}


export const UserContext = createContext(defaultUserContext);

export const UserProvider = ({children} : ContextProps) => {

    const [username, setUsername] = useState<string>('');
    const [userMonth, setUserMonth] = useState<string>('');

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

    const fetchUserMonth = async () => {
      try {
        const storedUserMonth = await AsyncStorage.getItem('userMonth');
        if (storedUserMonth) {
          setUserMonth(storedUserMonth);
        }
      } catch (error) {
        console.error('Failed to load userMonth:', error);
      }
  };

    useEffect(() => {
        fetchUsername();
        fetchUserMonth();
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

    const updateUserMonth = async (newUserMonth : string) => {
      try {
        await AsyncStorage.setItem('userMonth', newUserMonth);
        setUserMonth(newUserMonth);
        console.log('Setting userMonth!');
      } catch (error) {
        console.error('Failed to save userMonth:', error);
      }
  };

    return <UserContext.Provider
            value={{ username, updateUsername, userMonth, updateUserMonth }}
        >
        {children}

    </UserContext.Provider>
}