import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './views/home';
import Meetups from './views/meetups';
import Messanger from './views/messanger';
import Assistance from './views/assistance';
import Acount from './views/acount';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Meetups" component={Meetups}/>
        <Tab.Screen name="Messanger" component={Messanger}/>
        <Tab.Screen name="Resources" component={Assistance}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}


