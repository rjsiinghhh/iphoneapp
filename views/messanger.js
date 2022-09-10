import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Friendlist from './friendlist';
import Message from './message';
const Stack = createStackNavigator();

export default function Home() {
    return (
      <Stack.Navigator initialRouteName='Friendlist' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Friendlist" component={Friendlist} />
      <Stack.Screen name="Message" component={Message} />
    </Stack.Navigator>
    );
  }
  