import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from "@react-native-material/core";

export default function Signup() {
    return (
      <View>
        <Text>
          Get Started! Create a subscription to meet and meet up with locals just like us! Already have an account? Login Here! 
        </Text>
        <TextInput label="Name" style={{margin: 16 }} />
        <TextInput label="Username" style={{ margin: 16 }} />
        <TextInput label="Password" style={{ margin: 16 }} />
        <Button title="Login" style={styles.button} color="primary" />
      </View>
    );
  }
  

  const styles = StyleSheet.create({
    button: {
      width: "100%"
    }})