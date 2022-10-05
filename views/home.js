import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Homedetails from './homedetails';
import Register from './register';
import Login from './login';
import Signup from './signup';
import Forgotpassword from './forgotpassword';
import Account from './account';
const Stack = createStackNavigator();

export default function Home() {
    return (
      <Stack.Navigator initialRouteName='Account' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home Detail" component={Homedetails} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
    </Stack.Navigator>
    );
  }
  