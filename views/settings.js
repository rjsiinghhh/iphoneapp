import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { ListItem, Avatar, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = ({navigation}) => (
  <>
  <View style={styles.avatarContainer}>
  <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} 
  label="Yaman KATBY" size={45} />
  <Text style={styles.email}>email address</Text>
  </View>
    <ListItem
      title="Profile"
      trailing={props => <Icon name="chevron-right" {...props} />}
    />
    <ListItem
      title="Help Center"
      trailing={props => <Icon name="chevron-right" {...props} />}
    />
    <ListItem
      title="Privacy & Consent"
      trailing={props => <Icon name="chevron-right" {...props} />}
    />
        <Button style={styles.button} title="Log Out"  onPress={()=> {
          AsyncStorage.removeItem('user', ()=> {
            navigation.navigate('Login')
          })
        }}/>

  </>
);

const styles = StyleSheet.create({
    button: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 24
    },
    avatarContainer: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 24,
        marginBottom: 24,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    email: {
        marginLeft: 16,

    }
})

export default Settings;