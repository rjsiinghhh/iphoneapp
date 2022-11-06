import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Homecontent from './homecontent';
import Register from './register';
import Login from './login';
import Signup from './signup';
import Forgotpassword from './forgotpassword';
import Account from './account';
import Settings from './settings';
const Stack = createStackNavigator();

export default function Home() {
    return (
      <Stack.Navigator screenOptions={{headerShown:true}} initialRouteName='Home' >
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" options={{headerShown: false}} component={Homecontent} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Account" options={{headerShown: true}} component={Account} />
      <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
    );
  }
  