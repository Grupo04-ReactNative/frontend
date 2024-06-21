import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../../Pages/Settings';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { HomeStackRoutes } from '../HomeStackRoutes';
import AntDesign from '@expo/vector-icons/AntDesign';


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
          tabBarIcon: ({ color }) => <AntDesign name="infocirlceo" size={24} color={color} />,
        }
      }
      
      name="Info" 
      
      component={Settings} />
    </Tab.Navigator>
  );
}
