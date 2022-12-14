import { View, Text, StyleSheet } from 'react-native';
import { Button, Stack, Box, Flex } from '@react-native-material/core';
import Forgotpassword from './forgotpassword';
import Login from './login';
import Signup from './signup';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({ navigation }) {
  return (

    <Flex fill center>
      <Flex fill center style={styles.stack}>
        <Button title="Login" style={styles.button} color="primary" onPress={() => navigation.navigate('Login')} />
        <Button title="Sign Up" style={styles.button} color="secondary" onPress={() => navigation.navigate('Signup')} />
        <Button variant="outlined" title="Forgot Password" style={styles.button} onPress={() => navigation.navigate('Forgotpassword')} />
      </Flex>
      <Box>
        <Button variant="text" title="Continue Anonymously" style={styles.button} onPress={() => {
          const userData = {
            id: 'anonymous'
          }
          AsyncStorage.setItem('user', JSON.stringify(userData)).then(() => {
            navigation.navigate('Home')
          })
        }} />
      </Box>
    </Flex>


  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%"
  },
  stack: {
    margin: 60,
    width: "50%"
  }
})
