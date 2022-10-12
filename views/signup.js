import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Button, Alert } from "@react-native-material/core";
import { fireDB } from "../firebase.js"
import { useEffect, useState } from 'react';
import CryptoJS from 'crypto-js';
const salt= '53453453';

const dbRef = fireDB.collection('users')

export default function Signup({navigation}) {
  const [fdata, setFdata] = useState({});

  const onSubmit = () => {
    const hash= CryptoJS.HmacSHA1(fdata.password, salt).toString()
      if (hash) {
        dbRef.add({...fdata,password:hash})
        .then(res=> {
          console.log(res.id)
          const userData = {
            id: res.id, 
            username: res.username,
            email: res.email
          }
          AsyncStorage.setItem('user', JSON.stringify(userData))
          .then(()=> {
            console.log('Home')
            navigation.popToTop()
          })
          .catch(err=> {
            console.error(error)
            Alert.alert(error.message)
          })
        })
      } else{
        console.error(error)
        Alert.alert(error.message)
      }
  }

    return (
      <View>
        <Text>
          Get Started! Create a subscription to meet and meet up with locals just like us! Already have an account? Login Here! 
        </Text>
        <TextInput label="email" style={{margin: 16 }} onChangeText={(event)=>{
          setFdata({...fdata,email:event})
         
        }}/>
        <TextInput label="Username" style={{ margin: 16 }} onChangeText={(event)=>{
          setFdata({...fdata,username:event})
          console.log(event)
        }} />
        <TextInput label="Password" style={{ margin: 16 }} onChangeText={(event)=> {
          setFdata({...fdata,password:event})
        }} />
        <Button title="Login" style={styles.button} color="primary" onPress={onSubmit} />
      </View>
    );
  }
  

  const styles = StyleSheet.create({
    button: {
      width: "100%"
    }})