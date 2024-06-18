import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Start from '../../Pages/Start';
import Settings from '../../Pages/Settings';
import { Image } from "react-native";
import logo from '../../assets/pokematch-logo.png';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { HomeStackRoutes } from '../HomeStackRoutes';

export function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const Tab = createBottomTabNavigator();

export function BottomTabRoutes() {
  return (
    <Tab.Navigator
    screenOptions={
      {
        headerShown: false,
        tabBarStyle: { backgroundColor: "#EEC122", paddingBottom: 2},
        tabBarActiveTintColor: '#2403EC',
        tabBarInactiveTintColor: '#FFF'
      }
    }
    >
      <Tab.Screen 
      options={
        {
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }
      }
      name="Home" 
      component={HomeStackRoutes} 
      />
      <Tab.Screen 

      options={
        {
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
        }
      }
      
      name="Settings" 
      
      component={Settings} />
    </Tab.Navigator>
  );
}
