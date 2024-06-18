import { createStackNavigator } from '@react-navigation/stack';
import Start from '../../Pages/Start';
import Form from '../../Pages/Form';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import Result from '../../Pages/Result';

export type StackParamList = {
    Start: undefined,
    Form: undefined,
    Result: undefined
}

export type StackProps = NativeStackScreenProps<StackParamList>;

const Stack = createStackNavigator<StackParamList>();

export function HomeStackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            options={{ headerShown: false }}
            name="Start" 
            component={Start} />
            <Stack.Screen 
             options={{ headerShown: false }}
            name="Form" 
            component={Form} />
             <Stack.Screen 
             options={{ headerShown: false }}
            name="Result" 
            component={Result} />
        </Stack.Navigator>
    )
}