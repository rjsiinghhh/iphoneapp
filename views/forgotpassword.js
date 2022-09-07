import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from '@react-native-material/core';

export default function Forgotpassword() {
    return (
      <View>
        <Text>
            Enter the email address or phone number associated with your account and we'll send you a link to reset your password. 
        </Text>
        <TextInput label="Email/Phone Number" style={{margin: 16 }} />
        <Text> Continuing screen to send validation to email or phone. Next screen will create new password then go back to login page</Text>
      </View>
    );
  }
  