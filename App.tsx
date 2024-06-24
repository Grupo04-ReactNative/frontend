import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from './Pages/Start';
import Form from './Pages/Form';
import { Routes } from './Routes';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <>
    <UserProvider>
        <Routes/>
    </UserProvider>
    </>
   
  )
}

