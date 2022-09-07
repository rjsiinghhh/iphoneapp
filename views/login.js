import { View } from 'react-native';
import { TextInput, Button } from "@react-native-material/core";


export default function Login() {
    return (
      <View>
        <TextInput label="Username" style={{ margin: 16 }} />
        <TextInput label="Password" style={{ margin: 16 }} />
        <Button title="Login" color="primary" />
      </View>
    );
  }
  