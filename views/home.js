import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Homedetails from './homedetails';
import Acount from './acount';
import Login from './login';
import Signup from './signup';
import Forgotpassword from './forgotpassword';
const Stack = createStackNavigator();

export default function Home() {
    return (
      <Stack.Navigator initialRouteName='Acount' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Acount" component={Acount} />
      <Stack.Screen name="Home Detail" component={Homedetails} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
    </Stack.Navigator>
    );
  }
  